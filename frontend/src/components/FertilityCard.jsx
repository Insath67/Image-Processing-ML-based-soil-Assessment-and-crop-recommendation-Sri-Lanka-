function FertilityCard({ status }) {
  return (
    <div className="fertility-card">
      <p>Overall Soil Fertility</p>

      <h2>{status}</h2>

      <p>
        Based on the current soil sensor and analysis data
      </p>
    </div>
  );
}

export default FertilityCard;