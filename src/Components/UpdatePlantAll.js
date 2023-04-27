import Admin from "campusplantlens/Layout/Admin";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File
import { Content } from "next/font/google";
import { usePlantContext } from "campusplantlens/Context/PlantContext";
import { useUserAuth } from "campusplantlens/Context/UserAuthContext";
import Link from "next/link";

const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});
const UpdatePlantAll = () => {
  const [pDetails, setpDetails] = useState({});
  const { seteffect, allPlants, updateState, setupdateState, UpdateExisPlant } =
    usePlantContext();

  const { getExisPlantById } = usePlantContext();
  const { user } = useUserAuth();
  const [requiredState, setRequired] = useState(true);

  useEffect(() => {
    const getPlant = async () => {
      const res = await getExisPlantById(updateState.id);
      setpDetails(res);
    };
    getPlant();
  }, []);

  const onChange = (e) => {
    setpDetails({
      ...pDetails,
      [e.target.name]: e.target.value,
    });
  };
  const { PlantDetails } = pDetails ? pDetails : "";
  const { plantName } = PlantDetails ? PlantDetails : "";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      plantedBy,
      dateOfPlanted,
      plantimage,
      longitude,
      latitude,
      iframLoc,
      addressLine,
    } = pDetails;
    const res = await UpdateExisPlant(
      user.displayName,
      plantName,
      plantedBy,
      dateOfPlanted,
      plantimage,
      longitude,
      latitude,
      iframLoc,
      addressLine,
      updateState.id
    );

    seteffect(Math.random());
  };

  return (
    <div
      className={`h-screen ${updateState.state} place-items-center fixed top-0 right-0 left-0`}
    >
      <div
        className="h-full w-full bgLight"
        onClick={() => {
          setupdateState({ state: "hidden", id: "" });
        }}
      />

      <div className="w-full h-full md:w-3/4 md:mt-0 mt-28  p-5 md:h-4/5  absolute  bg-white">
        <h1 className="  bg-white flex justify-between  p-2 border mb-5 font-semibold   text-lg text-center">
          <div className="flex gap-5 justify-center items-center">
            <i className="bi bi-pen-fill " />
            <div>Update Plant</div>
          </div>
          <i
            onClick={() => {
              setupdateState({ state: "hidden", id: "" });
            }}
            className="bi cursor-pointer bi-x-lg"
          />
        </h1>
        <form
          onSubmit={handleSubmit}
          className="  h-90 w-full flex flex-col  border p-5 overflow-y-scroll"
        >
          <h2 className="font-semibold my-5 text-lg">Plant Details</h2>
          <div className="grid  md:grid-cols-2 grid-cols-1   gap-5">
            <div className="">
              <h5>Plant Name</h5>
              <select
                onChange={onChange}
                required={requiredState}
                value={pDetails ? plantName : ""}
                name="plantName"
                className="border w-full outline-none py-1 mt-2 px-5"
              >
                <option value="---SELECT---">---SELECT---</option>
                {allPlants.map((plant, index) => {
                  return (
                    <option value={plant.plantName} key={index}>
                      {plant.plantName}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="">
              <h5>Planted By</h5>
              <input
                type="text "
                onChange={onChange}
                required={requiredState}
                value={pDetails.plantedBy ? pDetails.plantedBy : ""}
                name="plantedBy"
                className="border w-full outline-none py-1 mt-2 px-5"
              />
            </div>

            <div className="">
              <h5>Date of plant</h5>
              <input
                type="date"
                onChange={onChange}
                required={requiredState}
                value={pDetails.dateOfPlanted ? pDetails.dateOfPlanted : ""}
                name="dateOfPlanted"
                className="border w-full outline-none py-1 mt-2 px-5"
              />
            </div>

            <div className="">
              <h5>Plant Image</h5>
              <input
                type="text"
                onChange={onChange}
                required={requiredState}
                value={pDetails.plantimage ? pDetails.plantimage : ""}
                name="plantimage"
                className="border w-full outline-none py-1 mt-2 px-5"
              />
            </div>
          </div>

          <h2 className="font-semibold my-5 text-lg">Location</h2>
          <div className="grid  md:grid-cols-2 grid-cols-1   gap-5">
            <div className="">
              <h5>Longitude</h5>
              <input
                type="text"
                onChange={onChange}
                required={requiredState}
                value={pDetails.longitude ? pDetails.longitude : ""}
                name="longitude"
                className="border w-full outline-none py-1 mt-2 px-5"
              />
            </div>
            <div className="">
              <h5>latitude</h5>
              <input
                type="text"
                onChange={onChange}
                required={requiredState}
                value={pDetails.latitude ? pDetails.latitude : ""}
                name="latitude"
                className="border w-full outline-none py-1 mt-2 px-5"
              />
            </div>

            <div className="">
              <h5>IFrame Location</h5>
              <input
                type="text"
                onChange={onChange}
                required={requiredState}
                value={pDetails.iframLoc ? pDetails.iframLoc : ""}
                name="iframLoc"
                className="border w-full outline-none py-1 mt-2 px-5"
              />
            </div>

            <div className="">
              <h5>Address Line</h5>
              <input
                type="text"
                onChange={onChange}
                required={requiredState}
                value={pDetails.addressLine ? pDetails.addressLine : ""}
                name="addressLine"
                className="border w-full outline-none py-1 mt-2 px-5"
              />
            </div>
          </div>

          <button
            type="submit"
            className="py-2 px-10 bg-red-700 font-semibold text-lg text-white mt-10 float-right"
          >
            Update Plant
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdatePlantAll;
