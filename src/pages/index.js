import Hero from "campusplantlens/Components/hero";
import "react-slideshow-image/dist/styles.css";
import SectionTitle from "campusplantlens/Components/sectionTitle";
import Video from "campusplantlens/Components/video";
import { Slide } from "react-slideshow-image";

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
  const slideImages = [
    {
      url: "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      caption: "Slide 1",
    },
    {
      url: "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
      caption: "Slide 2",
    },
    {
      url: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      caption: "Slide 3",
    },
  ];
  return (
    <div className="py-16 bg-white ">
      <Hero />
      <SectionTitle
        pretitle="Glance of Greenery"
        title="Learn how to fullfil your needs"
      >
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
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
            <div
              style={{
                textAlign: "center",
                background: "red",
                padding: "200px 0",
                fontSize: "30px",
              }}
            >
              First Slide
            </div>
            <div
              style={{
                textAlign: "center",
                background: "orange",
                padding: "200px 0",
                fontSize: "30px",
              }}
            >
              Second Slide
            </div>
            <div
              style={{
                textAlign: "center",
                background: "yellow",
                padding: "200px 0",
                fontSize: "30px",
              }}
            >
              Third Slide
            </div>
            <div
              style={{
                textAlign: "center",
                background: "green",
                padding: "200px 0",
                fontSize: "30px",
              }}
            >
              Fourth Slide
            </div>
            <div
              style={{
                textAlign: "center",
                background: "blue",
                padding: "200px 0",
                fontSize: "30px",
              }}
            >
              Sixth Slide
            </div>
            <div
              style={{
                textAlign: "center",
                background: "indigo",
                padding: "200px 0",
                fontSize: "30px",
              }}
            >
              Seventh Slide
            </div>
            <div
              style={{
                textAlign: "center",
                background: "violet",
                padding: "200px 0",
                fontSize: "30px",
              }}
            >
              Eight Slide
            </div>
          </Slide>
        </div>
      </div>
    </div>
  );
}
