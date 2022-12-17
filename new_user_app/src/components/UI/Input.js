import styles from './Input.module.css';

const Input = props => {
    return (
    <div className={styles.container}>
        <label>{props.title}</label>
        <input 
            className={styles.input}
            type={props.type} 
            value={props.value}
            onChange={props.inputChangeHandler}
        />
    </div>
    )
}

export default Input