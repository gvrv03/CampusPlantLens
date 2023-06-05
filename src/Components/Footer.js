import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow  ">
      <div className="w-full max-w-screen-xl mx-auto border-t-2 p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex items-center mb-4 sm:mb-0">
            <img src="/img/hero.svg" className="h-8 mr-3" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap ">
              Campus Plant Lens
            </span>
          </div>

          <span className="block text-sm text-gray-500 sm:text-center ">
            © 2023 Campus Plant Lens . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
