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
  const { allPlants, allExisPlants, addImagesByPlantName } = usePlantContext();
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
    if (imageUpload == null) return setimgErr("Please Select Image");

    const imageRef = ref(storage, `${plantName}/${imageUpload.name + v4()}`);
    await uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls(url);
      });
    });
    setimgErr("Image Uploaded");
    setuploadLoad(false);
    setupload(true);
  };

  // useEffect(() => {
  //   listAll(imagesListRef).then((response) => {
  //     response.items.forEach((item) => {
  //       getDownloadURL(item).then((url) => {
  //         setImageUrls((prev) => [...prev, url]);
  //       });
  //     });
  //   });
  // }, []);

  const onChange = (e) => {
    setpDetails({
      ...pDetails,
      [e.target.name]: e.target.value,
    });
  };
  const handleAddImages = async (e) => {
    e.preventDefault();
    setloading(true);
    await addImagesByPlantName(plantName, imageUrls);
    setloading(false);
    setupload(false);
  };
  return (
    <Admin>
      <h1 className="font-bold ">Add Plant Images </h1>

      <form onSubmit={handleAddImages} className="mt-5 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <h4 className="text-xs font-semibold">Select Plant</h4>
            <select
              onChange={onChange}
              value={pDetails.plantName ? pDetails.plantName : ""}
              name="plantName"
              className="border w-full outline-none py-1 mt-2 px-5"
            >
              <option required={true} value="---Select Plant---">
                ---Select Plant---
              </option>
              ;
              {allExisPlants.map((item, index) => {
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
                {upload && <i class="bi bi-arrow-up-right-circle-fill"></i>}
                <span>Upload Image</span>{" "}
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
    </Admin>
  );
};

export default AddImages;
