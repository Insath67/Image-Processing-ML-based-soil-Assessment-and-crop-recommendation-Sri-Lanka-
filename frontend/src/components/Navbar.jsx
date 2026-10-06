import { Wifi, User } from "lucide-react";

function Navbar() {
  return (
    <header className="top-navbar">

      <div>
        <h3>Soil Assessment System</h3>
      </div>

      <div className="navbar-right">

        <div className="connection-status">
          <Wifi size={17} />
          <span>Device Online</span>
        </div>

        <div className="user-profile">
          <User size={18} />
          <span>Researcher</span>
        </div>

      </div>

    </header>
  );
}

export default Navbar;