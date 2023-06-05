import React from "react";

const SinglePlantDetail = ({ longDesc }) => {
  return (
    <div className="">
      <div dangerouslySetInnerHTML={{ __html: longDesc }} />
    </div>
  );
};

export default SinglePlantDetail;
