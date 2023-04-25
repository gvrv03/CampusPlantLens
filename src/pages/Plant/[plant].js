import { useRouter } from "next/router";
import React, { useState } from "react";
import baseUrl from "../../../baseUrl";
import QRCode from "react-qr-code";
import { useRef } from "react";
const PlantDetail = () => {
  const qrCodeRef = useRef(null);
  const router = useRouter();
  let newLink = baseUrl + "Plant/" + router.query.plant;

  return (
    <div className=" bg-white container mt-20 p-5 m-auto">
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
  );
};

export default PlantDetail;
