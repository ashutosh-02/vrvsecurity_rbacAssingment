import React from "react";
import "./RoleList.css";

const RoleList = ({ onEdit }) => {
  const roles = [
    { id: 1, name: "Admin" },
    { id: 2, name: "Editor" },
  ];

  return (
    <div className="role-list">
      <h2>Roles</h2>
      <ul>
        {roles.map((role) => (
          <li key={role.id}>
            {role.name}
            <div className="role-actions">
              <button onClick={() => onEdit(role)}>Edit</button>
              <button className="delete-btn">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RoleList;
