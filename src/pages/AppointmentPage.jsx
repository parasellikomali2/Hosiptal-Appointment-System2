import { useState } from "react";
import "./AppointmentPage.css";
import Navbar from "../Components/Navbar";

function Appointment() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    doctor: "",
    date: "",
    time: "",
    reason: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);

    setFormData({
      name: "",
      email: "",
      phone: "",
      doctor: "",
      date: "",
      time: "",
      reason: "",
    });
  };

  return (
    <div className="appointment-page">
      <div className="appointment-overlay"></div>

      <div className="appointment-container">
        <div className="appointment-left">
          <h1>Book Your Appointment</h1>

          <p>
            Schedule consultations with our experienced specialists
            and receive quality healthcare with advanced treatment.
          </p>

          <div className="appointment-features">
            <div>✓ Expert Doctors</div>
            <div>✓ Instant Booking</div>
            <div>✓ AI Assisted Healthcare</div>
            <div>✓ 24/7 Support</div>
          </div>
        </div>

        <div className="appointment-card">
          <h2>Appointment Form</h2>

          {submitted && (
            <div className="success-message">
              Appointment Booked Successfully 🎉
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <select
              name="doctor"
              value={formData.doctor}
              onChange={handleChange}
              required
            >
              <option value="">Select Doctor</option>
              <option>Cardiologist</option>
              <option>Neurologist</option>
              <option>Orthopedic</option>
              <option>Pediatrician</option>
              <option>Dermatologist</option>
            </select>

            <div className="date-time">
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />

              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </div>

            <textarea
              name="reason"
              placeholder="Describe your symptoms or reason for visit..."
              rows="4"
              value={formData.reason}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">
              Confirm Appointment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Appointment;