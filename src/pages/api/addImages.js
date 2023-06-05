import initDB from "../../Helpers/initDB";
import AllPlants from "campusplantlens/Modal/AllPlants";

initDB();

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      await getImages(req, res);
      break;

    case "POST":
      await addImages(req, res);
      break;
  }
};

const addImages = async (req, res) => {
  const { imageUrl, plantName, remoID, indexToRemove } = req.body;
  try {
    if (remoID) {
      const plantDoc = await AllPlants.findById(remoID);

      // // Access the plantImages property
      const plantImages = await plantDoc.plantImages;

      // // Remove the element from the array using splice
      await plantImages.splice(indexToRemove, 1);

      // // Save the updated model back to the database
      const newData = await plantDoc.save();

      return res
        .status(201)
        .json({
          msg: "Image Deleted",
          indexToRemove,
          newData: newData.plantImages,
        });
    }

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

const getImages = async (req, res) => {
  try {
    const getImages = await AllPlants.find();
    const images = getImages.map((item) => {
      return { id: item._id, name: item.plantID, images: item.plantImages };
    });
    res.status(201).json(images);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
