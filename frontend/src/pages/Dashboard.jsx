import { Link } from "react-router-dom";

import {
  FlaskConical,
  Droplets,
  Thermometer,
  Zap,
  Leaf,
  MapPin,
  CalendarDays
} from "lucide-react";

import SensorCard from "../components/SensorCard";
import FertilityCard from "../components/FertilityCard";

function Dashboard() {

  // Temporary frontend test data.
  // Later this will come from the backend API.

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

      {/* Page heading */}

      <div className="page-heading">

        <div>
          <h1>Soil Fertility Dashboard</h1>

          <p>
            Monitor the latest soil measurements
            and fertility assessment.
          </p>
        </div>

        <Link
          to="/analysis"
          className="primary-button"
        >
          + New Analysis
        </Link>

      </div>


      {/* Latest Sample */}

      <section className="dashboard-section">

        <div className="section-heading">
          <div>
            <h2>Latest Soil Sample</h2>
            <p>Most recent soil measurement</p>
          </div>
        </div>


        <div className="sample-summary">

          <div className="sample-id-box">

            <span>Sample ID</span>

            <strong>
              {soilData.sampleId}
            </strong>

          </div>


          <div className="sample-detail">

            <MapPin size={18} />

            <div>
              <span>Location</span>
              <strong>
                {soilData.location}
              </strong>
            </div>

          </div>


          <div className="sample-detail">

            <CalendarDays size={18} />

            <div>
              <span>Date</span>
              <strong>
                {soilData.date}
              </strong>
            </div>

          </div>

        </div>

      </section>


      {/* Measurements */}

      <section className="dashboard-section">

        <div className="section-heading">

          <div>
            <h2>Soil Measurements</h2>

            <p>
              Latest IoT sensor readings
            </p>
          </div>

        </div>


        <div className="sensor-grid">

          <SensorCard
            name="Soil pH"
            value={soilData.ph}
            status="Suitable"
            icon={<FlaskConical size={23} />}
          />

          <SensorCard
            name="Nitrogen (N)"
            value={soilData.nitrogen}
            unit=" mg/kg"
            status="Sufficient"
            icon={<Leaf size={23} />}
          />

          <SensorCard
            name="Phosphorus (P)"
            value={soilData.phosphorus}
            unit=" mg/kg"
            status="Deficient"
            icon={<Leaf size={23} />}
          />

          <SensorCard
            name="Potassium (K)"
            value={soilData.potassium}
            unit=" mg/kg"
            status="Sufficient"
            icon={<Leaf size={23} />}
          />

          <SensorCard
            name="Moisture"
            value={soilData.moisture}
            unit="%"
            icon={<Droplets size={23} />}
          />

          <SensorCard
            name="Temperature"
            value={soilData.temperature}
            unit=" °C"
            icon={<Thermometer size={23} />}
          />

          <SensorCard
            name="Electrical Conductivity"
            value={soilData.ec}
            unit=" mS/cm"
            icon={<Zap size={23} />}
          />

        </div>

      </section>


      {/* Fertility */}

      <section className="dashboard-section">

        <div className="section-heading">
          <div>
            <h2>Fertility Assessment</h2>

            <p>
              Overall fertility status of the
              latest soil sample
            </p>
          </div>
        </div>

        <FertilityCard
          status={soilData.fertility}
        />

      </section>


      {/* Nutrient status */}

      <section className="dashboard-section">

        <div className="section-heading">

          <div>
            <h2>Nutrient Status</h2>

            <p>
              Current nutrient condition
            </p>
          </div>

        </div>


        <div className="nutrient-table">

          <div className="nutrient-row">

            <div>
              <strong>Nitrogen (N)</strong>
              <span>{soilData.nitrogen} mg/kg</span>
            </div>

            <span className="status-badge sufficient">
              {soilData.nutrientStatus.nitrogen}
            </span>

          </div>


          <div className="nutrient-row">

            <div>
              <strong>Phosphorus (P)</strong>
              <span>{soilData.phosphorus} mg/kg</span>
            </div>

            <span className="status-badge deficient">
              {soilData.nutrientStatus.phosphorus}
            </span>

          </div>


          <div className="nutrient-row">

            <div>
              <strong>Potassium (K)</strong>
              <span>{soilData.potassium} mg/kg</span>
            </div>

            <span className="status-badge sufficient">
              {soilData.nutrientStatus.potassium}
            </span>

          </div>


          <div className="nutrient-row">

            <div>
              <strong>Soil pH</strong>
              <span>{soilData.ph}</span>
            </div>

            <span className="status-badge suitable">
              {soilData.nutrientStatus.ph}
            </span>

          </div>

        </div>

      </section>


      {/* Buttons */}

      <div className="dashboard-actions">

        <Link
          to="/analysis"
          className="primary-button"
        >
          Start New Analysis
        </Link>

        <Link
          to="/history"
          className="secondary-button"
        >
          View Analysis History
        </Link>

      </div>

    </div>
  );
}

export default Dashboard;