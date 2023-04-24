import mongoose, { models } from "mongoose";
const { Schema } = mongoose;

const plantSchema = new Schema(
  {
    writtenBy: String,
    plantName: String,
    plantedBy: String,
    dateOfPlanted: String,
    maintainedBy: String,
    plantimage: String,
    noOfPlants: String,
    category: String,
    longitude: String,
    latitude: String,
    iframLoc: String,
    addressLine: String,
    shortDesc: String,
    longDesc: { type: String, default: " " },
    sciName: String,
    plantImages: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);
export default mongoose.models.plant || mongoose.model("plant", plantSchema);
