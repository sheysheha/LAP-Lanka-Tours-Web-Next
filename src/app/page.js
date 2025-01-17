import Image from "next/image";
import NavBar from "./components/NavBar";
import Carousel from "./components/Carousel";
// import logo2 from "../app/assets/LAP.png";

export default function Home() {
  return (
    <div>
      <NavBar/>
      <Carousel/>
    </div>
  );
}
