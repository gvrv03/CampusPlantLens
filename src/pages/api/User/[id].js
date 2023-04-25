import initDB from "campusplantlens/Helpers/initDB";
import User from "campusplantlens/Modal/User";
initDB();
export default async function handler(req, res) {
  try {
    const { id } = req.query;
    const user = await User.findOne({ firebaseID: id });
    if (!user) {
      return res.status(404).json({ error: "This User not Exists" });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}
