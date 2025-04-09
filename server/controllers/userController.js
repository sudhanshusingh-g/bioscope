import User from "../models/User.js";



export const currentUser = async (req, res, next) => {
  try {
    const {userId} = req.user;
    const user = await User.findOne({ _id: userId }).select("-password");
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: `${user.name} is logged in`,
      data: user,
    });
  } catch (err) {
    next(err);
  }
};

