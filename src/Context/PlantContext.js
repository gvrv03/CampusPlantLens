import PopUpModal from "campusplantlens/Components/PopUpModal";
import { useContext } from "react";
import { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";

const plantContext = createContext();
export function PlantContexProvider({ children }) {
  const [allPlants, setallPlants] = useState([]);
  const [effect, seteffect] = useState("");
  const [toastMsg, settoastMsg] = useState({
    state: "hidden",
    icon: "success",
    msg: "Already Exist",
  });
  const closeModal = () => {
    settoastMsg({
      state: "hidden",
      icon: "",
      msg: "",
    });
  };

  const openModal = (icon, msg) => {
    settoastMsg({
      state: "block",
      icon: icon,
      msg: msg,
    });
  };

  const addPlant = async (
    writtenBy,
    plantName,
    plantedBy,
    dateOfPlanted,
    maintainedBy,
    plantimage,
    noOfPlants,
    category,
    longitude,
    latitude,
    iframLoc,
    addressLine,
    shortDesc,
    longDesc,
    sciName
  ) => {
    const res = await fetch("/api/addPlant", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        writtenBy,
        plantName,
        plantedBy,
        dateOfPlanted,
        maintainedBy,
        plantimage,
        noOfPlants,
        category, 
        longitude,
        latitude,
        iframLoc,
        addressLine,
        shortDesc,
        longDesc,
        sciName,
      }),
    });
    const data = await res.json();
    console.log(data);
    if (data.msg) {
      openModal("success", data.msg);
    } else {
      openModal("fail", data.error);
    }
  };

  const getPlant = async () => {
    const res = await fetch("/api/addPlant", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setallPlants(data);
  };
  useEffect(() => {
    getPlant();
  }, []);

  return (
    <plantContext.Provider
      value={{
        addPlant,
        closeModal,
        openModal,
        allPlants,
      }}
    >
      {" "}
      <PopUpModal
        state={toastMsg.state}
        icon={toastMsg.icon}
        msg={toastMsg.msg}
      />
      {children}
    </plantContext.Provider>
  );
}

export function usePlantContext() {
  return useContext(plantContext);
}
