import "./DoctorProfile.css";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";

const doctors = [
  
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialization: "Cardiologist",
    experience: "12 Years",
    rating: "4.9",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    name: "Dr. David Miller",
    specialization: "Neurologist",
    experience: "10 Years",
    rating: "4.8",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    name: "Dr. Emily Wilson",
    specialization: "Dermatologist",
    experience: "8 Years",
    rating: "4.7",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: 4,
    name: "Dr. James Brown",
    specialization: "Orthopedic",
    experience: "15 Years",
    rating: "4.9",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    id: 5,
    name: "Dr. Olivia White",
    specialization: "Pediatrician",
    experience: "9 Years",
    rating: "4.8",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
  },
  {
    id: 6,
    name: "Dr. Michael Lee",
    specialization: "ENT Specialist",
    experience: "11 Years",
    rating: "4.6",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    id: 7,
    name: "Dr. Sophia Clark",
    specialization: "Gynecologist",
    experience: "13 Years",
    rating: "4.9",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
  },
  {
    id: 8,
    name: "Dr. Ethan Walker",
    specialization: "Psychiatrist",
    experience: "7 Years",
    rating: "4.7",
    image: "https://randomuser.me/api/portraits/men/29.jpg",
  },
  {
    id: 9,
    name: "Dr. Ava Thomas",
    specialization: "Oncologist",
    experience: "14 Years",
    rating: "4.9",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    id: 10,
    name: "Dr. Daniel Scott",
    specialization: "General Physician",
    experience: "6 Years",
    rating: "4.6",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
  },
];




function DoctorProfile() {
  const navigate = useNavigate();

  const handleBookAppointment = (doctor) => {
    navigate("/AppointmentPage", {
      state: { doctor },
    });
  };

  return (
    <div className="doctor-page">
      <div className="page-header">
        <h1>Our Specialist Doctors</h1>
        <p>
          Meet our experienced healthcare professionals dedicated
          to providing world-class medical care.
        </p>
      </div>

      <div className="doctor-grid">
        {doctors.map((doctor) => (
          <div className="doctor-card" key={doctor.id}>
            <img
              src={doctor.image}
              alt={doctor.name}
              className="doctor-image"
            />

            <div className="doctor-info">
              <h3>{doctor.name}</h3>

              <span className="speciality">
                {doctor.specialization}
              </span>

              <div className="details">
                <p>⭐ {doctor.rating}</p>
                <p>🏥 {doctor.experience}</p>
              </div>

              <button
                className="primary-btn"
                onClick={() => handleBookAppointment(doctor)}
              >
                Book Appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DoctorProfile;