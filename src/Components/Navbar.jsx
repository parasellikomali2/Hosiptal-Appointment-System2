import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaHeartbeat } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar-container ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-logo">
        <FaHeartbeat className="logo-icon" />
        <span>GraceHospital</span>
      </div>

      <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
        <Link to="/">Home</Link>


        <Link to="/AppointmentPage">
          Appointment
        </Link>

        <Link to="/Doctorprofile">
          Doctor-Profile
        </Link>

        <Link to="/InnovationPage">
          Innovation
        </Link>

       
        <Link to="/AIAssistant" className="mobile-btn">
          AIAssistant
        </Link>

        <Link to="/login" className="mobile-btn">
          Login
        </Link>

        <Link to="/About" className="mobile-btn">
          About
        </Link>
      </nav>

      <div className="navbar-buttons">
        <Link to="/login" className="login-btn">
          Login
        </Link>

        <Link to="/register" className="register-btn">
          Register
        </Link>
      </div>

      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </header>
  );
}

export default Navbar;