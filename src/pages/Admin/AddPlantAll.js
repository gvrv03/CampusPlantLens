import Admin from "campusplantlens/Layout/Admin";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File
import { Content } from "next/font/google";
import { usePlantContext } from "campusplantlens/Context/PlantContext";
import { useUserAuth } from "campusplantlens/Context/UserAuthContext";
import Link from "next/link";

const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});
const AddPlantAll = () => {
  const [pDetails, setpDetails] = useState({});
  const { seteffect, addExisPlant, allPlants } = usePlantContext();
  const { user } = useUserAuth();
  const [requiredState, setRequired] = useState(false);
  const onChange = (e) => {
    setpDetails({
      ...pDetails,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      plantName,
      plantedBy,
      dateOfPlanted,
      plantimage,
      longitude,
      latitude,
      iframLoc,
      addressLine,
    } = pDetails;
    await addExisPlant(
      user.displayName,
      plantName,
      plantedBy,
      dateOfPlanted,
      plantimage,
      longitude,
      latitude,
      iframLoc,
      addressLine
    );

    seteffect(Math.random());
  };

  return (
    <Admin>
      <div className="p-2 justify-between md:justify-start  flex gap-5 rounded-full border font-semibold ">
        <Link href="/Admin/AddPlant" className=" px-5 py-2 rounded-full">
          Add New Plant
        </Link>
        <Link
          href="/Admin/AddPlantAll"
          className="bg-blue-500 text-white px-5 py-2 rounded-full"
        >
          Add Existing Plant
        </Link>
      </div>

      <form onSubmit={handleSubmit} className="mt-10">
        <h2 className="font-semibold my-5 text-lg">Plant Details</h2>
        <div className="grid  md:grid-cols-2 grid-cols-1   gap-5">
          <div className="">
            <h5>Plant Name</h5>
            <select
              onChange={onChange}
              required={requiredState}
              value={pDetails.plantName ? pDetails.plantName : ""}
              name="plantName"
              className="border w-full outline-none py-1 mt-2 px-5"
            >
              <option value="---SELECT---">---SELECT---</option>
              {allPlants.map((plant, index) => {
                return (
                  <option value={plant.plantName} key={index}>
                    {plant.plantName}{" "}
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
          Add Plant
        </button>
      </form>
    </Admin>
  );
};

export default AddPlantAll;
