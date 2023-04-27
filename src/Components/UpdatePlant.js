import Admin from "campusplantlens/Layout/Admin";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File
import { Content } from "next/font/google";
import { usePlantContext } from "campusplantlens/Context/PlantContext";
import { useUserAuth } from "campusplantlens/Context/UserAuthContext";
import { useRouter } from "next/router";

const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

const UpdatePlant = () => {
  const { getPlantById, updateState, setupdateState, updatePlant } =
    usePlantContext();
  const [pDetails, setpDetails] = useState({});
  const [longDesc, setlongDesc] = useState("");
  const { user } = useUserAuth();
  const router = useRouter();
  const [requiredState, setRequired] = useState(true);
  useEffect(() => {
    const getPlant = async () => {
      const res = await getPlantById(updateState.id);
      setpDetails(res);

      setlongDesc(res.longDesc);
    };
    getPlant();
  }, []);

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
      maintainedBy,
      plantimage,
      category,
      shortDesc,
      sciName,
    } = pDetails;
    const res = await updatePlant(
      user.displayName,
      plantName,
      maintainedBy,
      plantimage,
      category,
      shortDesc,
      longDesc,
      sciName,
      updateState.id
    );

 
  };

  return (
    <div
      className={`h-screen ${updateState.state} place-items-center fixed top-0 right-0 left-0`}
    >
      <div
        className="h-full w-full bgLight"
        onClick={() => {
          setupdateState({ state: "hidden", id: "" });
        }}
      />
      <div className="w-full h-full md:w-3/4 md:mt-0 mt-28  p-5 md:h-4/5  absolute  bg-white">
        <h1 className="  bg-white flex justify-between  p-2 border mb-5 font-semibold   text-lg text-center">
          <div className="flex gap-5 justify-center items-center">
            <i className="bi bi-pen-fill " />
            <div>Update Plant</div>
          </div>
          <i
            onClick={() => {
              setupdateState({ state: "hidden", id: "" });
            }}
            className="bi cursor-pointer bi-x-lg"
          />
        </h1>
        <form
          onSubmit={handleSubmit}
          className=" h-90 w-full flex flex-col  border p-5 overflow-y-scroll"
        >
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
                <option value="Fruits">Fruits</option>
                <option value="Flowers">Flowers</option>
                <option value="Decorative">Decorative</option>
                <option value="Climbers">Climbers</option>
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

            {longDesc && (
              <div className="">
                <h5>Long Desc</h5>
                <SunEditor
                  defaultValue={longDesc}
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
            )}
          </div>

          <button
            type="submit"
            className="py-2 px-10 bg-red-700 font-semibold text-lg text-white mt-10 float-right"
          >
            Update Plant
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdatePlant;
