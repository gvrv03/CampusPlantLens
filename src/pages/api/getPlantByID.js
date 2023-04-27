import initDB from "campusplantlens/Helpers/initDB";
import Plant from "campusplantlens/Modal/Plant";
initDB();

export default async (req, res) => {
  const { id } = req.body;
  try {
    const singlePlant = await Plant.findById(id);
    return res.status(201).json(singlePlant);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
