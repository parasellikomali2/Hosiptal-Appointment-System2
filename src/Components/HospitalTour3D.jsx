import "./HospitalTour3D.css";
import { useNavigate } from "react-router-dom";

function HospitalTour3D() {
  const navigate = useNavigate();

  const tourSpots = [
    {
      title: "Main Reception",
      image:
        "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg",
      description:
        "Smart digital reception with AI-assisted patient support.",
      path: "/reception",
    },
    {
      title: "Operation Theatre",
      image:
        "https://images.pexels.com/photos/1170979/pexels-photo-1170979.jpeg",
      description:
        "Advanced surgical suites equipped with modern technology.",
      path: "/operation-theatre",
    },
    {
      title: "Patient Rooms",
      image:
        "https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg",
      description:
        "Comfortable and fully monitored patient recovery rooms.",
      path: "/patient-rooms",
    },
  ];

  return (
    <section className="tour-section">
      <div className="tour-header">
        <h2>🏥 3D Virtual Hospital Tour</h2>
      </div>

      <div className="tour-grid">
        {tourSpots.map((spot, index) => (
          <div className="tour-card" key={index}>
            <img src={spot.image} alt={spot.title} />

            <div className="tour-content">
              <h3>{spot.title}</h3>
              <p>{spot.description}</p>

              <button
                onClick={() => navigate(spot.path)}
              >
                Explore Room
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HospitalTour3D;