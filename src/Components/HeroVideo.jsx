import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./HeroVideo.css";

function HeroVideo() {
    const navigate = useNavigate();
  const videos = [
    "/Videos/Hospital.mp4",
    "/Videos/Doctors.mp4",
    "/Videos/ai-healthcare.mp4",
    "/Videos/patient-story.mp4",
    "/Videos/emergency.mp4",
  ];

  const [currentVideo, setCurrentVideo] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo(
        (prev) => (prev + 1) % videos.length
      );
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">

      <video
        key={currentVideo}
        autoPlay
        muted
        loop
        playsInline
        className="hero-video"
      >
        <source
          src={videos[currentVideo]}
          type="video/mp4"
        />
      </video>

      <div className="hero-overlay"></div>

      <div className="hero-content">

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
         Welcome to Grace Hospital
    
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Book Appointments • Meet Specialists • AI Health Analysis • Virtual Hospital Tours
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <button className="primary-btn"
              onClick={() => navigate("/AppointmentPage")}>
            Book Appointment
          </button>

          
        <button
    className="secondary-btn"
    onClick={() => navigate("/About")}>
           About us
           

  </button>
        </motion.div>

      </div>

    </section>
  );
}

export default HeroVideo;