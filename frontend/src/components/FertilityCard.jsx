import { Sprout } from "lucide-react";

function FertilityCard({ status }) {

  const statusClass =
    status.toLowerCase();

  return (
    <div className="fertility-card">

      <div className="fertility-icon">
        <Sprout size={32} />
      </div>

      <div>
        <p className="fertility-label">
          Overall Soil Fertility
        </p>

        <h2
          className={`fertility-value ${statusClass}`}
        >
          {status}
        </h2>

        <p className="fertility-description">
          Current fertility assessment based on
          available soil measurements.
        </p>
      </div>

    </div>
  );
}

export default FertilityCard;