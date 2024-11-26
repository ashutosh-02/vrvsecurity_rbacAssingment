import React, { useState } from "react";
import "./RoleForm.css";

const RoleForm = ({ existingRole, onSave }) => {
  const [name, setName] = useState(existingRole?.name || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${existingRole ? "Updating" : "Adding"} role: ${name}`);
    onSave({ name });
    setName("");
  };

  return (
    <form className="role-form" onSubmit={handleSubmit}>
      <h2>{existingRole ? "Edit Role" : "Add Role"}</h2>
      <div className="form-group">
        <label htmlFor="roleName">Role Name:</label>
        <input
          id="roleName"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter role name"
          required
        />
      </div>
      <button type="submit">{existingRole ? "Update Role" : "Add Role"}</button>
    </form>
  );
};

export default RoleForm;
