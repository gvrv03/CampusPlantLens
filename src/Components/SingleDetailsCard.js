import Link from "next/link";
import React from "react";

const SingleDetailsCard = (props) => {
  return (
    <div className="bg-white  rounded-lg  max-h-fit ">
      <div className="h-full flex flex-col justify-between border-2 border-gray-200 border-opacity-60  overflow-hidden">
        <img
          className="lg:h-48 md:h-36 h-56 w-full object-cover object-center"
          src={props.image}
          alt="blog"
        />
        <div className="p-6">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 ">
          {props.category}
          </h2>
          <h1 className="title-font text-lg font  font-semibold text-gray-900 mb-3">
          {props.plantName} <span className="text-xs">({props.pID})</span>
          </h1>
          <p className="leading-relaxed mb-3">{props.info}</p>
          <div className="flex items-center flex-wrap ">
            <Link
              href={`/Plant/${props.id}`}
              className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
            >
              View Plants
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleDetailsCard;
