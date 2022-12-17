import Card from "./components/UI/Card";
import styles from './App.module.css'
import Form from "./components/Form/Form";
import UserList from "./components/Lists/UserList";
import { useState } from "react";

function App() {
  const [userList, setUserList] = useState([
    {
      id: Math.random(),
      username: 'Davi',
      age: 29
    },
    {
      id: Math.random(),
      username: 'Helen',
      age: 28
    }
  ])

   const addNewUserHandler = newUser => {
      setUserList(prevUsers => {
        return [newUser, ...prevUsers]
      })
   }

   const deleteUserHandler = id => {
     setUserList(prevUsers => {
      const filteredList = prevUsers.filter( user => ( user.id !== id))
      return filteredList;
    })
   }


  return (
    <div className={styles.app}>
      <Card>
        <Form onAddUser={addNewUserHandler} />
      </Card>
      <Card>
        <UserList userList={userList} onDeleteItem={deleteUserHandler} />
      </Card>
    </div>
  );
}

export default App;
