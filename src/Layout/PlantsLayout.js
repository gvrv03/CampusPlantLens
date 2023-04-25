import React from "react";

const PlantsLayout = ({ children }) => {
  return (
    <section className="h-screen mt-20   ">
      <div className=" container gap-5 flex-col sm:flex-row flex h-full   m-auto">
        <div className="w-full  overflow-y-scroll  sm:w-9/12">
          {children}
        </div>
        <div className="w-full md:w-3/12 bg-white "></div>
      </div>
    </section>
  );
};

export default PlantsLayout;
