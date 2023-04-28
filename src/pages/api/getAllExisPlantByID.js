import initDB from "campusplantlens/Helpers/initDB";
import AllPlants from "campusplantlens/Modal/AllPlants";
initDB();

export default async (req, res) => {
  const { id } = req.body;
  try {
    const singlePlantAll = await AllPlants.find({ PlantDetails: id });
    return res.status(201).json(singlePlantAll);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
