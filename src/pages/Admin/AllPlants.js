import { usePlantContext } from "campusplantlens/Context/PlantContext";
import Admin from "campusplantlens/Layout/Admin";
import React from "react";

const AllPlants = () => {
  const { allPlants } = usePlantContext();
  console.log(allPlants);
  return (
    <Admin>
      <h5 className="font-semibold text-lg mb-5">All Plants</h5>
      <div class="border relative overflow-x-auto">
        <table class="w-full text-sm text-left text-gray-500 ">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50  ">
            <tr>
              <th scope="col" class="px-6 py-3">
                Plant name
              </th>
              <th scope="col" class="px-6 py-3">
                Plant Category
              </th>
              <th scope="col" class="px-6 py-3">
                Plant Planted By
              </th>
              <th scope="col" class="px-6 py-3">
                Plant Added by
              </th>
              <th scope="col" class="px-6 py-3">
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
                  <tr class="bg-white border-b " key={index}>
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                    >
                      {plantName}
                    </th>
                    <td class="px-6 py-4">{category}</td>
                    <td class="px-6 py-4">{plantedBy}</td>
                    <td class="px-6 py-4">{writtenBy}</td>
                    <td class="px-6 py-4 flex gap-2 items-center">
                      <div className="cursor-pointer border p-1  rounded-md  text-blue-500">
                        <i className="bi bi-pen-fill" />
                      </div>
                      <div className="cursor-pointer bg-white border p-1 rounded-md text-red-700">
                        <i className="bi bi-trash-fill" />
                      </div>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        {allPlants.length === 0 && (
          <div className="grid place-items-center  p-5">Waiting...</div>
        )}{" "}
      </div>
    </Admin>
  );
};

export default AllPlants;
