// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import initDB from "campusplantlens/Helpers/initDB";
initDB();
export default function handler(req, res) {

  try {
    
    res.status(200).json({ name: "John Doe" });
  } catch (error) {
    res.status(500).json({ name: "Error" });
    
  }
}
