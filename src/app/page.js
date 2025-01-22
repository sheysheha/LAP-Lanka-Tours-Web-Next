import Image from "next/image";
import NavBar from "./components/NavBar";
import Carousel from "./components/Carousel";
// import logo2 from "../app/assets/LAP.png";

export default function Home() {
  return (
    <div className="relative">
      <NavBar/>
      <Carousel/>
      <Carousel/>
    </div>
  );
}
