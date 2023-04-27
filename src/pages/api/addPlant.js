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
    maintainedBy,
    plantimage,
    category,
    shortDesc,
    longDesc,
    sciName,
  } = req.body;
  if (
    !writtenBy ||
    !plantName ||
    !maintainedBy ||
    !plantimage ||
    !category ||
    !shortDesc ||
    !longDesc ||
    !sciName
  ) {
    return res.status(404).json({ error: "Fill all the fields" });
  }
  try {
    const result = await Plant({
      writtenBy,
      plantName,
      maintainedBy,
      plantimage,
      category,
      shortDesc,
      longDesc,
      sciName,
    }).save();
    return res.status(201).json({ msg: "Plant Added", result });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getPlants = async (req, res) => {
  try {
    const allPlants = await Plant.find();

    return res.status(201).json(allPlants);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
