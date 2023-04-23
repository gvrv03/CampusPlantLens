import Navbar from "campusplantlens/Components/Navbar";
import { PlantContexProvider } from "campusplantlens/Context/PlantContext";
import { UserAuthContexProvider } from "campusplantlens/Context/UserAuthContext";
import "campusplantlens/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <UserAuthContexProvider>
        <PlantContexProvider>
          <Navbar />
          <Component {...pageProps} />
        </PlantContexProvider>
      </UserAuthContexProvider>
    </>
  );
}
