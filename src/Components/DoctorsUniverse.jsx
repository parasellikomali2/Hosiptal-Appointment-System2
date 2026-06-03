import { useNavigate } from "react-router-dom";
import "./DoctorsUniverse.css";

const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    experience: "15+ Years Experience",
    rating: "⭐ 4.9",
    image:
      "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg",
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Neurologist",
    experience: "12+ Years Experience",
    rating: "⭐ 4.8",
    image:
      "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg",
  },
  {
    id: 3,
    name: "Dr. Emma Wilson",
    specialty: "Orthopedic Surgeon",
    experience: "10+ Years Experience",
    rating: "⭐ 4.9",
    image:
      "https://images.pexels.com/photos/5998474/pexels-photo-5998474.jpeg",
  },
  {
    id: 4,
    name: "Dr. James Anderson",
    specialty: "Dermatologist",
    experience: "14+ Years Experience",
    rating: "⭐ 4.7",
    image:
      "https://images.pexels.com/photos/8460372/pexels-photo-8460372.jpeg",
  },
];

function DoctorsUniverse() {
  const navigate = useNavigate();

  return (
    <section className="doctor-section">
      <div className="doctor-grid">
        {doctors.map((doctor) => (
          <div className="doctor-card" key={doctor.id}>
            <img src={doctor.image} alt={doctor.name} />

            <h3>{doctor.name}</h3>
            <h4>{doctor.specialty}</h4>
            <p>{doctor.experience}</p>
            <span>{doctor.rating}</span>

            <button
              onClick={() =>
                navigate(`/doctor/${doctor.id}`)
              }
            >
              View Profile
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DoctorsUniverse;