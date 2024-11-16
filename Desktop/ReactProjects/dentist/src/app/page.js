import Image from "next/image";
import Header from "./components/Header"
import Banner from "./components/Banner";
import Treatments from "./components/Treatments";
import TopTreatments from "./components/TopTreatments";
import AboutUs from "./components/AboutUs";
import OurTeam from "./components/OurTeam";

export default function Home() {
  return (
    <>
     <Header></Header>
     <Banner></Banner>
     <Treatments></Treatments>
     <TopTreatments></TopTreatments>
     <AboutUs></AboutUs>
     <OurTeam></OurTeam>


    </>
  );
}
