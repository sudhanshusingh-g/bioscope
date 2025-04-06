// const errorHandler=(err,req,res,next)=>{
//     console.error(err.stack);
//     res.status(err.statusCode || 500).json({
//         success:false,
//         message:err.message || "Internal Server error",
//     });
// };

// export default errorHandler;
const errorHandler = (err, req, res, next) => {
  // Prevent sending headers if already sent
  if (res.headersSent) {
    return next(err);
  }

  const statusCode = err.statusCode || 500;
  const isDev = process.env.NODE_ENV !== "production";

  // Log full stack trace in development
  if (isDev) {
    console.error("🔥 Error:", err);
  } else {
    console.error("🔥 Error:", err.message);
  }

  res.status(statusCode).json({
    success: false,
    message: err.message || "Internal Server Error",
    ...(isDev && { stack: err.stack }),
  });
};

export default errorHandler;
