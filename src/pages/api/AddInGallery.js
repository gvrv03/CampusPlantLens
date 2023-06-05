import initDB from "../../Helpers/initDB";
import Gallery from "campusplantlens/Modal/Gallery";

initDB();

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      await getImages(req, res);
      break;
    case "POST":
      await addImages(req, res);
      break;

    case "DELETE":
      await deleteImages(req, res);
      break;
  }
};
const addImages = async (req, res) => {
  const { imageUrl, imageID } = req.body;

  try {
    if (imageID) {
      const getImage = await Gallery.findByIdAndDelete(imageID);
      if (!getImage) {
        return res.status(404).json({ error: "Image not Found" });
      } else {
        return res.status(201).json({ msg: "image Deleted", Image: getImage });
      }
    }

    if (!imageUrl) {
      return res.status(422).json({ error: "Please fill all the fields" });
    }
    const addImages = await Gallery.create({ image: imageUrl });
    res.status(201).json({ msg: "Image Added", addImages });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getImages = async (req, res) => {
  try {
    const getImages = await Gallery.find();
    res.status(201).json(getImages);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteImages = async (req, res) => {
  try {
    // const { imageID } = req.query;
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
