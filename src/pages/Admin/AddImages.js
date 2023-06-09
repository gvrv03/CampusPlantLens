import { usePlantContext } from "campusplantlens/Context/PlantContext";
import Admin from "campusplantlens/Layout/Admin";
import React, { useEffect, useState } from "react";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { storage } from "../../../firebase";
import { v4 } from "uuid";
const AddImages = () => {
  const {
    allExisPlants,
    addImagesByPlantName,
    removeExisPlantImage,
    seteffect,
    allExisImages,
  } = usePlantContext();
  const [pDetails, setpDetails] = useState({});
  const [loading, setloading] = useState(false);
  const [uploadLoad, setuploadLoad] = useState(false);
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState("");
  const [imgErr, setimgErr] = useState();
  const [upload, setupload] = useState(false);
  const { plantName } = pDetails;
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

    const imageRef = ref(
      storage,
      `Plant/${plantName}/${imageUpload.name + v4()}`
    );
    await uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls(url);
      });
    });
    setimgErr("Image Uploaded");
    setuploadLoad(false);
    setupload(true);
  };

  const onChange = (e) => {
    setpDetails({
      ...pDetails,
      [e.target.name]: e.target.value,
    });
  };
  const handleAddImages = async (e) => {
    e.preventDefault();
    setloading(true);
    if (!upload) {
      setloading(false);
      return setimgErr("Upload Image First");
    }

    await addImagesByPlantName(plantName, imageUrls);
    setupload(false);
    setloading(false);
  };
  return (
    <Admin>
      <h1 className="font-bold ">Add Plant Images </h1>
      <form onSubmit={handleAddImages} className="mt-5 border-b pb-5 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <h4 className="text-xs font-semibold">Select Plant</h4>
            <select
              onChange={onChange}
              required={true}
              value={pDetails.plantName ? pDetails.plantName : ""}
              name="plantName"
              className="border w-full outline-none py-1 mt-2 px-5"
            >
              <option required={true} value="---Select Plant---">
                ---Select Plant---
              </option>
              ;
              {allExisPlants.data.map((item, index) => {
                return (
                  <option value={item.plantID} key={index}>
                    {item.plantID}
                  </option>
                );
              })}
            </select>
          </div>

          <div>
            <h4 className="text-xs font-semibold">Image Link</h4>
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
        <h3 className="font-semibold ">Plants Images</h3>
        <button
          onClick={() => {
            seteffect(Math.random());
          }}
        >
          <i className="bi bi-arrow-clockwise" />
        </button>{" "}
      </div>{" "}
      {allExisImages.isLoading && (
        <div className="mt-5 w-full grid place-items-center p-5">
          <img src="/loadingSpinner.gif" alt="" className="w-10" />
        </div>
      )}
      {!allExisImages.isLoading && allExisImages.data.length === 0 && (
        <div className="mt-5 text-center text-sm p-5 border">
          Images Not Found
        </div>
      )}
      <div className="grid  gap-5 grid-cols-">
        {allExisImages.data &&
          allExisImages.data.map((item, index) => {
            return (
              <div className="bg-gray-50 p-5 rounded-sm " key={index}>
                <h1 className="font-semibold ">{item.name} </h1>
                <div className="border p-2 mt-5 flex gap-2">
                  {item.images.length === 0 && (
                    <div className="text-sm font-semibold">Not Found</div>
                  )}
                  {item.images.map((item2, index2) => {
                    return (
                      <div key={index} className="relative">
                        <img
                          src={item2}
                          alt=""
                          className="h-10 w-10"
                          srcSet=""
                        />
                        <button
                          onClick={async () => {
                            await removeExisPlantImage(item.id, index2);
                            seteffect(Math.random());
                          }}
                          className=" grid place-items-center  mt-2 bg-red-600  p-2 rounded-full "
                        >
                          <i className="bi bi-trash font-semibold   text-xs  text-white" />
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
      </div>{" "}
    </Admin>
  );
};

export default AddImages;
