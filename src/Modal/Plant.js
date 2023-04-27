import mongoose, { models } from "mongoose";
const { Schema } = mongoose;

const plantSchema = new Schema(
  {
    writtenBy: String,
    plantName: String,
    maintainedBy: String,
    plantimage: String,
    category: String,
    shortDesc: String,
    longDesc: { type: String, default: " " },
    sciName: String,
  },
  { timestamps: true }
);
export default mongoose.models.plant || mongoose.model("plant", plantSchema);
