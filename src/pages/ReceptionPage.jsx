import "./Reception.css";

function ReceptionPage() {
  return (
    <div className="room-page">
      <img
        src="/images/reception.jpg"
        alt="Reception"
      />

      <h1>Main Reception</h1>

      <p>
        Welcome to Grace Hospital Reception.
        Our AI-powered reception desk assists
        patients with appointments, registrations,
        billing support, and doctor guidance.
      </p>

      <div className="room-info">
        <h3>Facilities</h3>

        <ul>
          <li>24/7 Reception Service</li>
          <li>Digital Check-In</li>
          <li>Appointment Booking</li>
          <li>Patient Guidance Desk</li>
        </ul>
      </div>
    </div>
  );
}

export default ReceptionPage;