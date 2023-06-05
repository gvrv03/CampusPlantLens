import UpdatePlant from "campusplantlens/Components/UpdatePlant";
import { usePlantContext } from "campusplantlens/Context/PlantContext";
import Admin from "campusplantlens/Layout/Admin";
import Link from "next/link";
import React, { useState } from "react";

const AllPlants = () => {
  const { allPlants, updateState, setupdateState, deletePlantById } =
    usePlantContext();
  const [popUp, setpopUp] = useState({ state: "hidden", id: "" });
  const [search, setsearch] = useState("");

  const filteredData = allPlants.data.filter((plant) => {
    if (!search) {
      return plant;
    }
    return plant.plantName.toLowerCase().includes(search.toLowerCase());
  });
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

      <div className="p-2 justify-between md:justify-start  flex gap-5 rounded-full border font-semibold ">
        <Link
          href="/Admin/AllPlants"
          className="bg-blue-500 text-white  px-5 py-2 rounded-full"
        >
          All Plants
        </Link>
        <Link href="/Admin/AllExisPlants" className="px-5 py-2 rounded-full">
          All Existing Plant
        </Link>
      </div>

      <input
        type="text"
        onChange={(e) => {
          setsearch(e.target.value);
        }}
        className="border w-full my-5 outline-none px-5 py-2 rounded-full"
        placeholder="Search Plant"
        id=""
      />

      <div className="border mt-5 overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
            <tr>
              <th scope="col" className="text-center px-6 py-3">
                Sr.No.
              </th>
              <th scope="col" className="px-6 py-3">
                Plant name
              </th>
              <th scope="col" className="px-6 py-3">
                Plant Category
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
            {filteredData &&
              filteredData.map((plant, index) => {
                const { plantName, category, writtenBy, _id } = plant;
                // allExisPlants

                return (
                  <>
                    <tr className="bg-white border-b " key={index}>
                      <td className="px-6 text-center py-4">{index + 1}</td>

                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                      >
                        {plantName}
                      </th>
                      <td className="px-6 py-4">{category}</td>
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
        {allPlants.isLoading && (
          <div className="bg-white p-5 mt-5 font-semibold text-center h-screen w-full grid place-items-center">
            <img src="/loadingSpinner.gif" alt="" className="w-10" />
          </div>
        )}
        {!allPlants.isLoading && filteredData.length === 0 && (
          <div className="grid place-items-center  p-5">Not Found</div>
        )}{" "}
      </div>
      {updateState.state === "hidden" ? "" : <UpdatePlant />}
    </Admin>
  );
};

export default AllPlants;
