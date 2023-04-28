import Image from "next/image";
import Link from "next/link";
import Container from "./container";

const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight ">
              Campus Plant Lens
            </h1>
            <p className="py-5 text-base leading-normal text-gray-500 lg:text-xl xl:text-2xl ">
              Nextly is a free landing page & marketing website template for
              startups and indie projects. Its built with Next.js & TailwindCSS.
              And its completely open-source.
            </p>

            <div className="flex mt-10 flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <Link
                href="/Plantcategory"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md "
              >
                Explore Plants
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <img src="/img/hero.svg" className="" alt="" />
          </div>
        </div>
      </Container>
      <Container>
        <div className="flex flex-col justify-center">
          <div className="text-xl text-center text-gray-700 ">Developed by</div>

          <div className="grid grid-cols-2 md:grid-cols-5   gap-5 mt-10 md:justify-around">
            <div className="pt-2 text-gray-400 border rounded-sm px-2 md:px-5 p-2 flex gap-5">
              <img src="/male.svg" className="w-10" alt="" />
              <div>
                <h4 className="text-black font-semibold text-sm md:text-lg">
                  Vijay Surwase
                </h4>
                <h5>Web Developer</h5>
              </div>
            </div>
            <div className="pt-2 text-gray-400 border rounded-sm px-2 md:px-5 p-2 flex gap-5">
              <img src="/male.svg" className="w-10" alt="" />
              <div>
                <h4 className="text-black font-semibold text-sm md:text-lg">
                  Tanmay Zalke
                </h4>
                <h5>Web Developer</h5>
              </div>
            </div>

            <div className="pt-2 text-gray-400 border rounded-sm px-2 md:px-5 p-2 flex gap-5">
              <img src="/female.svg" className="w-10" alt="" />
              <div>
                <h4 className="text-black font-semibold text-sm md:text-lg">
                  Vaibhavi Nasare
                </h4>
                <h5>System Analyst</h5>
              </div>
            </div>

            <div className="pt-2 text-gray-400 border rounded-sm px-2 md:px-5 p-2 flex gap-5">
              <img src="/female.svg" className="w-10" alt="" />
              <div>
                <h4 className="text-black font-semibold text-sm md:text-lg">
                  Samiksha Charode
                </h4>
                <h5>System Tester</h5>
              </div>
            </div>

            <div className="pt-2 text-gray-400 border rounded-sm px-2 md:px-5 p-2 flex gap-5">
              <img src="/male.svg" className="w-10" alt="" />
              <div>
                <h4 className="text-black font-semibold text-sm md:text-lg">
                  Abdule Mosin
                </h4>
                <h5>Business Analyst</h5>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Hero;
