import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FlaskConical,
  Droplets,
  Thermometer,
  Zap,
  Leaf,
  MapPin,
  CalendarDays,
  Plus,
  Layers,
  Award,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  TrendingUp,
  FileDown
} from "lucide-react";

import SensorCard from "../components/SensorCard";
import FertilityCard from "../components/FertilityCard";

function Dashboard() {
  // Agricultural sample data for Sri Lanka (Kegalle Agro-Ecological Zone)
  const [soilData] = useState({
    sampleId: "KG-001",
    location: "Kegalle",
    regionDetails: "Sabaragamuwa Province (Wet Zone Mid Country - WL2a)",
    soilType: "Red-Yellow Podzolic (RYP)",
    samplingDepth: "0 - 15 cm (Topsoil)",
    date: "06/10/2026",
    time: "11:42 AM",

    ph: 6.4,
    nitrogen: 42,
    phosphorus: 28,
    potassium: 55,
    moisture: 63,
    temperature: 27.5,
    ec: 1.4,

    fertility: "Medium",
    fertilityScore: 74,

    nutrientStatus: {
      nitrogen: "Sufficient",
      phosphorus: "Deficient",
      potassium: "Sufficient",
      ph: "Suitable",
    },
  });

  // Recommended crops tailored for this Sri Lankan soil sample
  const cropRecommendations = [
    {
      name: "Ceylon Tea",
      botanical: "Camellia sinensis",
      suitability: 94,
      tag: "Highly Suitable",
      notes: "Optimal pH (6.4) and moisture for vegetative flush in mid-country hills.",
    },
    {
      name: "Ceylon Cinnamon",
      botanical: "Cinnamomum verum",
      suitability: 89,
      tag: "Highly Suitable",
      notes: "Well-suited for well-drained RYP soil; thrive with potassium levels.",
    },
    {
      name: "Black Pepper",
      botanical: "Piper nigrum",
      suitability: 85,
      tag: "Suitable",
      notes: "Phosphorus supplementation recommended to boost root establishment.",
    },
    {
      name: "Rubber",
      botanical: "Hevea brasiliensis",
      suitability: 81,
      tag: "Suitable",
      notes: "Adapted to Kegalle agro-climatic conditions and 63% soil moisture.",
    },
  ];

  return (
    <div className="dashboard-container">
      {/* Page Header */}
      <div className="page-header">
        <div className="header-titles">
          <div className="header-badge-row">
            <span className="live-status-pill">
              <span className="status-dot"></span>
              Live IoT Telemetry
            </span>
            <span className="agro-zone-tag">Wet Zone WL2a</span>
          </div>
          <h1 className="page-title">Soil Fertility Dashboard</h1>
          <p className="page-subtitle">
            Real-time IoT sensor telemetry, image-processing soil assessment & AI crop recommendations for Sri Lanka.
          </p>
        </div>

        <div className="header-actions">
          <button 
            className="secondary-btn"
            onClick={() => window.print()}
            title="Export or print this report"
          >
            <FileDown size={16} />
            <span>Export Report</span>
          </button>

          <Link to="/analysis" className="primary-btn">
            <Plus size={17} strokeWidth={2.5} />
            <span>New Analysis</span>
          </Link>
        </div>
      </div>

      {/* Latest Soil Sample Specimen Card */}
      <section className="dashboard-section sample-section">
        <div className="section-header-compact">
          <div className="section-title-wrap">
            <Layers size={17} className="text-dark-green" />
            <h3 className="section-title">Active Soil Sample Specimen</h3>
          </div>
          <span className="specimen-status-chip">
            <CheckCircle size={13} />
            Verified Field Specimen
          </span>
        </div>

        <div className="sample-card-glass">
          <div className="sample-grid">
            {/* Sample ID */}
            <div className="sample-meta-cell">
              <span className="meta-label">Sample ID</span>
              <div className="meta-value-row">
                <span className="sample-badge-id">{soilData.sampleId}</span>
              </div>
              <span className="meta-sub">Batch #2026-OCT</span>
            </div>

            {/* Location */}
            <div className="sample-meta-cell">
              <span className="meta-label">Location / Agro-Zone</span>
              <div className="meta-value-row">
                <MapPin size={16} className="text-dark-green" />
                <strong className="meta-value">{soilData.location}</strong>
              </div>
              <span className="meta-sub">{soilData.regionDetails}</span>
            </div>

            {/* Soil Classification */}
            <div className="sample-meta-cell">
              <span className="meta-label">Soil Classification</span>
              <div className="meta-value-row">
                <Leaf size={16} className="text-light-green" />
                <strong className="meta-value">{soilData.soilType}</strong>
              </div>
              <span className="meta-sub">Depth: {soilData.samplingDepth}</span>
            </div>

            {/* Timestamp */}
            <div className="sample-meta-cell">
              <span className="meta-label">Timestamp</span>
              <div className="meta-value-row">
                <CalendarDays size={16} className="text-dark-green" />
                <strong className="meta-value">{soilData.date}</strong>
              </div>
              <span className="meta-sub">{soilData.time} Local Time</span>
            </div>
          </div>
        </div>
      </section>

      {/* Soil Measurements Grid */}
      <section className="dashboard-section">
        <div className="section-header">
          <div>
            <h2 className="section-title">Soil Measurements</h2>
            <p className="section-desc">
              Real-time physicochemical readings captured by calibrated IoT sensor nodes.
            </p>
          </div>
          <span className="sensor-count-badge">7 Sensors Active</span>
        </div>

        <div className="sensor-grid">
          <SensorCard
            name="Soil pH"
            chemicalSymbol="pH"
            value={soilData.ph}
            status="Suitable"
            targetRange="6.0 - 7.5"
            progressPercent={75}
            icon={<FlaskConical size={20} />}
          />

          <SensorCard
            name="Nitrogen"
            chemicalSymbol="N"
            value={soilData.nitrogen}
            unit="mg/kg"
            status="Sufficient"
            targetRange="30 - 50 mg/kg"
            progressPercent={84}
            icon={<Leaf size={20} />}
          />

          <SensorCard
            name="Phosphorus"
            chemicalSymbol="P"
            value={soilData.phosphorus}
            unit="mg/kg"
            status="Deficient"
            targetRange="35 - 55 mg/kg"
            progressPercent={45}
            icon={<Leaf size={20} />}
          />

          <SensorCard
            name="Potassium"
            chemicalSymbol="K"
            value={soilData.potassium}
            unit="mg/kg"
            status="Sufficient"
            targetRange="40 - 70 mg/kg"
            progressPercent={78}
            icon={<Leaf size={20} />}
          />

          <SensorCard
            name="Moisture"
            chemicalSymbol="H₂O"
            value={soilData.moisture}
            unit="%"
            status="Optimal"
            targetRange="55 - 75%"
            progressPercent={63}
            icon={<Droplets size={20} />}
          />

          <SensorCard
            name="Temperature"
            chemicalSymbol="°C"
            value={soilData.temperature}
            unit="°C"
            status="Optimal"
            targetRange="22 - 30 °C"
            progressPercent={68}
            icon={<Thermometer size={20} />}
          />

          <SensorCard
            name="Conductivity"
            chemicalSymbol="EC"
            value={soilData.ec}
            unit="mS/cm"
            status="Normal"
            targetRange="< 2.0 mS/cm"
            progressPercent={50}
            icon={<Zap size={20} />}
          />
        </div>
      </section>

      {/* Fertility Assessment Card */}
      <section className="dashboard-section">
        <div className="section-header">
          <div>
            <h2 className="section-title">Fertility Assessment</h2>
            <p className="section-desc">
              Comprehensive Machine Learning health index calculated across macronutrient and physical attributes.
            </p>
          </div>
        </div>

        <FertilityCard
          status={soilData.fertility}
          score={soilData.fertilityScore}
          sampleId={soilData.sampleId}
        />
      </section>

      {/* Nutrient Benchmark Table */}
      <section className="dashboard-section">
        <div className="section-header">
          <div>
            <h2 className="section-title">Nutrient Matrix & Agronomic Benchmarks</h2>
            <p className="section-desc">
              Comparison of observed levels against Department of Agriculture Sri Lanka standards.
            </p>
          </div>
        </div>

        <div className="table-card">
          <table className="custom-table">
            <thead>
              <tr>
                <th>Nutrient / Parameter</th>
                <th>Measured Reading</th>
                <th>Ideal Benchmark Range</th>
                <th>Assessment Status</th>
                <th>Agronomist Recommendation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="table-nutrient-col">
                    <span className="nutrient-dot dot-n"></span>
                    <div>
                      <strong>Nitrogen (N)</strong>
                      <span className="sub-label">Essential for vegetative growth</span>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="table-value">{soilData.nitrogen} mg/kg</span>
                </td>
                <td>30 – 50 mg/kg</td>
                <td>
                  <span className="status-pill status-sufficient">
                    <CheckCircle size={12} />
                    Sufficient
                  </span>
                </td>
                <td className="table-recommendation">
                  Adequate for vegetative development. Maintain standard urea or organic compost top-dressing.
                </td>
              </tr>

              <tr>
                <td>
                  <div className="table-nutrient-col">
                    <span className="nutrient-dot dot-p"></span>
                    <div>
                      <strong>Phosphorus (P)</strong>
                      <span className="sub-label">Root vigor and flowering</span>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="table-value text-attention">{soilData.phosphorus} mg/kg</span>
                </td>
                <td>35 – 55 mg/kg</td>
                <td>
                  <span className="status-pill status-deficient">
                    <AlertCircle size={12} />
                    Deficient
                  </span>
                </td>
                <td className="table-recommendation text-attention-desc">
                  Below target. Apply Eppawala Rock Phosphate (ERP) or DAP at planting to strengthen root networks.
                </td>
              </tr>

              <tr>
                <td>
                  <div className="table-nutrient-col">
                    <span className="nutrient-dot dot-k"></span>
                    <div>
                      <strong>Potassium (K)</strong>
                      <span className="sub-label">Disease resistance & water regulation</span>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="table-value">{soilData.potassium} mg/kg</span>
                </td>
                <td>40 – 70 mg/kg</td>
                <td>
                  <span className="status-pill status-sufficient">
                    <CheckCircle size={12} />
                    Sufficient
                  </span>
                </td>
                <td className="table-recommendation">
                  Favorable level. Supports drought resistance and cellular transport. Continue periodic MOP schedule.
                </td>
              </tr>

              <tr>
                <td>
                  <div className="table-nutrient-col">
                    <span className="nutrient-dot dot-ph"></span>
                    <div>
                      <strong>Soil Reaction (pH)</strong>
                      <span className="sub-label">Nutrient bioavailability index</span>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="table-value">{soilData.ph}</span>
                </td>
                <td>5.8 – 6.8</td>
                <td>
                  <span className="status-pill status-suitable">
                    <CheckCircle size={12} />
                    Suitable
                  </span>
                </td>
                <td className="table-recommendation">
                  Slightly acidic to near neutral. Optimal for nutrient absorption in Sri Lankan Wet Zone crops.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Sri Lanka Crop Recommendations (ML Guidance) */}
      <section className="dashboard-section">
        <div className="section-header">
          <div>
            <div className="section-tag-row">
              <span className="ai-pill">
                <Award size={13} />
                ML Recommendation Model
              </span>
            </div>
            <h2 className="section-title">Top Crop Recommendations for this Soil Profile</h2>
            <p className="section-desc">
              Ranked predictions based on N-P-K concentrations, pH 6.4, Red-Yellow Podzolic soil, and Kegalle climate.
            </p>
          </div>

          <Link to="/analysis" className="view-more-link">
            <span>Explore Crop Models</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="crops-grid">
          {cropRecommendations.map((crop, idx) => (
            <div key={idx} className="crop-card">
              <div className="crop-card-top">
                <div>
                  <h4 className="crop-name">{crop.name}</h4>
                  <span className="crop-botanical">{crop.botanical}</span>
                </div>
                <div className="crop-match-badge">
                  <span className="crop-match-val">{crop.suitability}%</span>
                  <span className="crop-match-sub">Match</span>
                </div>
              </div>

              <div className="crop-bar-wrap">
                <div 
                  className="crop-bar-fill" 
                  style={{ width: `${crop.suitability}%` }}
                ></div>
              </div>

              <p className="crop-notes">{crop.notes}</p>

              <div className="crop-footer">
                <span className="crop-tag">{crop.tag}</span>
                <span className="crop-zone-label">WL2a Compatible</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Quick Actions */}
      <div className="dashboard-actions-panel">
        <div className="action-panel-text">
          <h3>Ready to test a new field sample?</h3>
          <p>Collect IoT sensor probes or upload macroscopic soil photos for instant analysis.</p>
        </div>
        <div className="action-buttons-group">
          <Link to="/analysis" className="primary-btn">
            <Plus size={16} />
            <span>Start New Analysis</span>
          </Link>
          <Link to="/history" className="secondary-btn">
            <span>View Sample History</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;