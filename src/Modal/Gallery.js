import mongoose, { models } from "mongoose";
const { Schema } = mongoose;
const { ObjectId } = mongoose.Schema.Types;

const gallerySchema = new Schema(
  {
    image: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);
export default mongoose.models.Gallery ||
  mongoose.model("Gallery", gallerySchema);
