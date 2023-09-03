import Facilities from "../components/landing/Facilities";
import Hero from "../components/landing/Hero";
import Rooms from "../components/landing/Rooms";
import Navbar from "../components/Navbar";

const Landing = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Facilities />
      <Rooms />
    </>
  );
};

export default Landing;
