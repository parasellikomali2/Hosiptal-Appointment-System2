import "./Reception.css";

function PatientRoomsPage() {
  return (
    <div className="room-page">
      <img
        src="/images/OIP.jpeg"
        alt="Patient Room"
      />

      <h1>Patient Rooms</h1>

      <p>
        Comfortable and fully monitored
        patient rooms designed to ensure
        recovery, safety and relaxation.
      </p>

      <div className="room-info">
        <h3>Amenities</h3>

        <ul>
          <li>24/7 Nursing Support</li>
          <li>Smart Monitoring</li>
          <li>Air Conditioning</li>
          <li>Private Rooms Available</li>
        </ul>
      </div>
    </div>
  );
}

export default PatientRoomsPage;