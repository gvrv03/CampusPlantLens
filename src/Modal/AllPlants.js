import mongoose, { models } from "mongoose";
const { Schema } = mongoose;
const { ObjectId } = mongoose.Schema.Types;

const plantAllSchema = new Schema(
  {
    addedBy: String,
    plantID: String,
    plantedBy: String,
    dateOfPlanted: String,
    plantimage: String,
    longitude: String,
    latitude: String,
    iframLoc: String,
    addressLine: String,
    plantImages: [
      {
        type: String,
      },
    ],
    PlantDetails: {
      type: ObjectId,
      ref: "plant",
    },
  },
  { timestamps: true }
);
export default mongoose.models.plantAll ||
  mongoose.model("plantAll", plantAllSchema);
