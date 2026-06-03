import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaHeartbeat,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Logo Section */}
        <div className="footer-section">
          <div className="footer-logo">
            <FaHeartbeat />
            <span>Grace Hospital AI</span>
          </div>

          <p>
            Delivering world-class healthcare through innovation,
            AI-powered diagnostics, expert doctors, and compassionate care.
          </p>

          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>

          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/doctors">Doctors</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/appointment">Appointments</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h3>Our Services</h3>

          <ul>
            <li>Cardiology</li>
            <li>Neurology</li>
            <li>Orthopedics</li>
            <li>Emergency Care</li>
            <li>AI Health Scanner</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Contact Us</h3>

          <div className="contact-item">
            <FaPhoneAlt />
            <span>+91 98765 43210</span>
          </div>

          <div className="contact-item">
            <FaEnvelope />
            <span>info@gracehospital.com</span>
          </div>

          <div className="contact-item">
            <FaMapMarkerAlt />
            <span>Hyderabad, Telangana, India</span>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="newsletter">
        <h3>Subscribe For Health Updates</h3>

        <div className="newsletter-box">
          <input
            type="email"
            placeholder="Enter your email"
          />
          <button>Subscribe</button>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Grace Hospital AI. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;