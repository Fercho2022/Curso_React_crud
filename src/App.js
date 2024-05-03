import React, { useState } from "react";
import UserTable from "./components/UserTable";
import { v4 as uuidv4 } from "uuid";
import AddUserForm from "./components/AddUserForm";
import EditUserForm from "./components/EditUserForm";

function App() {
  const usersData = [
    { id: uuidv4(), name: "Tania", username: "flopydiskette" },
    { id: uuidv4(), name: "Craig", username: "siliconeindolon" },
    { id: uuidv4(), name: "Ben", username: "benisphere" },
  ];

  //state
  const [users, setUsers] = useState(usersData);

  const [editing, setEditing] = useState(false);

  const [currentUser, setCurrentUser] = useState({
    id: null,
    name: "",
    username: "",
  });

  //Agregar usuarios
  const addUser = (user) => {
    user.id = uuidv4();
    setUsers([...users, user]);
    console.log(users);
  };

  //Eliminar usuario

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const editRow = (user) => {
    setEditing(true)
    setCurrentUser({
      id: user.id,
      name: user.name,
      username: user.username,
    });
    
  };

  const updateUser=(id, updatedUser)=>{
    setEditing(false);
    setUsers(users.map(user=>(user.id===id ? updatedUser: user)))

  }

  return (
    <div className="container mt-5">
      <h1 className="text-center">CRUD App with Hooks</h1>
      <hr />
      <div className="content-container">
        <div className="form-container">
          {editing ? (
            <div className="form-section">
              <h2>Edit user</h2>
              <EditUserForm 
              currentUser={currentUser} 
              updateUser={updateUser} />
            </div>
          ) : (
            <div className="form-section">
              <h2>Add user</h2>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>
        <div className="table-container">
          <h2>View users</h2>
          <UserTable
            users={users}
            deleteUser={deleteUser}
           
            editRow={editRow}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
