import "./Reception.css";

function OperationTheatrePage() {
  return (
    <div className="room-page">
      <img
        src="/images/opp.jpg"
        alt="Operation Theatre"
      />

      <h1>Operation Theatre</h1>

      <p>
        Our advanced surgical theatres are
        equipped with modern robotic surgery,
        monitoring systems and high-end
        surgical equipment.
      </p>

      <div className="room-info">
        <h3>Features</h3>

        <ul>
          <li>Robotic Surgery Units</li>
          <li>Emergency OT</li>
          <li>Modern Monitoring Systems</li>
          <li>Specialized Surgical Teams</li>
        </ul>
      </div>
    </div>
  );
}

export default OperationTheatrePage;