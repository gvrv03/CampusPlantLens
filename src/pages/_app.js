import Footer from "campusplantlens/Components/Footer";
import Navbar from "campusplantlens/Components/Navbar";
import { GalleryContextProvider } from "campusplantlens/Context/GalleryContext";
import { PlantContexProvider } from "campusplantlens/Context/PlantContext";
import { UserAuthContexProvider } from "campusplantlens/Context/UserAuthContext";
import "campusplantlens/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <UserAuthContexProvider>
          <GalleryContextProvider>
        <PlantContexProvider>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
        </PlantContexProvider>
          </GalleryContextProvider>
      </UserAuthContexProvider>
    </>
  );
}
