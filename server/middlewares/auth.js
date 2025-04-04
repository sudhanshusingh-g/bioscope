import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
  const token = req.cookies.token;
  if(!token){
    return res.status(401).json({
      success:false,
      message:"Not authenticated",
    });
  }
  try {
    const user = jwt.verify(token, process.env.SECRET_KEY);
    req.user=user;
    next();
  } catch (error) {
    return res.status(403).json({
      success:false,
      message:"Invalid or expired token"
    });
  }
};
export default auth;