import { Link } from "react-router-dom";

import SensorCard from "../components/SensorCard";
import FertilityCard from "../components/FertilityCard";

function Dashboard() {

  const soilData = {
    sampleId: "KG-001",
    location: "Kegalle",
    date: "06/10/2026",

    ph: 6.4,
    nitrogen: 42,
    phosphorus: 28,
    potassium: 55,
    moisture: 63,
    temperature: 27.5,
    ec: 1.4,

    fertility: "Medium",

    nutrientStatus: {
      nitrogen: "Sufficient",
      phosphorus: "Deficient",
      potassium: "Sufficient",
      ph: "Suitable",
    },
  };

  return (
    <div className="dashboard">

      <div className="dashboard-header">
        <div>
          <h1>Soil Fertility Dashboard</h1>
          <p>
            Latest soil measurements and fertility status
          </p>
        </div>

        <div className="device-online">
          ● Device Online
        </div>
      </div>

      <div className="sample-info">
        <div>
          <span>Sample ID</span>
          <strong>{soilData.sampleId}</strong>
        </div>

        <div>
          <span>Location</span>
          <strong>{soilData.location}</strong>
        </div>

        <div>
          <span>Date</span>
          <strong>{soilData.date}</strong>
        </div>
      </div>

      <h2 className="section-title">
        Soil Measurements
      </h2>

      <div className="sensor-grid">

        <SensorCard
          name="pH"
          value={soilData.ph}
          status="Suitable"
        />

        <SensorCard
          name="Nitrogen (N)"
          value={soilData.nitrogen}
          unit="mg/kg"
          status="Sufficient"
        />

        <SensorCard
          name="Phosphorus (P)"
          value={soilData.phosphorus}
          unit="mg/kg"
          status="Deficient"
        />

        <SensorCard
          name="Potassium (K)"
          value={soilData.potassium}
          unit="mg/kg"
          status="Sufficient"
        />

        <SensorCard
          name="Moisture"
          value={soilData.moisture}
          unit="%"
        />

        <SensorCard
          name="Temperature"
          value={soilData.temperature}
          unit="°C"
        />

        <SensorCard
          name="Electrical Conductivity"
          value={soilData.ec}
          unit="mS/cm"
        />

      </div>

      <h2 className="section-title">
        Fertility Assessment
      </h2>

      <FertilityCard
        status={soilData.fertility}
      />

      <div className="nutrient-section">

        <h2>Nutrient Status</h2>

        <div className="nutrient-row">
          <span>Nitrogen</span>
          <strong>
            {soilData.nutrientStatus.nitrogen}
          </strong>
        </div>

        <div className="nutrient-row">
          <span>Phosphorus</span>
          <strong>
            {soilData.nutrientStatus.phosphorus}
          </strong>
        </div>

        <div className="nutrient-row">
          <span>Potassium</span>
          <strong>
            {soilData.nutrientStatus.potassium}
          </strong>
        </div>

        <div className="nutrient-row">
          <span>pH</span>
          <strong>
            {soilData.nutrientStatus.ph}
          </strong>
        </div>

      </div>

      <div className="dashboard-actions">

        <Link
          to="/analysis"
          className="primary-button"
        >
          New Soil Analysis
        </Link>

        <Link
          to="/history"
          className="secondary-button"
        >
          View History
        </Link>

      </div>

    </div>
  );
}

export default Dashboard;