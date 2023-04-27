import PopUpModal from "campusplantlens/Components/PopUpModal";
import { useContext } from "react";
import { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";

const plantContext = createContext();
export function PlantContexProvider({ children }) {
  const [allPlants, setallPlants] = useState([]);
  const [effect, seteffect] = useState("fhgdsgfsdha");
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
    maintainedBy,
    plantimage,
    category,
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
        maintainedBy,
        plantimage,
        category,
        shortDesc,
        longDesc,
        sciName,
        id,
      }),
    });
    const data = await res.json();
    seteffect(Math.random());
    if (data.msg) {
      openModal("success", data.msg);
    } else {
      openModal("fail", data.error);
    }
  };

  const addImagesByPlantName = async (plantName, imgUrl) => {
    const res = await fetch("/api/addImages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        imageUrl: imgUrl,
        plantName: plantName,
      }),
    });
    const data = await res.json();
    seteffect(Math.random());
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
    seteffect(Math.random());
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

  const addExisPlant = async (
    addedBy,
    plantName,
    plantedBy,
    dateOfPlanted,
    plantimage,
    longitude,
    latitude,
    iframLoc,
    addressLine
  ) => {
    const res = await fetch("/api/addExisPlant", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        addedBy,
        plantName,
        plantedBy,
        dateOfPlanted,
        plantimage,
        longitude,
        latitude,
        iframLoc,
        addressLine,
      }),
    });
    const data = await res.json();
    seteffect(Math.random());
    if (data.msg) {
      openModal("success", data.msg);
    } else {
      openModal("fail", data.error);
    }
  };

  const addPlant = async (
    writtenBy,
    plantName,
    maintainedBy,
    plantimage,
    category,
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
        maintainedBy,
        plantimage,
        category,
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
  }, [effect]);

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
        seteffect,
        addImagesByPlantName,
        addExisPlant,
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
