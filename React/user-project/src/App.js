import './App.css';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';
import React, {useState, Fragment} from 'react';

function App() {

  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
      setUsersList((prevUsersList)=>{
        return [...prevUsersList, {name: uName, age: uAge, id:Math.random().toString()}];
      });
  };

  return (
    <React.Fragment>

      <AddUser onAddUser={addUserHandler}></AddUser>
      <UsersList users={usersList}></UsersList>

    </React.Fragment>
  );
}

export default App;
