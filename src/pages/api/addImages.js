import initDB from "../../Helpers/initDB";
import AllPlants from "campusplantlens/Modal/AllPlants";

initDB();

export default async (req, res) => {
  const { imageUrl, plantName } = req.body;
  try {
    if (!imageUrl || !plantName) {
      return res.status(422).json({ error: "Please fill all the fields" });
    }

    const plant = await AllPlants.findOne({
      plantID: plantName,
    });

    if (!plant) {
      return res.status(404).json({ error: "This Plant not Exists" });
    }

    const filter = { plantID: plantName };
    const update = { $push: { plantImages: imageUrl } };

    const addImages = await AllPlants.findOneAndUpdate(filter, update);
    res.status(201).json({ msg: "Image Added", addImages });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
