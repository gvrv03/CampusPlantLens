import initDB from "campusplantlens/Helpers/initDB";
import AllPlants from "campusplantlens/Modal/AllPlants";
initDB();

export default async (req, res) => {
  switch (req.method) {
    case "DELETE":
      await deletePlant(req, res);
      break;
    case "POST":
      await updatePlant(req, res);
      break;
  }
};

const deletePlant = async (req, res) => {
  try {
    const { id } = req.body;
    const result = await Plant.findByIdAndDelete(id);
    return res.status(200).json({ msg: "Plant Deleted", result });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updatePlant = async (req, res) => {
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
    id,
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
    !addressLine ||
    !id
  ) {
    return res.status(404).json({ error: "Fill all the fields" });
  }
  try {
    const data = await AllPlants.findByIdAndUpdate(id, {
      addedBy,
      plantName,
      plantedBy,
      dateOfPlanted,
      plantimage,
      longitude,
      latitude,
      iframLoc,
      addressLine,
    });

    return res.status(201).json({ msg: "Plant Updated", data });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
