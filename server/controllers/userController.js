import jwt from "jsonwebtoken";
import User from "../models/User.js";
import userDTO from "../dtos/userDTO.js";


const createUser = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required." });
  }
  // Validation for existing user
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    res.status(409).json({
      success: false,
      message: "User already exist.Please login",
    });
  }

  const user = new User({
    name,
    email,
    password,
  });
  await user.save();
  res.status(201).json({
    success: true,
    message: "User registered successfully.",
  });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required." });
  }
  const user = await User.findOne({ email });
  if (!user) {
    return res
      .status(401)
      .json({ success: false, message: "User not found. Please register." });
  }
  const isPasswordMatch = await user.comparePassword(password);
  if (!isPasswordMatch) {
    return res
      .status(400)
      .json({ success: false, message: "Incorrect password!Try again" });
  }
  const payload = userDTO(user);
  const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "1d" });

  res.cookie("token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    maxAge: 3600000,
  });
  res.status(200).json({ success: true, message: "Logged in",user:payload,token:token });
};

const currentUser = (req, res) => {
  const  user  = req.user;
  res.send(user);
};

export { createUser, loginUser, currentUser };
