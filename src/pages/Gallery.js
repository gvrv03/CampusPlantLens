import { AllCampsPlant } from "campusplantlens/Components/data";
import Link from "next/link";
import React from "react";

const Gallery = () => {
  return (
    <div className="mt-16 p-5 container m-auto">
      <div className="bg-white mb-5 p-5">
        <Link href="/" className="cursor-pointer">
          Home
        </Link>{" "}
        /{" "}
        <Link href="/Gallery" className="cursor-pointer">
          Gallery
        </Link>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        {!AllCampsPlant && "Loading..."}
        {AllCampsPlant.map((item, index) => {
          return (
            <div key={index}>
              <img style={{height:"300px"}}  class="h-auto w-full rounded-lg" src={item.URl} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
