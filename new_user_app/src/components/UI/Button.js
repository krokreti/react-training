import styles from './Button.module.css'

const Button = props => {

    return <button type='button' className={styles.button} onClick={props.onClick}> {props.title} </button>

}

export default Button

