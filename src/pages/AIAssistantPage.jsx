import { useLocation, useNavigate } from "react-router-dom";
import "./AIAssistant.css";

function AIAssistantPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const data = location.state;

  if (!data) {
    return (
      <div className="ai-error">
        <h2>No Analysis Data Found</h2>
        <button onClick={() => navigate("/health-scanner")}>
          Back to Scanner
        </button>
      </div>
    );
  }

  return (
    <section className="ai-page">

      <div className="ai-header">
        <div className="ai-badge">🤖 AI Medical Assistant</div>

        <h1>{data.title}</h1>

        <p>
          AI-powered diagnostic analysis completed successfully.
          Review the generated health insights below.
        </p>
      </div>

      <div className="analysis-container">

        <div className="analysis-image">
          <img src={data.image} alt={data.title} />
        </div>

        <div className="analysis-content">

          <div className="status-card">
            <h3>Scan Status</h3>
            <span className="status-success">
              ✓ Analysis Complete
            </span>
          </div>

          <div className="report-card">
            <h3>AI Findings</h3>
            <p>{data.result}</p>
          </div>

          <div className="report-card">
            <h3>Health Score</h3>

            <div className="score-circle">
              96%
            </div>

            <p>
              Overall health indicators appear within
              normal parameters.
            </p>
          </div>

          <div className="report-card">
            <h3>AI Recommendations</h3>

            <ul>
              <li>Maintain a balanced diet.</li>
              <li>Exercise at least 30 minutes daily.</li>
              <li>Stay hydrated throughout the day.</li>
              <li>Schedule regular health checkups.</li>
              <li>Monitor symptoms if any changes occur.</li>
            </ul>
          </div>

           <button
            className="back-btn"
            onClick={() => navigate("/health-scanner")}
          >
            ← Back To Scanner
          </button>
        </div>

      </div>

    </section>
  );
}

export default AIAssistantPage;