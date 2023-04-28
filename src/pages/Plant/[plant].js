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
import PlantLocation from "campusplantlens/Components/PlantLocation";
const PlantDetail = ({ plantDetails, plantSingleDetails }) => {
  const qrCodeRef = useRef(null);
  const router = useRouter();
  let newLink = baseUrl + "Plant/" + router.query.plant;
  const [navigateState, setnavigateState] = useState(1);
  const {
    addedBy,
    plantID,
    plantedBy,
    dateOfPlanted,
    plantimage,
    longitude,
    latitude,
    plantImages,
    iframLoc,
    addressLine,
    updatedAt,
  } = plantDetails;
  const { plantName, maintainedBy, category, shortDesc, longDesc, sciName } =
    plantSingleDetails;
  // const {}
  const date = new Date(updatedAt);

  const Navigator = () => {
    return (
      <div className="flex gap-5 font-semibold p-2 rounded-full border">
        <button
          onClick={() => {
            setnavigateState(1);
          }}
          type="button"
          className={`text-xs sm:text-lg ${
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
          className={`text-xs sm:text-lg ${
            navigateState === 2 && "bg-blue-500 text-white"
          } hover:bg-blue-500 px-5 py-2 hover:text-white rounded-full`}
        >
          Images
        </button>
        <button
          onClick={() => {
            setnavigateState(3);
          }}
          type="button"
          className={`text-xs sm:text-lg ${
            navigateState === 3 && "bg-blue-500 text-white"
          } hover:bg-blue-500 px-5 py-2 hover:text-white rounded-full`}
        >
          Location
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
                <h1 className="text-4xl">
                  {plantName} <span className="text-xs">({plantID})</span>
                </h1>
                <span className="sm:text-lg text-xs font-light ">
                  {" "}
                  <span className="font-semibold ">Category</span> : {category}
                </span>
                <div className="sm:text-lg text-xs font-light">
                  <span className="font-semibold">Maintained By</span> :{" "}
                  {maintainedBy}
                </div>
                <div className="sm:text-lg text-xs font-light">
                  Planted by {plantedBy} on {dateOfPlanted}{" "}
                </div>
                <div className="sm:text-lg text-xs font-light">{shortDesc}</div>
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
                <p className="sm:text-lg text-xs">
                  Last Updated : {addedBy} •{" "}
                  {date.getDate() +
                    "/" +
                    (date.getMonth() + 1) +
                    "/" +
                    date.getFullYear()}
                </p>
              </div>
              <p className="flex-shrink-0 mt-3 text-sm md:mt-0">4 min read</p>
            </div>
          </div>

          <div></div>
          <Navigator />
          <div className="">
            {navigateState === 1 && <SinglePlantDetail longDesc={longDesc} />}
            {navigateState === 2 && <Images plantImages={plantImages} />}
            {navigateState === 3 && (
              <PlantLocation
                longitude={longitude}
                latitude={latitude}
                iframLoc={iframLoc}
                addressLine={addressLine}
              />
            )}
          </div>
        </article>
      </div>
    </PlantsLayout>
  );
};

export async function getServerSideProps(context) {
  const { plant } = context.query;
  const res = await fetch(baseUrl + "/api/getExisPlantByID", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: plant,
    }),
  });
  const data = await res.json();
  const { PlantDetails } = data;
  return {
    props: { plantDetails: data, plantSingleDetails: PlantDetails },
  };
}
export default PlantDetail;
