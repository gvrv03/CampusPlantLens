import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Slideshow = () => {
  const images = ["/College/5.jpg", "/College/6.jpg", "/College/7.jpg"];

  return (
    <Slide>
      <div className="each-slide-effect">
        <div
          className=" relative  bg-cover flex items-center"
          style={{ backgroundImage: `url(${images[0]})` }}
        >
          <div className="absolute w-full  bgLight2 h-full" />

          <h1 className="text-green-300 font-extrabold z-50 text-8xl  mt-32 ">
            Campus Plant Lens <br />
            
          </h1>
        </div>
      </div>

      <div className="each-slide-effect">
        <div
          className="relative  bg-cover "
          style={{ backgroundImage: `url(${images[1]})` }}
        >
          <div className="absolute w-full  bgLight2 h-full" />
        </div>
      </div>

      <div className="each-slide-effect">
        <div
          className="relative  bg-cover "
          style={{ backgroundImage: `url(${images[2]})` }}
        >
          <div className="absolute w-full  bgLight2 h-full" />
        </div>
      </div>
    </Slide>
  );
};

export default Slideshow;
