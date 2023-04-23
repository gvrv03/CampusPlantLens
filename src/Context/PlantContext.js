import PopUpModal from "campusplantlens/Components/PopUpModal";
import { useContext } from "react";
import { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";

const plantContext = createContext();
export function PlantContexProvider({ children }) {
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
    shortDesc
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
      }),
    });
    const data = await res.json();
    if (data.msg) {
      openModal("success", data.msg);
    } else {
      openModal("fail", data.error);
    }
  };
  return (
    <plantContext.Provider
      value={{
        addPlant,
        closeModal,
        openModal,
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
