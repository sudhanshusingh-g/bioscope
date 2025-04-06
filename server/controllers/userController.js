import jwt from "jsonwebtoken";
import User from "../models/User.js";
import userDTO from "../dtos/userDTO.js";

const createUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required." });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "Email already registered",
      });
    }

    const user = new User({ name, email, password });
    await user.save();

    return res.status(201).json({
      success: true,
      message: "User registered successfully.",
    });
  } catch (err) {
    next(err); // pass error to middleware
  }
};

const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required." });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User not found. Please register.",
      });
    }

    const isPasswordMatch = await user.comparePassword(password);
    if (!isPasswordMatch) {
      return res.status(400).json({
        success: false,
        message: "Incorrect password! Try again",
      });
    }

    const payload = userDTO(user);
    const token = jwt.sign(payload, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
      success: true,
      message: "User successfully logged in.",
      user:payload
    });
  } catch (err) {
    next(err);
  }
};

const currentUser = (req, res, next) => {
  try {
    const user = req.user;
    return res.status(200).json({success:true,message:`${user.name} is logged in`,data:user});
  } catch (err) {
    next(err);
  }
};

export { createUser, loginUser, currentUser };
