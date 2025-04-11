import User from "../models/User.js";

export const currentUser = async (req, res, next) => {
  try {
    const { userId } = req.user;
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

export const updateUser = async (req, res, next) => {
  try {
    const {userId} = req.user;
    const updates = req.body;
    const user = await User.findByIdAndUpdate(
      userId,
      { $set: updates },
      { new: true, runValidators: true }
    ).select("-password");
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
  
    res.status(200).json({
      success:true,
      message:"Update successful",
      user
    });
  } catch (error) {
    next(error);
  }
};

export const deleteUser=async (req,res,next)=>{
  try {
    const { userId } = req.user;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    user.profileDeleted=true;
    await user.save();
    res.status(200).json({
      success:true,
      message:"User deleted successfully."
    });
  } catch (error) {
    next(error)
  }
}
