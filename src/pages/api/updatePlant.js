import initDB from "campusplantlens/Helpers/initDB";
import Plant from "campusplantlens/Modal/Plant";
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
    console.log("Hey");
    const result = await Plant.findByIdAndDelete(id);
    return res.status(200).json({ msg: "Plant Deleted", result });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updatePlant = async (req, res) => {
  const {
    writtenBy,
    plantName,

    maintainedBy,
    plantimage,
    category,
    shortDesc,
    longDesc,
    sciName,
    id,
  } = req.body;
  if (
    !writtenBy ||
    !plantName ||
    !maintainedBy ||
    !plantimage ||
    !category ||
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
      maintainedBy,
      plantimage,
      category,
      shortDesc,
      longDesc,
      sciName,
    });

    return res.status(201).json({ msg: "Plant Updated", data });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
