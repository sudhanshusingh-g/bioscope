import User from "../models/User.js";
import jwt from "jsonwebtoken";

export const createUser = async (req, res, next) => {
  const { name, email, password, role = "user" } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User already registered. Please login",
      });
    }

    const allowedRoles = ["user", "partner"];
    const roleToAdd = role.toLowerCase();

    if (!allowedRoles.includes(roleToAdd)) {
      return res.status(400).json({
        success: false,
        message: `Invalid role "${role}". Allowed roles are: ${allowedRoles.join(
          ", "
        )}`,
      });
    }

    const baseRoles = ["user"];

    if(role.toLowerCase()!=="user" && !baseRoles.includes(role.toLowerCase())){
      baseRoles.push(role.toLowerCase());
    }

    const newUser = new User({
      name,
      email,
      password,
      roles:baseRoles
    });

    await newUser.save();

    res.status(201).json({
      success: true,
      message: "User registered successfully",
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

export const loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      res.status(404).json({
        success: false,
        message: "User does not exist.Please register.",
      });
    }
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      res.status(401).json({
        success: false,
        message: "Invalid password.Please try again",
      });
    }
    const payload = {
      userId: user._id,
      roles: user.roles,
      email: user.email,
      name: user.name,
    };
    const token = jwt.sign(payload, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });
    res.cookie("USER_AUTH", token, {
      maxAge: 24 * 60 * 60 * 1000,
      sameSite: "none",
      secure: false,
      httpOnly: true,
    });
    res.status(200).json({
      success: true,
      message: "Login successful",
      user: payload,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

