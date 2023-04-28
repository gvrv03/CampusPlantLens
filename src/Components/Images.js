import React from "react";

const Images = ({ plantImages }) => {
  console.log(plantImages);
  return (
    <div className="flex flex-wrap gap-5 justify-between">
      {!plantImages && <div>Not Found</div>}
      {plantImages &&
        plantImages.map((item, index) => {
          return <img className=" md:w-80 w-28" src={item} alt={item} key={index} />;
        })}
    </div>
  );
};

export default Images;
