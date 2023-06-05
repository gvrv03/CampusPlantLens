import Admin from "campusplantlens/Layout/Admin";
import React, { useState } from "react";

import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../../firebase";
import { v4 } from "uuid";

import dynamic from "next/dynamic";
import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File
import { usePlantContext } from "campusplantlens/Context/PlantContext";
import { useUserAuth } from "campusplantlens/Context/UserAuthContext";
import Link from "next/link";

const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});
const AddPlant = () => {
 
  const [uploadLoad, setuploadLoad] = useState(false);
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState("");
  const [imgErr, setimgErr] = useState();
  const [upload, setupload] = useState(false);

  if (imgErr) {
    setTimeout(() => {
      setimgErr("");
    }, 3000);
  }


  const [pDetails, setpDetails] = useState({});
  const [longDesc, setlongDesc] = useState();
  const { addPlant, seteffect } = usePlantContext();
  const { user } = useUserAuth();
  const [requiredState, setRequired] = useState(false);
  const onChange = (e) => {
    setpDetails({
      ...pDetails,
      [e.target.name]: e.target.value,
    });
  };

  const uploadFile = async () => {
    setuploadLoad(true);
    if (imageUpload == null) {
      setuploadLoad(false);
      return setimgErr("Please Select Image");
    }

    const imageRef = ref(
      storage,
      `Plant/${pDetails.plantName}/${imageUpload.name + v4()}`
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { plantName, maintainedBy, category, shortDesc, sciName } = pDetails;
    const res = await addPlant(
      user.displayName,
      plantName,
      maintainedBy,
      imageUrls,
      category,
      shortDesc,
      longDesc,
      sciName
    );

    if (res.msg) {
      setpDetails({});
      setlongDesc("");
    }
    seteffect(Math.random());
  };

  return (
    <Admin>
      <div className="p-2 justify-between md:justify-start  flex gap-5 rounded-full border font-semibold ">
        <Link
          href="/Admin/AddPlant"
          className="bg-blue-500 text-white px-5 py-2 rounded-full"
        >
          Add New Plant
        </Link>
        <Link href="/Admin/AddPlantAll" className=" px-5 py-2 rounded-full">
          Add Existing Plant
        </Link>
      </div>

      <form onSubmit={handleSubmit} className="mt-10">
        <h2 className="font-semibold my-5 text-lg">Plant Details</h2>
        <div className="grid  md:grid-cols-2 grid-cols-1   gap-5">
          <div className="">
            <h5>Plant Name</h5>
            <input
              onChange={onChange}
              required={requiredState}
              value={pDetails.plantName ? pDetails.plantName : ""}
              name="plantName"
              type="text "
              className="border w-full outline-none py-1 mt-2 px-5"
            />
          </div>
          <div className="">
            <h5>Scientific Name</h5>
            <input
              onChange={onChange}
              required={requiredState}
              value={pDetails.sciName ? pDetails.sciName : ""}
              name="sciName"
              type="text "
              className="border w-full outline-none py-1 mt-2 px-5"
            />
          </div>
          <div className="">
            <h5>Maintained By</h5>
            <input
              type="text"
              onChange={onChange}
              required={requiredState}
              value={pDetails.maintainedBy ? pDetails.maintainedBy : ""}
              name="maintainedBy"
              className="border w-full outline-none py-1 mt-2 px-5"
            />
          </div>
          <div className="">
            <h5>Plant Cover Image</h5>

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
              <div className="text-red-700 font-bold border bg-red-100 p-2 mt-5 border-red-300 text-center">
                {imgErr}
              </div>
            )}
          </div>
        </div>

        <h2 className="font-semibold my-5 text-lg">Category</h2>
        <div className="grid  md:grid-cols-2 grid-cols-1   gap-5">
          <div className="">
            <h5>Category</h5>
            <select
              onChange={onChange}
              required={requiredState}
              value={pDetails.category ? pDetails.category : "Ayurvedic"}
              name="category"
              className="border w-full outline-none py-1 mt-2 px-5"
            >
              <option value="Ayurvedic">Ayurvedic</option>
              <option value="Fruits">Fruits</option>
              <option value="Flowers">Flowers</option>
              <option value="Decorative">Decorative</option>
              <option value="Shrub">Shrub</option>
              <option value="Trees">Trees</option>
            </select>
          </div>
        </div>

        <h2 className="font-semibold my-5 text-lg">Description</h2>
        <div className="grid   grid-cols-1   gap-5">
          <div className="">
            <h5>Short Desc</h5>

            <textarea
              cols="30"
              rows="5"
              onChange={onChange}
              required={requiredState}
              value={pDetails.shortDesc ? pDetails.shortDesc : ""}
              name="shortDesc"
              className="border w-full outline-none py-1 mt-2 px-5"
            ></textarea>
          </div>

          <div className="">
            <h5>Long Desc</h5>
            <SunEditor
              // value={valueText}
              onChange={(content) => {
                setlongDesc(content);
              }}
              placeholder="Write brief information"
              height="100%"
              setOptions={{
                mode: "Classic",

                rtl: false,

                katex: "window.katex",

                imageGalleryUrl:
                  "https://etyswjpn79.execute-api.ap-northeast-1.amazonaws.com/suneditor-demo",

                videoFileInput: false,

                tabDisable: false,
                buttonList: [
                  [
                    "undo",

                    "redo",

                    "font",

                    "fontSize",

                    "formatBlock",

                    "paragraphStyle",

                    "blockquote",

                    "bold",

                    "underline",

                    "italic",

                    "strike",

                    "subscript",

                    "superscript",

                    "fontColor",

                    "hiliteColor",

                    "textStyle",

                    "removeFormat",

                    "outdent",

                    "indent",

                    "align",

                    "horizontalRule",

                    "list",

                    "lineHeight",

                    "table",

                    "link",

                    "image",

                    "video",

                    "audio",

                    "math",

                    "imageGallery",

                    "fullScreen",

                    "showBlocks",

                    "codeView",

                    "preview",

                    "print",

                    "save",

                    "template",
                  ],
                ],

                "lang(In nodejs)": "en",
              }}
            />
          </div>
        </div>

        <button
          type="submit"
          className="py-2 px-10 bg-red-700 font-semibold text-lg text-white mt-10 float-right"
        >
          Add Plant
        </button>
      </form>
    </Admin>
  );
};

export default AddPlant;
