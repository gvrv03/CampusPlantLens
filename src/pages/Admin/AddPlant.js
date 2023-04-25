import Admin from "campusplantlens/Layout/Admin";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File
import { Content } from "next/font/google";
import { usePlantContext } from "campusplantlens/Context/PlantContext";
import { useUserAuth } from "campusplantlens/Context/UserAuthContext";

const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});
const AddPlant = () => {
  const [pDetails, setpDetails] = useState({});
  const [longDesc, setlongDesc] = useState();
  const { addPlant } = usePlantContext();
  const { user } = useUserAuth();
  const [requiredState, setRequired] = useState(false);
  const onChange = (e) => {
    setpDetails({
      ...pDetails,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      plantName,
      plantedBy,
      dateOfPlanted,
      maintainedBy,
      plantimage,
      noOfPlants,
      category,
      longitude,
      latitude,
      iframLoc,
      addressLine,
      shortDesc,
      sciName,
    } = pDetails;
    await addPlant(
      user.displayName,
      plantName,
      plantedBy,
      dateOfPlanted,
      maintainedBy,
      plantimage,
      noOfPlants,
      category,
      longitude,
      latitude,
      iframLoc,
      addressLine,
      shortDesc,
      longDesc,
      sciName
    );
  };

  return (
    <Admin>
      <h1 className="font-bold ">Add Plants </h1>

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
            <h5>Planted By</h5>
            <input
              type="text "
              onChange={onChange}
              required={requiredState}
              value={pDetails.plantedBy ? pDetails.plantedBy : ""}
              name="plantedBy"
              className="border w-full outline-none py-1 mt-2 px-5"
            />
          </div>

          <div className="">
            <h5>Date of plant</h5>
            <input
              type="date"
              onChange={onChange}
              required={requiredState}
              value={pDetails.dateOfPlanted ? pDetails.dateOfPlanted : ""}
              name="dateOfPlanted"
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
            <h5>Plant Image</h5>
            <input
              type="text"
              onChange={onChange}
              required={requiredState}
              value={pDetails.plantimage ? pDetails.plantimage : ""}
              name="plantimage"
              className="border w-full outline-none py-1 mt-2 px-5"
            />
          </div>

          <div className="">
            <h5>No. Of Plants</h5>
            <input
              type="number"
              onChange={onChange}
              required={requiredState}
              value={pDetails.noOfPlants ? pDetails.noOfPlants : ""}
              name="noOfPlants"
              className="border w-full outline-none py-1 mt-2 px-5"
            />
          </div>
        </div>

        <h2 className="font-semibold my-5 text-lg">Category</h2>
        <div className="grid  md:grid-cols-2 grid-cols-1   gap-5">
          <div className="">
            <h5>Category</h5>
            <select
              onChange={onChange}
              required={requiredState}
              value={pDetails.category ? pDetails.category : ""}
              name="category"
              className="border w-full outline-none py-1 mt-2 px-5"
            >
              <option value="Ayurvedic">Ayurvedic</option>
              <option value="Fruit">Fruits</option>
              <option value="Flower">Flowers</option>
              <option value="Decorative">Decorative</option>
              <option value="Climbers">Climbers</option>
              <option value="Trees">Trees</option>
            </select>
          </div>
        </div>
        <h2 className="font-semibold my-5 text-lg">Location</h2>
        <div className="grid  md:grid-cols-2 grid-cols-1   gap-5">
          <div className="">
            <h5>Longitude</h5>
            <input
              type="text"
              onChange={onChange}
              required={requiredState}
              value={pDetails.longitude ? pDetails.longitude : ""}
              name="longitude"
              className="border w-full outline-none py-1 mt-2 px-5"
            />
          </div>
          <div className="">
            <h5>latitude</h5>
            <input
              type="text"
              onChange={onChange}
              required={requiredState}
              value={pDetails.latitude ? pDetails.latitude : ""}
              name="latitude"
              className="border w-full outline-none py-1 mt-2 px-5"
            />
          </div>

          <div className="">
            <h5>IFrame Location</h5>
            <input
              type="text"
              onChange={onChange}
              required={requiredState}
              value={pDetails.iframLoc ? pDetails.iframLoc : ""}
              name="iframLoc"
              className="border w-full outline-none py-1 mt-2 px-5"
            />
          </div>

          <div className="">
            <h5>Address Line</h5>
            <input
              type="text"
              onChange={onChange}
              required={requiredState}
              value={pDetails.addressLine ? pDetails.addressLine : ""}
              name="addressLine"
              className="border w-full outline-none py-1 mt-2 px-5"
            />
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
