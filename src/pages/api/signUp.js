import initDB from "campusplantlens/Helpers/initDB";
import User from "campusplantlens/Modal/User";
initDB();
export default async (req, res) => {
  switch (req.method) {
    case "GET":
      await getUsers(req, res);
      break;
    case "POST":
      await signUpUser(req, res);
      break;
  }
};

// To Add Users
const signUpUser = async (req, res) => {
  const { userPhoto, fName, email, password, firebaseID } = req.body;

  try {
    const credentail = {
      userPhoto,
      email,
      password,
      fName,
      firebaseID,
    };

    const user = await User.findOne({ firebaseID: firebaseID });
    if (!user) {
      const userStatus = await new User(credentail).save();
      return res.status(201).json({ msg: "Account Created", userStatus });
    }
    res.status(500).json({ error: "Already Exists" });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getUsers = async (req, res) => {
  try {
    const getAllUsers = await User.find();
    res.status(200).json(getAllUsers);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
