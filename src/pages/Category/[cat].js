import SingleCard from "campusplantlens/Components/SingleCard";
import PlantsLayout from "campusplantlens/Layout/PlantsLayout";
import React from "react";

const Category = () => {
  return (
    <PlantsLayout>
      <div className="relative h-screen">
        <div className="bg-white p-5">Home / plant Category</div>

        <div className="grid grid-cols-3 gap-5 mt-5">
          <SingleCard
            category="Ayurvedic"
            info="Ayurvedic Plants curing most of diseases in this modern era and also healing injuries."
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-O8zvpqr-Cx3T8MkxR7YDvyilQdggwudP6yYrFRdZU3940Ir2wA1sLTIktV2SNiJF__U&usqp=CAU"
          />
          <SingleCard
            category="Fruits"
            info="Healthy fruits beneficial for a healthy and prosperous life."
            image="https://wallpaperaccess.com/full/2446201.jpg"
          />
          <SingleCard
            category="Flowers"
            info="A big variety and collection of flowers in the college campus."
            image="https://w0.peakpx.com/wallpaper/275/227/HD-wallpaper-nature-flowers-macro-plants.jpg"
          />
          <SingleCard
            category="Decorative"
            info="Decorative plants increasing the campus area's beauty. "
            image="https://images.jdmagicbox.com/quickquotes/images_main/artificial-plant-2216557070-zv7iztnz.jpg"
          />
          <SingleCard
            category="Climbers"
            info="Some planted or auto-grown climbers in the campus."
            image="https://previews.123rf.com/images/leksuperphoto/leksuperphoto1609/leksuperphoto160900034/65114098-wooden-and-climbing-plants-of-wall-contrast-background.jpg"
          />
        </div>
      </div>
    </PlantsLayout>
  );
};

export default Category;
