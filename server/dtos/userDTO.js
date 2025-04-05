const userDTO=(userDoc)=>{
    const user=userDoc.toObject();

    return {
      id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      phoneVerified: user.phoneVerified,
      profileImage: user.profileImage,
      roles: user.roles,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
}

export default userDTO;