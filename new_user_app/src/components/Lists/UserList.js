import UserItem from "../Item/UserItem"

const UserList = props => {

    const deleteHandler = id => {
        props.onDeleteItem(id)
    }

    return (
     <>
        {props.userList.map((user) => (
                <UserItem key={user.id} username={user.username} age={user.age} id={user.id} onClickDelete={deleteHandler}/>
            ))
        }
     </>   
    )
}

export default UserList