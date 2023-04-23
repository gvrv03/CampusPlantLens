import initDB from "campusplantlens/Helpers/initDB";
import Plant from "campusplantlens/Modal/Plant";
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
    writtenBy,
    plantName,
    plantedBy,
    dateOfPlanted,
    maintainedBy,
    plantimage,
    noOfPlants,
    category,
    longitude,
    latitude,
    iframLoc,
    addressLine,
    shortDesc,
  } = req.body;
  if (
    !writtenBy ||
    !plantName ||
    !plantedBy ||
    !dateOfPlanted ||
    !maintainedBy ||
    !plantimage ||
    !noOfPlants ||
    !category ||
    !longitude ||
    !latitude ||
    !iframLoc ||
    !addressLine ||
    !shortDesc
  ) {
    return res.status(404).json({ error: "Fill all the fields" });
  }
  try {
    await Plant(req.body).save();
    return res.status(201).json({ msg: "Plant Added" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
