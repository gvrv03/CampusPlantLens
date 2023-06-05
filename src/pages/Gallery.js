import { AllCampsPlant } from "campusplantlens/Components/data";
import { useGalleryContext } from "campusplantlens/Context/GalleryContext";
import Link from "next/link";
import React from "react";

const Gallery = () => {
  const { gallery, setupdater } = useGalleryContext();

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

      {gallery.isLoading && (
        <div className="mt-5 w-full grid place-items-center p-5">
          <img src="/loadingSpinner.gif" alt="" className="w-10" />
        </div>
      )}
      {!gallery.isLoading && gallery.images.length === 0 && (
        <div className="mt-5 text-center text-sm p-5 border">
          Images Not Found
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
        {gallery.images &&
          gallery.images.map((item, index) => {
            return (
              <div key={index}>
                <img
                  style={{ height: "300px" }}
                  className="h-auto border w-full rounded-lg"
                  src={item.image}
                  alt=""
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Gallery;
