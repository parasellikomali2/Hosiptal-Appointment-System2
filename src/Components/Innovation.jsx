import "./Innovation.css";
import { FaRobot, FaHeartbeat, FaBrain, FaLaptopMedical } from "react-icons/fa";
import { motion } from "framer-motion";

function Innovation() {
  const innovations = [
    {
      icon: <FaBrain />,
      title: "AI Diagnosis",
      desc: "Advanced AI systems assist doctors in detecting diseases faster and more accurately.",
    },
    {
      icon: <FaRobot />,
      title: "Robotic Surgery",
      desc: "Precision robotic procedures improve recovery time and patient outcomes.",
    },
    {
      icon: <FaLaptopMedical />,
      title: "Telemedicine",
      desc: "Consult specialists remotely through secure virtual healthcare services.",
    },
    {
      icon: <FaHeartbeat />,
      title: "Smart Monitoring",
      desc: "Real-time patient monitoring using wearable and IoT healthcare devices.",
    },
  ];

  return (
    <section className="innovation-section">
      <div className="innovation-overlay"></div>

      <div className="container">
        <motion.div
          className="innovation-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2>Healthcare Innovation Center</h2>
          <p>
            Experience the future of medicine with cutting-edge technology,
            AI-powered healthcare, and digital patient services.
          </p>
        </motion.div>

        <div className="innovation-grid">
          {innovations.map((item, index) => (
            <motion.div
              key={index}
              className="innovation-card"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{
                scale: 1.05,
                rotateY: 10,
              }}
            >
              <div className="icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="innovation-stats"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div>
            <h3>50K+</h3>
            <span>Patients Served</span>
          </div>

          <div>
            <h3>98%</h3>
            <span>Success Rate</span>
          </div>

          <div>
            <h3>24/7</h3>
            <span>AI Assistance</span>
          </div>

          <div>
            <h3>100+</h3>
            <span>Specialists</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Innovation;