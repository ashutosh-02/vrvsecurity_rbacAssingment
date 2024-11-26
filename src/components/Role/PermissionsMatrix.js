import React, { useState, useEffect } from "react";
import "./PermissionsMatrix.css";

const PermissionsMatrix = () => {
  const [roles, setRoles] = useState([
    { id: 1, name: "Admin", permissions: [1, 2] },
    { id: 2, name: "Editor", permissions: [2] },
  ]);
  const [permissions, setPermissions] = useState([
    { id: 1, name: "Read" },
    { id: 2, name: "Write" },
  ]);

  const handlePermissionToggle = (roleId, permissionId) => {
    alert(`Toggling permission ${permissionId} for role ${roleId}`);
  };

  return (
    <div className="permissions-matrix">
      <h2>Permissions Matrix</h2>
      <table>
        <thead>
          <tr>
            <th>Role</th>
            {permissions.map((permission) => (
              <th key={permission.id}>{permission.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role.id}>
              <td>{role.name}</td>
              {permissions.map((permission) => (
                <td key={permission.id}>
                  <input
                    type="checkbox"
                    checked={role.permissions.includes(permission.id)}
                    onChange={() =>
                      handlePermissionToggle(role.id, permission.id)
                    }
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PermissionsMatrix;
