import initDB from "campusplantlens/Helpers/initDB";
import AllPlants from "campusplantlens/Modal/AllPlants";
initDB();

export default async (req, res) => {
  const { id } = req.body;
  try {
    const allPlants = await AllPlants.find({
      PlantDetails: id,
    }).populate("PlantDetails");
    return res.status(200).json(allPlants);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
