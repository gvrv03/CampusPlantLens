import Admin from "campusplantlens/Layout/Admin";
import React, { useEffect, useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../../firebase";
import { v4 } from "uuid";
import { usegalleryContext } from "campusplantlens/Context/GalleryContext";
const AddImages = () => {
  const { addImagesInGallery, gallery, setupdater, deleteImageInGallery } =
    usegalleryContext();
    
  const [loading, setloading] = useState(false);
  const [uploadLoad, setuploadLoad] = useState(false);
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState("");
  const [imgErr, setimgErr] = useState();
  const [upload, setupload] = useState(false);

  setTimeout(() => {
    if (imgErr) {
      setimgErr("");
    }
  }, 2000);
  const uploadFile = async () => {
    setuploadLoad(true);
    if (imageUpload == null) {
      setuploadLoad(false);
      return setimgErr("Please Select Image");
    }

    const imageRef = ref(storage, `Gallary//${imageUpload.name + v4()}`);
    await uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls(url);
      });
    });
    setimgErr("Image Uploaded");
    setuploadLoad(false);
    setupload(true);
  };

  const handleAddImages = async (e) => {
    e.preventDefault();
    setloading(true);
    if (!upload) {
      setloading(false);
      return setimgErr("Upload Image First");
    }

    const res = await addImagesInGallery(imageUrls);
    setimgErr(res);
    setupload(false);
    setloading(false);
  };
  return (
    <Admin>
      <h1 className="font-bold ">Add Image on Gallery </h1>
      <form onSubmit={handleAddImages} className="mt-5 border-b-2 pb-5 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <h4 className="text-xs font-semibold">Select Image</h4>
            <div className="flex mt-2 items-center">
              <input
                type="file"
                required={true}
                onChange={(event) => {
                  setImageUpload(event.target.files[0]);
                }}
              />

              <button
                onClick={!upload && uploadFile}
                className="flex font-semibold justify-center items-center gap-2 bg-blue-500 text-white rounded-full p-2"
                type="button"
              >
                {" "}
                {uploadLoad && (
                  <img
                    src="/loadingSpinner.gif"
                    className="w-5"
                    alt="spinner"
                  />
                )}
                {upload && <i className="bi bi-arrow-up-right-circle-fill"></i>}
                <span className="px-5 text-sm ">
                  {upload ? "Uploaded" : "Upload"}
                </span>{" "}
              </button>
            </div>
            {imgErr && (
              <div className="p-2 px-5  mt-2 bg-red-100 text-center border-red-200 border text-red-400 font-bold">
                {imgErr}
              </div>
            )}
          </div>
        </div>
        <button
          type="submit"
          disabled={loading ? true : false}
          className="bg-blue-600 flex justify-center gap-5 w-full py-2 mt-5 text-white font-semibold"
        >
          {loading && (
            <img src="/loadingSpinner.gif" className="w-5" alt="spinner" />
          )}
          Add Image
        </button>
      </form>
      <div className="bg-gray-50 p-5 my-5 flex justify-between items-center">
        <h3 className="font-semibold ">College Gallery</h3>
        <button
          onClick={() => {
            setupdater(Math.random());
          }}
        >
          <i className="bi bi-arrow-clockwise" />
        </button>{" "}
      </div>{" "}
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
      <div className="grid  gap-5 grid-cols-3 md:grid-cols-5">
        {gallery.images &&
          gallery.images.map((item, index) => {
            return (
              <div className="bg-gray-100 p-5 rounded-sm relative" key={index}>
                <img src={item.image} alt="" className="h-52 w-full" />
                <button
                  onClick={async () => {
                    await deleteImageInGallery(item._id);
                  }}
                  className="absolute bottom-5 bg-red-600 p-2 rounded-full w-10 h-10"
                >
                  <i className="bi bi-trash font-semibold text-lg text-white" />
                </button>
              </div>
            );
          })}
      </div>
    </Admin>
  );
};

export default AddImages;
