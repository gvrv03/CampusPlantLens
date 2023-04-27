import initDB from "campusplantlens/Helpers/initDB";
import AllPlants from "campusplantlens/Modal/AllPlants";
initDB();

export default async (req, res) => {
  const { id } = req.body;
  try {
    const singlePlant = await AllPlants.findById(id).populate("PlantDetails");
    return res.status(201).json(singlePlant);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
