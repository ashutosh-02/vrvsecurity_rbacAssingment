import React, { useState } from "react";
import RoleList from "./components/Role/RoleList";
import RoleForm from "./components/Role/RoleForm";
import PermissionsMatrix from "./components/Role/PermissionsMatrix";
import Navbar from "./components/layout/Navbar";
import "./App.css"; // Import the CSS file for App

const App = () => {
  const [selectedRole, setSelectedRole] = useState(null);

  const handleEditRole = (role) => {
    setSelectedRole(role);
  };

  const handleSaveRole = () => {
    setSelectedRole(null); // Clear form after save
  };

  return (
    <div className="app">
      <Navbar />
      <div className="app-content">
        <RoleList onEdit={handleEditRole} />
        <RoleForm existingRole={selectedRole} onSave={handleSaveRole} />
        <PermissionsMatrix />
      </div>
    </div>
  );
};

export default App;
