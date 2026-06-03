import Navbar from "../components/Navbar";
import HeroVideo from "../Components/HeroVideo";
import HealthScanner from "../components/HealthScanner";
import HospitalTour3D from "../Components/HospitalTour3D";
import Innovation from "../components/Innovation";
import Appointment from "../components/Appointment";
import Footer from "../components/Footer";

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
