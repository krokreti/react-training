import UserItem from "../Item/UserItem"
import styles from './UserList.module.css'

const UserList = props => {
    return (
     <>
        {props.userList.map((user) => (
                <UserItem key={user.id} username={user.username} age={user.age}/>
            ))
        }
     </>   
    )
}

export default UserList