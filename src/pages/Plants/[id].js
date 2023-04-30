import SingleCard from "campusplantlens/Components/SingleCard";
import SingleCardDetails from "campusplantlens/Components/SingleCardDetails";
import SingleDetailsCard from "campusplantlens/Components/SingleDetailsCard";
import { usePlantContext } from "campusplantlens/Context/PlantContext";
import PlantsLayout from "campusplantlens/Layout/PlantsLayout";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const PlantsAll = () => {
  const router = useRouter();
  const { allExisPlants } = usePlantContext();
  const plantTotal = allExisPlants.filter((plant) => {
    return router.query.id === plant.PlantDetails._id;
  });
  return (
    <PlantsLayout>
      <div className=" ">
        <div className="bg-white p-5">
          <Link href="/" className="cursor-pointer">
            Home
          </Link>{" "}
          /{" "}
          <Link href="/Plantcategory" className="cursor-pointer">
            Plant Category /
          </Link>{" "}
          {router.query.pname}
        </div>

        {plantTotal.length === 0 && (
          <div className="bg-white p-5 mt-5 font-semibold text-center h-screen w-full grid place-items-center">
            {router.query.pname} not Founds
          </div>
        )}
        <div className="grid grid-cols-1 h-full md:grid-cols-3 gap-5 mt-5">
          {plantTotal &&
            plantTotal.map((item, index) => {
              const { PlantDetails, plantimage, _id, plantID } = item;
              const { category, shortDesc, plantName } = PlantDetails;
              return (
                <SingleDetailsCard
                  category={category}
                  key={index}
                  id={_id}
                  pID={plantID}
                  plantName={plantName}
                  info={shortDesc}
                  image={plantimage}
                />
              );
            })}
        </div>
      </div>
    </PlantsLayout>
  );
};

export default PlantsAll;
