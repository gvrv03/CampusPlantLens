import initDB from "campusplantlens/Helpers/initDB";
import Plant from "campusplantlens/Modal/Plant";
initDB();

export default async (req, res) => {
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
    longDesc,
    sciName,
    id,
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
    !shortDesc ||
    !longDesc ||
    !sciName ||
    !id
  ) {
    return res.status(404).json({ error: "Fill all the fields" });
  }
  try {
    const data = await Plant.findByIdAndUpdate(id, {
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
      longDesc,
      sciName,
    });

    return res.status(201).json({ msg: "Plant Updated", data });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
