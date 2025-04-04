import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const users = [];

const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  // Hash password
  const salt = await bcrypt.genSalt(12);
  const hashedPassword = await bcrypt.hash(password, salt);
  const user = { name, email, hashedPassword };
  users.push(user);
  res.status(200).json({
    name,
    email,
    hashedPassword,
  });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const existingUser = users.find((user) => user.email === email);
  const isMatch = bcrypt.compare(password, existingUser.hashedPassword);
  if (!isMatch) {
    res.status(400).json({ message: "Invalid cred" });
  }
  const payload = { existingUser: existingUser.name };
  const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "1d" });

  res.cookie("token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    maxAge: 3600000,
  });
  res.status(200).json({ message: "Logged in", token });
};

const currentUser=(req,res)=>{
  res.send("Current user");
};

export { createUser, loginUser,currentUser };
