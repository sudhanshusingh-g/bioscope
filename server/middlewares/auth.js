const auth = (req, res, next) => {
  const token = req.cookies.token;
  console.log("Middleware", token);
  next();
};
export default auth;