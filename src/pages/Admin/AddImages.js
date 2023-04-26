import { usePlantContext } from "campusplantlens/Context/PlantContext";
import Admin from "campusplantlens/Layout/Admin";
import React, { useState } from "react";

const AddImages = () => {
  const { allPlants, addImagesByPlantName } = usePlantContext();
  const [pDetails, setpDetails] = useState({});
  const [loading, setloading] = useState(false);

  const onChange = (e) => {
    setpDetails({
      ...pDetails,
      [e.target.name]: e.target.value,
    });
  };
  const handleAddImages = async (e) => {
    e.preventDefault();
    setloading(true);
    const { plantName, imgUrl } = pDetails;
    await addImagesByPlantName(plantName, imgUrl);
    setloading(false);
  };
  return (
    <Admin>
      <h1 className="font-bold ">Add Plant Images </h1>

      <form onSubmit={handleAddImages} className="mt-5 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <h4 className="text-xs font-semibold">Select Plant</h4>
            <select
              onChange={onChange}
              value={pDetails.plantName ? pDetails.plantName : ""}
              name="plantName"
              className="border w-full outline-none py-1 mt-2 px-5"
            >
              <option required={true} value="---Select Plant---">
                ---Select Plant---
              </option>
              ;
              {allPlants.map((item, index) => {
                return (
                  <option value={item.plantName} key={index}>
                    {item.plantName}
                  </option>
                );
              })}
            </select>
          </div>

          <div>
            <h4 className="text-xs font-semibold">Image Link</h4>
            <input
              onChange={onChange}
              value={pDetails.imgUrl ? pDetails.imgUrl : ""}
              name="imgUrl"
              required={true}
              className="border w-full outline-none py-1 mt-2 px-5"
              type="url"
            />
          </div>
        </div>
        <button
          type="submit"
          disabled={loading ? true : false}
          className="bg-blue-600 flex justify-center gap-5 w-full py-2 mt-5 text-white font-semibold"
        >
          {loading && (
            <img src="/loadingSpinner.gif" className="w-5" alt="spinner" />
          )}
          Add Image
        </button>
      </form>
    </Admin>
  );
};

export default AddImages;
