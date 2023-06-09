import initDB from "campusplantlens/Helpers/initDB";
import Plant from "campusplantlens/Modal/Plant";
import AllPlants from "campusplantlens/Modal/AllPlants";
initDB();

export default async (req, res) => {
  try {
    const { id } = req.body;
    await AllPlants.deleteMany({ PlantDetails: id });
    const result = await Plant.findByIdAndDelete(id);
    return res.status(200).json({ msg: "Plant Deleted", result });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
