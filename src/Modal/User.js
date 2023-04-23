import mongoose, { models } from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    role: {
      type: String,
      default: "user",
    },
    userPhoto: String,
    email: String,
    password: String,
    fName: String,
    firebaseID: String,
  },
  { timestamps: true }
);
export default mongoose.models.user || mongoose.model("user", userSchema);
