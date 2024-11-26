import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>RBAC App</h1>
      </div>
      <ul className="navbar-links">
        <li>
          <a href="#roles">Roles</a>
        </li>
        <li>
          <a href="#permissions">Permissions</a>
        </li>
        <li>
          <a href="#users">Users</a>
        </li>
      </ul>
      <div className="navbar-profile">
        <span className="profile-icon">👤</span>
        <span>Admin</span>
      </div>
    </nav>
  );
};

export default Navbar;
