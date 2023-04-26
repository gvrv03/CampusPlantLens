import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import baseUrl from "../../../baseUrl";
import QRCode from "react-qr-code";
import { useRef } from "react";
import { usePlantContext } from "campusplantlens/Context/PlantContext";
import SinglePlantDetail from "campusplantlens/Components/SinglePlantDetail";
import Images from "campusplantlens/Components/Images";
import PlantsLayout from "campusplantlens/Layout/PlantsLayout";
import Link from "next/link";
const PlantDetail = ({ plantDetails }) => {
  const qrCodeRef = useRef(null);
  const router = useRouter();
  let newLink = baseUrl + "Plant/" + router.query.plant;
  const [navigateState, setnavigateState] = useState(1);
  console.log(plantDetails);
  const {
    writtenBy,
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
    updatedAt,
    longDesc,
    sciName,
    plantImages,
  } = plantDetails;
  const date = new Date(updatedAt);
  const plantedDate = new Date(dateOfPlanted);

  const Navigator = () => {
    return (
      <div className="flex gap-5 font-semibold p-2 rounded-full border">
        <button
          onClick={() => {
            setnavigateState(1);
          }}
          type="button"
          className={`text-xs sm:text-sm ${
            navigateState === 1 && "bg-blue-500 text-white"
          } hover:bg-blue-500 px-5 py-2 hover:text-white rounded-full`}
        >
          Plant Detail
        </button>
        <button
          onClick={() => {
            setnavigateState(2);
          }}
          type="button"
          className={`text-xs sm:text-sm ${
            navigateState === 2 && "bg-blue-500 text-white"
          } hover:bg-blue-500 px-5 py-2 hover:text-white rounded-full`}
        >
          Images
        </button>
      </div>
    );
  };

  return (
    <PlantsLayout>
      <div className="bg-white mb-5 p-5">
        <Link href="/" className="cursor-pointer">
          Home
        </Link>{" "}
        /{" "}
        <Link href="/Plantcategory" className="cursor-pointer">
          Plant Category /
        </Link>
        <Link href="/Plantcategory" className="cursor-pointer">
          {plantName}
        </Link>
      </div>

      <div className="bg-white  p-6 mx-auto container">
        <article className="space-y-8 ">
          <div className="space-y-6 border-b-2 pb-5">
            <div className="flex justify-between items-center">
              <div className=" flex justify-start flex-col gap-2 font-bold md:tracking-tight ">
                <h1 className="text-4xl">{plantName}</h1>
                <span className="sm:text-sm text-xs font-medium ">
                  {" "}
                  Category : {category}
                </span>
                <span className="sm:text-sm text-xs font-medium">
                  No of Plants : {noOfPlants}
                </span>
                <div>
                  <div className="sm:text-sm text-xs font-medium">
                    Planted by : <span className="font-bold">{plantedBy}</span>{" "}
                    on •{" "}
                    {plantedDate.getDate() +
                      "/" +
                      plantedDate.getMonth() +
                      "/" +
                      plantedDate.getFullYear()}
                  </div>
                </div>
              </div>
              {newLink && (
                <QRCode
                  title="Flowers"
                  value={newLink}
                  bgColor="#FFFFFF"
                  fgColor="#000000"
                  size={150}
                  ref={qrCodeRef}
                />
              )}
            </div>
            <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center ">
              <div className="flex items-center md:space-x-2">
                <img
                  src="https://source.unsplash.com/75x75/?portrait"
                  alt=""
                  className="w-4 h-4 border rounded-full "
                />
                <p className="sm:text-sm text-xs">
                  Last Updated :{writtenBy} •{" "}
                  {date.getDate() +
                    "/" +
                    date.getMonth() +
                    "/" +
                    date.getFullYear()}
                </p>
              </div>
              <p className="flex-shrink-0 mt-3 text-sm md:mt-0">
                4 min read 
              </p>
            </div>
          </div>
          <Navigator />
          <div className="">
            {navigateState === 1 ? <SinglePlantDetail /> : <Images plantImages={plantImages}/>}
          </div>
        </article>
      </div>
    </PlantsLayout>
  );
};

export async function getServerSideProps(context) {
  const { plant } = context.query;
  const res = await fetch(baseUrl + "/api/getProductByID", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: plant,
    }),
  });
  const data = await res.json();
  return {
    props: { plantDetails: data }, // will be passed to the page component as props
  };
}
export default PlantDetail;
