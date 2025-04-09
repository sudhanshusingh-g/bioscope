import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
  const authCookie = req.cookies;
  const token=authCookie.USER_AUTH

   if (!token) {
     return res
       .status(401)
       .json({ success: false, message: "Unauthorized access." });
   }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(403).json({
      success:false,
      message:"Invalid or expired token"
    });
  }
};
export default auth;