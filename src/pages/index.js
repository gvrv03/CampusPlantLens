import Hero from "campusplantlens/Components/hero";
import "react-slideshow-image/dist/styles.css";
import SectionTitle from "campusplantlens/Components/sectionTitle";
import { Slide } from "react-slideshow-image";
import { usegalleryContext } from "campusplantlens/Context/GalleryContext";

export default function Home() {
  const { gallery, setupdater } = usegalleryContext();
  return (
    <div className="py-16 bg-white ">
      <Hero />
      {/* <SectionTitle
        pretitle="Glance of Greenery"
        title="Glimpse of Greenery in our Campus"
      >
        This section is to highlight the plantation and the green event
        conducted by 
      </SectionTitle> */}
    </div>
  );
}
