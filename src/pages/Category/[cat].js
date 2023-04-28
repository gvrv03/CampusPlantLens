import SingleCard from "campusplantlens/Components/SingleCard";
import SingleCardDetails from "campusplantlens/Components/SingleCardDetails";
import { usePlantContext } from "campusplantlens/Context/PlantContext";
import PlantsLayout from "campusplantlens/Layout/PlantsLayout";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Category = () => {
  const router = useRouter();
  const { allPlants, getAllExisPlantById } = usePlantContext();
  const category = allPlants.filter((plant) => {
    return router.query.cat === plant.category;
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
            plant Category /
          </Link>{" "}
          {router.query.cat}
        </div>

        {category.length === 0 && (
          <div className="bg-white p-5 mt-5 font-semibold text-center h-screen w-full grid place-items-center">
            {router.query.cat} not Founds
          </div>
        )}
        <div className="grid grid-cols-1 h-full md:grid-cols-3 gap-5 mt-5">
          {category &&
            category.map((item, index) => {
              const { category, shortDesc, plantimage, plantName, _id } = item;
              
              return (
                <SingleCardDetails
                  category={category}
                  key={index}
                  count="878"
                  id={_id}
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

export default Category;
