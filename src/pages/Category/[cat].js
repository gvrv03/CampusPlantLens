import SingleCard from "campusplantlens/Components/SingleCard";
import SingleCardDetails from "campusplantlens/Components/SingleCardDetails";
import { usePlantContext } from "campusplantlens/Context/PlantContext";
import PlantsLayout from "campusplantlens/Layout/PlantsLayout";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Category = () => {
  const router = useRouter();
  const { allPlants } = usePlantContext();
  const category = allPlants.filter((plant) => {
    return router.query.cat === plant.category;
  });
  console.log(category);
  return (
    <PlantsLayout>
      <div className="relative h-screen">
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
          <div className="bg-white p-5 mt-5 font-semibold text-center pt-56 w-full h-full">
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
                  id={_id}
                  plantName={plantName}
                  info={shortDesc}
                  image="https://previews.123rf.com/images/leksuperphoto/leksuperphoto1609/leksuperphoto160900034/65114098-wooden-and-climbing-plants-of-wall-contrast-background.jpg"
                />
              );
            })}
        </div>
      </div>
    </PlantsLayout>
  );
};

export default Category;
