import PopUpModal from "campusplantlens/Components/PopUpModal";
import { useContext } from "react";
import { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";

const plantContext = createContext();
export function PlantContexProvider({ children }) {
  const [allPlants, setallPlants] = useState([]);
  const [effect, seteffect] = useState("");
  const [updateState, setupdateState] = useState({
    state: "hidden",
    id: "",
  });
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

  const updatePlant = async (
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
    id
  ) => {
    const res = await fetch("/api/updatePlant", {
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
        id,
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

  const deletePlantById = async (id) => {
    const res = await fetch("/api/deletePlantById", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
      }),
    });
    const data = await res.json();
    return data;
  };

  const getPlantById = async (id) => {
    const res = await fetch("/api/getProductByID", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
      }),
    });
    const data = await res.json();
    return data;
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
  }, [updateState,deletePlantById]);

  return (
    <plantContext.Provider
      value={{
        addPlant,
        closeModal,
        openModal,
        allPlants,
        getPlantById,
        updateState,
        deletePlantById,
        updatePlant,
        setupdateState,
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
