import Button from '../UI/Button'
import styles from './UserItem.module.css'


const UserItem = props => {

    const onDeleteItemHandler = () => {
        props.onClickDelete(props.id)
    }

    return (
        <div className={styles.userItem}>
            <p > {`${props.username} (${props.age} years old)`} </p>
            <div>
                <Button title={'X'} onClick={onDeleteItemHandler}/>
            </div>
        </div>
    )
}

export default UserItem