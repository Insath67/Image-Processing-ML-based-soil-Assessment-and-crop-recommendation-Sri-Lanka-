function SensorCard({ name, value, unit, status }) {
  return (
    <div className="sensor-card">
      <p className="sensor-name">{name}</p>

      <div className="sensor-value">
        {value}
        {unit && <span className="sensor-unit"> {unit}</span>}
      </div>

      {status && (
        <p className="sensor-status">
          {status}
        </p>
      )}
    </div>
  );
}

export default SensorCard;