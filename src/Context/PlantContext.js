import PopUpModal from "campusplantlens/Components/PopUpModal";
import { useContext } from "react";
import { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";

const plantContext = createContext();
export function PlantContexProvider({ children }) {
  const [allPlants, setallPlants] = useState({
    isLoading: true,
    data: [],
  });
  const [allExisPlants, setallExisPlants] = useState({
    isLoading: true,
    data: [],
  });

  const [allExisImages, setallExisImages] = useState({
    isLoading: true,
    data: [],
  });

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

  const deleteExisPlantById = async (id) => {
    const res = await fetch("/api/deleteExisPlantById", {
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

  const getExisPlantById = async (id) => {
    const res = await fetch("/api/getExisPlantByID", {
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

  const getAllExisPlantById = async (id) => {
    const res = await fetch("/api/getAllExisPlantByID", {
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
    const res = await fetch("/api/getPlantByID", {
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
    return data;
  };

  const UpdateExisPlant = async (
    addedBy,
    plantName,
    plantedBy,
    dateOfPlanted,
    plantimage,
    longitude,
    latitude,
    iframLoc,
    addressLine,
    id
  ) => {
    const res = await fetch("/api/updateExisPlant", {
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
    return data;
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
    if (data.msg) {
      openModal("success", data.msg);
    } else {
      openModal("fail", data.error);
    }
    return data;
  };

  const getPlant = async () => {
    setallPlants({
      isLoading: true,
      data: [],
    });
    const res = await fetch("/api/addPlant", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setallPlants({
      isLoading: false,
      data: data,
    });
  };

  const getExisPlant = async () => {
    setallExisPlants({
      isLoading: true,
      data: [],
    });
    const res = await fetch("/api/addExisPlant", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    setallExisPlants({
      isLoading: false,
      data: data,
    });
  };

  const removeExisPlantImage = async (id, index) => {
    const res = await fetch("/api/addImages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        remoID: id,
        indexToRemove: index,
      }),
    });
    const data = await res.json();
  };

  const getExisPlantImages = async () => {
    setallExisImages({
      isLoading: true,
      data: [],
    });
    const res = await fetch("/api/addImages", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setallExisImages({
      isLoading: false,
      data: data,
    });
  };

  useEffect(() => {
    getExisPlant();
    getPlant();
    getExisPlantImages();
  }, [effect]);

  return (
    <plantContext.Provider
      value={{
        addPlant,
        closeModal,
        openModal,
        allPlants,
        allExisPlants,
        getPlantById,
        updateState,
        getExisPlantById,
        deletePlantById,
        updatePlant,
        setupdateState,
        seteffect,
        UpdateExisPlant,
        addImagesByPlantName,
        removeExisPlantImage,
        deleteExisPlantById,
        getAllExisPlantById,
        addExisPlant,
        allExisImages,
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
