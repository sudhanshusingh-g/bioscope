export const verifyRole=(roles)=>(req,res,next)=>{
      const hasRequiredRole = roles.some((role)=>
        req.user.roles.includes(role)
    )
    if (!hasRequiredRole) {
      return res
        .status(403)
        .json({success:false, message: "Forbidden - Insufficient permissions" });
    }
    next();
}