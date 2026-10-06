function SensorCard({
  name,
  value,
  unit,
  status,
  icon
}) {
  return (
    <div className="sensor-card">

      <div className="sensor-card-header">

        <div>
          <p className="sensor-name">
            {name}
          </p>

          <div className="sensor-value">
            {value}

            {unit && (
              <span className="sensor-unit">
                {unit}
              </span>
            )}
          </div>
        </div>

        {icon && (
          <div className="sensor-icon">
            {icon}
          </div>
        )}

      </div>

      {status && (
        <span className="sensor-status">
          {status}
        </span>
      )}

    </div>
  );
}

export default SensorCard;