import React from "react";

const Images = ({ plantImages }) => {
  console.log(plantImages);
  return (
    <div className="flex flex-wrap justify-between">
      {plantImages.map((item, index) => {
        return <img className="w-96" src={item} alt={item} key={index} />;
      })}
    </div>
  );
};

export default Images;
