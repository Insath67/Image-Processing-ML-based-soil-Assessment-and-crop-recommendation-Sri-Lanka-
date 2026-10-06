import { Link } from "react-router-dom";
import {
  CalendarDays,
  MapPin,
  CheckCircle,
  AlertCircle,
  Eye,
  Plus
} from "lucide-react";

function History() {
  const historyData = [
    {
      id: "KG-001",
      location: "Kegalle (WL2a)",
      date: "06/10/2026",
      ph: 6.4,
      fertility: "Medium",
      crop: "Ceylon Tea, Cinnamon",
      status: "Sufficient",
    },
    {
      id: "GL-004",
      location: "Galle (WL1a)",
      date: "02/10/2026",
      ph: 5.8,
      fertility: "High",
      crop: "Cinnamon, Rubber",
      status: "Sufficient",
    },
    {
      id: "KD-012",
      location: "Kandy (WM2b)",
      date: "28/09/2026",
      ph: 6.1,
      fertility: "Medium",
      crop: "Vegetables, Pepper",
      status: "Sufficient",
    },
    {
      id: "NE-008",
      location: "Nuwara Eliya (WU1)",
      date: "21/09/2026",
      ph: 5.2,
      fertility: "Medium",
      crop: "Upcountry Tea, Potato",
      status: "Acidic Alert",
    },
    {
      id: "KG-000",
      location: "Kegalle (WL2a)",
      date: "14/09/2026",
      ph: 6.5,
      fertility: "Medium",
      crop: "Black Pepper",
      status: "Sufficient",
    },
  ];

  return (
    <div className="subpage-container">
      <div className="page-header">
        <div>
          <div className="header-badge-row">
            <span className="live-status-pill">
              <span className="status-dot"></span>
              Historical Repository
            </span>
            <span className="agro-zone-tag">5 Verified Records</span>
          </div>
          <h1 className="page-title">Soil Analysis History</h1>
          <p className="page-subtitle">
            Archive of field sensor readings, physicochemical measurements, and corresponding ML crop advisories.
          </p>
        </div>

        <Link to="/analysis" className="primary-btn">
          <Plus size={16} />
          <span>New Analysis</span>
        </Link>
      </div>

      <div className="table-card">
        <table className="custom-table">
          <thead>
            <tr>
              <th>Sample ID</th>
              <th>Location / Agro-Zone</th>
              <th>Timestamp</th>
              <th>pH Value</th>
              <th>Fertility Rating</th>
              <th>Recommended Crops</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {historyData.map((row) => (
              <tr key={row.id}>
                <td>
                  <span className="sample-badge-id" style={{ fontSize: "13px", padding: "3px 8px" }}>
                    {row.id}
                  </span>
                </td>
                <td>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <MapPin size={14} className="text-dark-green" />
                    <strong>{row.location}</strong>
                  </div>
                </td>
                <td>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "var(--text-muted)" }}>
                    <CalendarDays size={14} />
                    <span>{row.date}</span>
                  </div>
                </td>
                <td>
                  <span className="table-value">{row.ph}</span>
                </td>
                <td>
                  <span className={`status-pill ${row.fertility === "High" ? "status-sufficient" : "status-suitable"}`}>
                    <CheckCircle size={12} />
                    {row.fertility}
                  </span>
                </td>
                <td style={{ fontWeight: "600", color: "var(--green-dark-800)" }}>
                  {row.crop}
                </td>
                <td>
                  <Link
                    to={`/result/${row.id}`}
                    className="secondary-btn"
                    style={{ padding: "6px 12px", fontSize: "12px" }}
                  >
                    <Eye size={13} />
                    <span>Inspect</span>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default History;