import initDB from "campusplantlens/Helpers/initDB";
import AllPlants from "campusplantlens/Modal/AllPlants";
initDB();

export default async (req, res) => {
  try {
    const { id } = req.body;
    const result = await AllPlants.findByIdAndDelete(id);
    return res.status(200).json({ msg: "Plant Deleted", result });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
