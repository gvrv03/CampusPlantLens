import initDB from "campusplantlens/Helpers/initDB";
import Plant from "campusplantlens/Modal/Plant";
import AllPlants from "campusplantlens/Modal/AllPlants";
initDB();

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      await getPlants(req, res);
      break;
    case "POST":
      await addPlant(req, res);
      break;
  }
};

const addPlant = async (req, res) => {
  const {
    addedBy,
    plantName,
    plantedBy,
    dateOfPlanted,
    plantimage,
    longitude,
    latitude,
    iframLoc,
    addressLine,
  } = req.body;

  if (
    !addedBy ||
    !plantName ||
    !plantedBy ||
    !dateOfPlanted ||
    !plantimage ||
    !longitude ||
    !latitude ||
    !iframLoc ||
    !addressLine
  ) {
    return res.status(404).json({ error: "Fill all the fields" });
  }

  try {
    const findPlant = await Plant.findOne({ plantName });
    if (!findPlant) {
      return res.status(500).json({ error: plantName + " Not Exists" });
    }

    const count = await AllPlants.find({ PlantDetails: findPlant._id });

    const result = await AllPlants({
      addedBy,
      plantID: plantName + "_" + count.length,
      plantedBy,
      dateOfPlanted,
      plantimage,
      longitude,
      latitude,
      iframLoc,
      addressLine,
      PlantDetails: findPlant._id,
    }).save();

    return res.status(201).json({ msg: "Plant Added", result });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getPlants = async (req, res) => {
  try {
    const allPlants = await AllPlants.find().populate("PlantDetails");
    return res.status(201).json(allPlants);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
