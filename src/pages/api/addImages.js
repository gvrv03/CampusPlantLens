import initDB from "../../Helpers/initDB";
import Plant from "campusplantlens/Modal/Plant";

initDB();

export default async (req, res) => {
  const { imageUrl, plantName } = req.body;
  try {
    if (!imageUrl || !plantName) {
      return res.status(422).json({ error: "Please fill all the fields" });
    }

    const plant = await Plant.findOne({
      plantName,
    });

    if (!plant) {
      return res.status(404).json({ error: "This Plant not Exists" });
    }

    const filter = { plantName: plantName };
    const update = { $push: { plantImages: imageUrl } };

    const addImages = await Plant.findOneAndUpdate(filter, update);
    res.status(201).json({ msg: "Image Added", addImages });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
