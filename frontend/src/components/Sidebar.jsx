import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  FlaskConical,
  History,
  Cpu,
  Sprout
} from "lucide-react";

function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="sidebar-logo">
        <div className="logo-icon">
          <Sprout size={25} />
        </div>

        <div>
          <h2>Smart Soil</h2>
          <p>Assessment System</p>
        </div>
      </div>

      <nav className="sidebar-nav">

        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/analysis"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          <FlaskConical size={20} />
          <span>New Analysis</span>
        </NavLink>

        <NavLink
          to="/history"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          <History size={20} />
          <span>History</span>
        </NavLink>

        <NavLink
          to="/device"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          <Cpu size={20} />
          <span>Device Status</span>
        </NavLink>

      </nav>

      <div className="sidebar-footer">
        <p>Research Project</p>
        <strong>IT23247154</strong>
      </div>

    </aside>
  );
}

export default Sidebar;