import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Full Name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Please enter a valid email"],
      unique: true,
      sparse: true,
      validate: {
        validator: function (v) {
          return !v || /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(v);
        },
        message: "Invalid email format",
      },
    },
    password: {
      type: String,
      required: true,
      minLength: [8, "Password length should be minimum 8 characters."],
    },
    phone: {
      type: String,
      unique: true,
      sparse:true,
      validate: {
        validator: function (v) {
          return !v || /^\d{10}$/.test(v);
        },
        message: "Phone number must be exactly 10 digits.",
      },
    },
    phoneVerified:{
        type:Boolean,
        default:false
    },
    profileImage: {
      type: String,
      default: function () {
        return `https://ui-avatars.com/api/?name=${this.name}&background=random&color=fff`;
      },
    },
    roles: {
      type: [String],
      enum: ["user", "admin", "partner"],
      default: ["user"],
    },
    profileDeleted:{
        type:Boolean,
        default:false,
    }
  },
  {
    timestamps: true,
  }
);



userSchema.pre("save", async function (next) {
  if (!this.roles.includes("user")) {
    this.roles.push("user");
  }

  this.roles = [...new Set(this.roles)];
  if (!this.isModified("password")) return next();
  
  try {
    const salt = await bcrypt.genSalt(12);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});


userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};





const User = mongoose.model("User", userSchema);
export default User;
