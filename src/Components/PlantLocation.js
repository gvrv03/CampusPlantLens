import React from "react";

const PlantLocation = ({ longitude, latitude, iframLoc, addressLine }) => {
  return (
    <div className="flex justify-start md:flex-row flex-col gap-10">
      <div className="" dangerouslySetInnerHTML={{ __html: iframLoc }} />
      <div className="flex flex-col">
        <span>Address : {addressLine}</span>{" "}
        <span>
          Co-ordinates : {longitude}, {latitude}
        </span>
      </div>
    </div>
  );
};

export default PlantLocation;
