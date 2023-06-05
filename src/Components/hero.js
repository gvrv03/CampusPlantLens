import Image from "next/image";
import Link from "next/link";
import Container from "./container";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight ">
              Campus Plant Lens
            </h1>
            <p className="py-5 text-base leading-normal text-blue-600 font-semibold lg:text-xl xl:text-2xl ">
              Welcome to the campus of Greenery!
            </p>
            {/* <p className="text-gray-500 py-5 text-base leading-normal lg:text-xl xl:text-2xl">
              Campus Plant Lens is here to serve as a platform for sharing
              valuable information on plants and their properties through QR
              scanning
            </p> */}
            <p className="py-5 text-base leading-normal text-green-600 font-semibold lg:text-xl xl:text-2xl ">
              आपण हिरव्यागार वातावरणात राहू इच्छिता ? <br />
              <span className=""> की रखरखीत वाळवंटात .... !</span>
              <br />
              <br />
              मर्जी आपली ... कारण <br />
              <span className=""> जिवन आहे ... आपले !</span>
            </p>
            <div className="py-5 flex text-left w-full font-semibold text-4xl my-5 sm:text-left  ">
              <span className="pColor ntext-left">
                <Typewriter
                  options={{
                    strings: [" झाडे लावा ... झाडे जगवा !"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </div>
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
   
    </>
  );
};

export default Hero;
