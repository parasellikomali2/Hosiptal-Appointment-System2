import Navbar from "../Components/Navbar";
import HeroVideo from "../Components/HeroVideo";
import HealthScanner from "../Components/HealthScanner";
import HospitalTour3D from "../Components/HospitalTour3D";
import Innovation from "../Components/Innovation";
import Appointment from "../Components/Appointment";
import Footer from "../Components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <HeroVideo />
      <HealthScanner />
    
      <HospitalTour3D />
 
      <Innovation />
      <Appointment />
      <Footer />
    </>
  );
}

export default Home;
