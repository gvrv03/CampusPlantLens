import { usePlantContext } from "campusplantlens/Context/PlantContext";
import React from "react";

const AdminStat = () => {
  const { allPlants, allExisPlants } = usePlantContext();
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-5 mx-auto">
        <div className="grid md:grid-cols-4 grid-cols-2 gap-5 -m-4 text-center">
          <div className="p-2 w-full bg-gray-100">
            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
              6
            </h2>
            <p className="leading-relaxed">Category</p>
          </div>
          <div className="p-2 w-full bg-gray-100">
            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
              {allPlants.length}
            </h2>
            <p className="leading-relaxed">Plants Type</p>
          </div>
          <div className="p-2 w-full bg-gray-100">
            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
              {allExisPlants.length}
            </h2>
            <p className="leading-relaxed">Plants</p>
          </div>
          <div className="p-2 w-full bg-gray-100">
            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
              4
            </h2>
            <p className="leading-relaxed">Products</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminStat;
