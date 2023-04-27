import mongoose, { models } from "mongoose";
const { Schema } = mongoose;

const plantAllSchema = new Schema(
  {
    plantedBy: String,
    dateOfPlanted: String,
    noOfPlants: String,
    longitude: String,
    latitude: String,
    iframLoc: String,
    addressLine: String,
    plantImages: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);
export default mongoose.models.plantAll ||
  mongoose.model("plantAll", plantAllSchema);
