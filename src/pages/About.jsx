import "./About.css";

const stats = [
  { number: "15+", label: "Years Experience" },
  { number: "100+", label: "Expert Doctors" },
  { number: "50K+", label: "Happy Patients" },
  { number: "24/7", label: "Emergency Care" },
];

function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-overlay">
          <h1>About Grace Hospital</h1>
          <p>
            Delivering world-class healthcare with compassion, innovation,
            and advanced medical technology.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="about-story container">
        <div className="about-content">
          <h2>Transforming Healthcare Through Innovation</h2>
          <p>
            Grace Hospital is committed to providing exceptional healthcare
            services through cutting-edge technology, experienced specialists,
            and patient-centered care.
          </p>

          <p>
            Our mission is to ensure every patient receives personalized,
            affordable, and quality treatment in a comfortable environment.
          </p>

          <button className="about-btn">
            Learn More
          </button>
        </div>

        <div className="about-image">
          <img
            src="https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg"
            alt="Hospital"
          />
        </div>
      </section>

      {/* Statistics */}
      <section className="stats-section">
        <div className="container stats-grid">
          {stats.map((item, index) => (
            <div className="stat-card" key={index}>
              <h2>{item.number}</h2>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="features-section container">
        <h2>Why Choose Us?</h2>

        <div className="feature-grid">
          <div className="feature-card">
            <img
              src="https://images.pexels.com/photos/1170979/pexels-photo-1170979.jpeg"
              alt="Technology"
            />
            <h3>Advanced Technology</h3>
            <p>
              AI-powered diagnostics and modern healthcare infrastructure.
            </p>
          </div>

          <div className="feature-card">
            <img
              src="https://images.pexels.com/photos/8460372/pexels-photo-8460372.jpeg"
              alt="Doctors"
            />
            <h3>Expert Specialists</h3>
            <p>
              Highly qualified doctors delivering exceptional care.
            </p>
          </div>

          <div className="feature-card">
            <img
              src="https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg"
              alt="Care"
            />
            <h3>Patient First</h3>
            <p>
              Personalized treatment plans focused on patient well-being.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="vision-section">
        <div className="container vision-container">
          <div className="vision-image">
            <img
              src="https://images.pexels.com/photos/6129688/pexels-photo-6129688.jpeg"
              alt="Medical Team"
            />
          </div>

          <div className="vision-content">
            <h2>Our Vision</h2>
            <p>
              To become the most trusted healthcare institution by combining
              medical excellence, compassionate care, and innovative
              technologies.
            </p>

            <ul>
              <li>✔ World-Class Treatment</li>
              <li>✔ Smart AI Healthcare Solutions</li>
              <li>✔ Patient-Centered Services</li>
              <li>✔ Continuous Innovation</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;