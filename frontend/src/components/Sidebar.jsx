import { NavLink } from "react-router-dom";

function Sidebar() {

  const linkStyle = ({ isActive }) => ({
    backgroundColor: isActive ? "#e8f5e9" : "transparent",
    fontWeight: isActive ? "bold" : "normal",
  });

  return (
    <aside>

      <h2>Smart Soil</h2>

      <nav>

        <NavLink to="/" style={linkStyle}>
          Dashboard
        </NavLink>

        <NavLink to="/analysis" style={linkStyle}>
          New Analysis
        </NavLink>

        <NavLink to="/history" style={linkStyle}>
          History
        </NavLink>

        <NavLink to="/device" style={linkStyle}>
          Device Status
        </NavLink>

      </nav>

    </aside>
  );
}

export default Sidebar;