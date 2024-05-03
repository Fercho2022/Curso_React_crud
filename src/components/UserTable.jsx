import React from "react";
import './UserTable.css'


const UserTable = ({users, deleteUser, editRow}) => {
  
  return (
    <table className="table">
      <thead>
        <tr>
          <th className="text-center">Name</th>
          <th className="text-center">Username</th>
          <th className="text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.length > 0 ? (
          users.map((user) => (
            <tr key={user.id}>
              <td className="text-center">{user.name}</td>
              <td className="text-center">{user.username}</td>
              <td className="text-center">
              <button className="btn btn-sm transparent-button mr-2" onClick={() => editRow(user)}>Edit</button>
             <button className="btn btn-sm transparent-button" onClick={() => deleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>No users</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default UserTable;
