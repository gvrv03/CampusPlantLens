import Hero from "campusplantlens/Components/hero";
import "react-slideshow-image/dist/styles.css";
import SectionTitle from "campusplantlens/Components/sectionTitle";
import Video from "campusplantlens/Components/video";
import { Slide } from "react-slideshow-image";
import { campsPlant } from "campusplantlens/Components/data";
export default function Home() {
  const spanStyle = {
    padding: "20px",
    background: "#efefef",
    color: "#000000",
  };

  const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    height: "400px",
  };

  const responsiveSettings = [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ];

  return (
    <div className="py-16 bg-white ">
      <Hero />
      <SectionTitle
        pretitle="Glance of Greenery"
        title="Glimpse of Greenery in our Campus"
      >
        This section is to highlight the plantation and the green event
        conducted by Mr. M.K. Tatte, Government Polytechnic, Arvi
      </SectionTitle>
      <div className="container flex justify-center px-5 m-auto">
        <div className=" w-full">
          {/* <img className="w-full" src={slideImage.url} alt="" /> */}
          <Slide
            slidesToScroll={1}
            slidesToShow={1}
            indicators={true}
            autoplay={false}
            responsive={[
              {
                breakpoint: 800,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                },
              },
              {
                breakpoint: 500,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                },
              },
            ]}
          >
            {campsPlant.map((url, index) => {
              console.log(url);
              return (
                <div
                  className="flex "
                  key={index}
                  style={{
                    textAlign: "center",
                    padding: "50px 0",
                    fontSize: "30px",
                  }}
                >
                  <img
                    className=" p-5"
                    style={{ height: "400px" }}
                    src={url.URl}
                    alt=""
                    srcset=""
                  />
                </div>
              );
            })}
          </Slide>
        </div>
      </div>
    </div>
  );
}
