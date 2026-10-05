function SensorCard({ name, value, unit }) {
  return (
    <div>
      <h3>{name}</h3>
      <h2>
        {value} {unit}
      </h2>
    </div>
  );
}

export default SensorCard;