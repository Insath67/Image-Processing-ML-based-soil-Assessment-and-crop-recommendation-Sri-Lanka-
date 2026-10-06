import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  Award,
  Layers,
  Sprout,
  CalendarDays,
  MapPin,
  FileDown
} from "lucide-react";

function AnalysisResult() {
  const { id } = useParams();

  return (
    <div className="subpage-container">
      <div style={{ marginBottom: "18px" }}>
        <Link to="/" className="view-more-link" style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
          <ArrowLeft size={16} />
          <span>Back to Soil Dashboard</span>
        </Link>
      </div>

      <div className="page-header">
        <div>
          <div className="header-badge-row">
            <span className="live-status-pill">
              <span className="status-dot"></span>
              ML Inference Report
            </span>
            <span className="agro-zone-tag">Sample: {id || "KG-001"}</span>
          </div>
          <h1 className="page-title">Soil Analysis & Crop Advisory Report</h1>
          <p className="page-subtitle">
            Multivariate assessment for sample #{id || "KG-001"} based on image texture and electrochemical readings.
          </p>
        </div>

        <button className="primary-btn" onClick={() => window.print()}>
          <FileDown size={16} />
          <span>Download PDF Report</span>
        </button>
      </div>

      <div className="sample-card-glass" style={{ marginBottom: "24px" }}>
        <div className="sample-grid">
          <div className="sample-meta-cell">
            <span className="meta-label">Sample ID</span>
            <span className="sample-badge-id">{id || "KG-001"}</span>
            <span className="meta-sub">Verified Specimen</span>
          </div>
          <div className="sample-meta-cell">
            <span className="meta-label">Origin</span>
            <div className="meta-value-row">
              <MapPin size={16} className="text-dark-green" />
              <strong className="meta-value">Kegalle District</strong>
            </div>
            <span className="meta-sub">Mid-Country Wet Zone (WL2a)</span>
          </div>
          <div className="sample-meta-cell">
            <span className="meta-label">Texture Class</span>
            <div className="meta-value-row">
              <Layers size={16} className="text-light-green" />
              <strong className="meta-value">Red-Yellow Podzolic</strong>
            </div>
            <span className="meta-sub">Sandy Clay Loam</span>
          </div>
          <div className="sample-meta-cell">
            <span className="meta-label">Status</span>
            <div className="meta-value-row">
              <CheckCircle2 size={16} className="text-light-green" />
              <strong className="meta-value">Assessment Complete</strong>
            </div>
            <span className="meta-sub">Confidence: 94.2%</span>
          </div>
        </div>
      </div>

      <div className="fertility-hero-card" style={{ marginBottom: "28px" }}>
        <div className="fertility-main-content">
          <div className="fertility-score-box">
            <div className="circular-gauge-wrap">
              <svg className="circular-gauge-svg" width="110" height="110" viewBox="0 0 110 110">
                <circle className="gauge-bg" cx="55" cy="55" r="42" strokeWidth="9" />
                <circle
                  className="gauge-progress"
                  cx="55"
                  cy="55"
                  r="42"
                  strokeWidth="9"
                  strokeDasharray="263.89"
                  strokeDashoffset="68.6"
                  strokeLinecap="round"
                />
              </svg>
              <div className="gauge-score-inner">
                <span className="gauge-number">74</span>
                <span className="gauge-denom">/ 100</span>
              </div>
            </div>
            <span className="fertility-pill pill-medium">
              <Sprout size={14} />
              Medium Fertility
            </span>
          </div>

          <div className="fertility-details">
            <h3 className="fertility-heading">Agronomic Recommendation Summary</h3>
            <p className="fertility-description">
              The chemical profile shows appropriate nitrogen reserves and pH suitable for acid-tolerant crops like tea and cinnamon. Applying Eppawala Rock Phosphate will resolve the 28 mg/kg phosphorus deficiency.
            </p>
            <div className="fertility-submetrics">
              <div className="submetric-item">
                <div className="submetric-label">
                  <span>Nitrogen (42 mg/kg)</span>
                  <strong>84%</strong>
                </div>
                <div className="submetric-bar">
                  <div className="submetric-fill" style={{ width: "84%" }}></div>
                </div>
              </div>
              <div className="submetric-item">
                <div className="submetric-label">
                  <span>Phosphorus (28 mg/kg)</span>
                  <strong>46%</strong>
                </div>
                <div className="submetric-bar">
                  <div className="submetric-fill bar-deficient" style={{ width: "46%" }}></div>
                </div>
              </div>
              <div className="submetric-item">
                <div className="submetric-label">
                  <span>Potassium (55 mg/kg)</span>
                  <strong>78%</strong>
                </div>
                <div className="submetric-bar">
                  <div className="submetric-fill" style={{ width: "78%" }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="fertility-action-box">
            <h4 className="action-box-title">Fertilizer Prescription</h4>
            <div className="action-item">
              <AlertTriangle size={15} className="action-item-icon warning" />
              <div>
                <strong>Eppawala Rock Phosphate</strong>
                <p>150 kg/hectare basal dressing</p>
              </div>
            </div>
            <div className="action-item">
              <CheckCircle2 size={15} className="action-item-icon success" />
              <div>
                <strong>Standard MOP & Urea</strong>
                <p>Maintain recommended split applications</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnalysisResult;