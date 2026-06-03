import { useState } from "react";
import "./AppointmentWidget.css";

function Appointment() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="appointment-float"
        onClick={() => setOpen(!open)}
      >
        Book Appointment
      </button>

      {open && (
        <div className="appointment-popup">
          <h3>Quick Appointment</h3>

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="date"
          />

          <button>Submit</button>
        </div>
      )}
    </>
  );
}

export default Appointment;