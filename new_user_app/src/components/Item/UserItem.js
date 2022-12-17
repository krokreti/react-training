import styles from './UserItem.module.css'

const UserItem = props => {
    return (
        <p className={styles.userItem}> {`${props.username} (${props.age} years old)`} </p>
    )
}

export default UserItem