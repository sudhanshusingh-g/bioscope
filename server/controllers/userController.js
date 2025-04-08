import jwt from "jsonwebtoken";
import User from "../models/User.js";

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

    const payload ={id:user._id};
    const token = jwt.sign(payload, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });

    return res.status(200).json({
      success: true,
      message: "User successfully logged in.",
      user:payload,
      token:token
    });
  } catch (err) {
    next(err);
  }
};

const currentUser = async (req, res, next) => {
  try {
    const _id = req.user.id;
    const user = await User.findOne({ _id }).select("-password");
    return res.status(200).json({success:true,message:`${user.name} is logged in`,data:user});
  } catch (err) {
    next(err);
  }
};

export { createUser, loginUser, currentUser };
