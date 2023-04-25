import UpdatePlant from "campusplantlens/Components/UpdatePlant";
import { usePlantContext } from "campusplantlens/Context/PlantContext";
import Admin from "campusplantlens/Layout/Admin";
import React, { useState } from "react";

const AllPlants = () => {
  const { allPlants, updateState, setupdateState, deletePlantById } =
    usePlantContext();
  const [popUp, setpopUp] = useState({ state: "hidden", id: "" });

  const PopUp = () => {
    return (
      <div
        className={`fixed  h-screen w-full ${popUp.state} place-items-center left-0 z-50 top-0 right-0 `}
      >
        <div
          onClick={() => {
            setpopUp({ state: "hidden", id: "" });
          }}
          className="bgLight h-full left-0 cursor-pointer right-0 w-full absolute top-0"
        />
        <div className=" px-10 z-50 rounded-md grid place-items-center bg-white p-5  ">
          <img className="w-20" src="/aniIcon/information.gif" alt="Info" />
          <div className="font-semibold my-5">Are yo sure to delete ?</div>
          <div className=" flex gap-5">
            <button
              onClick={() => {
                setpopUp({ state: "hidden", id: "" });
              }}
              type="button"
              className="border px-10 py-1 rounded-md "
            >
              Cancel
            </button>
            <button
              onClick={async () => {
                await deletePlantById(popUp.id);
                setpopUp({ state: "hidden", id: "" });
              }}
              type="button"
              className=" bg-red-600  rounded-md text-white px-10 py-1"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  };
  return (
    <Admin>
      <PopUp />

      <h5 className="font-semibold text-lg mb-5">All Plants</h5>
      <div className="border relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Plant name
              </th>
              <th scope="col" className="px-6 py-3">
                Plant Category
              </th>
              <th scope="col" className="px-6 py-3">
                Plant Planted By
              </th>
              <th scope="col" className="px-6 py-3">
                Plant Added by
              </th>
              <th scope="col" className="px-6 py-3">
                Edit/Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {allPlants &&
              allPlants.map((plant, index) => {
                const { plantName, category, plantedBy, writtenBy, _id } =
                  plant;
                return (
                  <>
                    <tr className="bg-white border-b " key={index}>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                      >
                        {plantName}
                      </th>
                      <td className="px-6 py-4">{category}</td>
                      <td className="px-6 py-4">{plantedBy}</td>
                      <td className="px-6 py-4">{writtenBy}</td>
                      <td className="px-6 py-4 flex gap-2 items-center">
                        <div
                          onClick={() => {
                            setupdateState({ state: "grid", id: _id });
                          }}
                          className="cursor-pointer border p-1  rounded-md  text-blue-500"
                        >
                          <i className="bi bi-pen-fill" />
                        </div>
                        <div className="cursor-pointer bg-white border p-1 rounded-md text-red-700">
                          <i
                            onClick={() => {
                              setpopUp({ state: "grid", id: _id });
                            }}
                            className="bi bi-trash-fill"
                          />
                        </div>
                      </td>
                    </tr>
                  </>
                );
              })}
          </tbody>
        </table>
        {allPlants.length === 0 && (
          <div className="grid place-items-center  p-5">Not Found</div>
        )}{" "}
      </div>
      {updateState.state === "hidden" ? "" : <UpdatePlant />}
    </Admin>
  );
};

export default AllPlants;
