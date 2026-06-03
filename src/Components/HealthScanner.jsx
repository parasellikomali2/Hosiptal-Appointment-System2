import { useNavigate } from "react-router-dom";
import "./HealthScanner.css";

const healthModules = [
  {
    title: "AI Brain Analysis",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
    desc: "Neural activity monitoring and cognitive health insights.",
    icon: "🧠",
    result: "Brain activity appears normal. Cognitive functions are stable.",
  },
  {
    title: "Heart Monitoring",
    image: "https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg",
    desc: "Real-time cardiovascular analysis powered by AI.",
    icon: "❤️",
    result: "Heart rate is within normal range. No abnormalities detected.",
  },
  {
    title: "Lung Scanner",
    image: "https://images.pexels.com/photos/8376294/pexels-photo-8376294.jpeg",
    desc: "Advanced respiratory system diagnostics.",
    icon: "🫁",
    result: "Lung capacity is healthy. Oxygen flow is optimal.",
  },
];

function HealthScanner() {
  const navigate = useNavigate();

  const handleAnalysis = (item) => {
    navigate("/ai-assistant", {
      state: {
        title: item.title,
        result: item.result,
        image: item.image,
      },
    });
  };

  return (
    <section className="scanner-section">
      <div className="scanner-header">
        <h2>AI Health Scanner</h2>
        <p>Choose a health module and run an AI analysis.</p>
      </div>

      <div className="scanner-grid">
        {healthModules.map((item, index) => (
          <div className="scanner-card" key={index}>
            <div className="scanner-image">
              <img src={item.image} alt={item.title} />
            </div>

            <div className="scanner-content">
              <h3>{item.icon} {item.title}</h3>
              <p>{item.desc}</p>

              <button
                className="scan-btn"
                onClick={() => handleAnalysis(item)}
              >
                Start Analysis
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HealthScanner;