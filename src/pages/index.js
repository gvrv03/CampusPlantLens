import Hero from "campusplantlens/Components/hero";
import { benefitOne, benefitTwo } from "campusplantlens/Components/data";
import Benefits from "campusplantlens/Components/benefits";
import SectionTitle from "campusplantlens/Components/sectionTitle";
import Video from "campusplantlens/Components/video";
import Testimonials from "campusplantlens/Components/testimonials";

export default function Home() {
  var sectionStyle = {
    backgroundImage: "url('/gparvi.jpg')",
  };
  return (
    <div className="mt-16 bg-white">
      <Hero />
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        pretitle="Glance of Greenery"
        title="Learn how to fullfil your needs"
      >
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle>
      <Video />

      <SectionTitle
        pretitle="Testimonials"
        title="Here's what our visitor said"
      >
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>
      <Testimonials />
    </div>
  );
}
