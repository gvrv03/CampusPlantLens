import React from "react";

const Images = ({ plantImages }) => {
  console.log(plantImages);
  return (
    <div className="flex flex-wrap gap-5 justify-between">
      {plantImages.length === 0 && <div className="border w-full p-5 text-center font-semibold">Not Found</div>}
      {plantImages &&
        plantImages.map((item, index) => {
          return <img className=" md:w-80 w-28" src={item} alt={item} key={index} />;
        })}
    </div>
  );
};

export default Images;
