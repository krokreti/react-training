import styles from './CustomDialog.module.css'

const CustomDialog = props => {
    return (
        <>
            <div className={styles.background}>
                <div className={styles.dialog}>
                    {props.children}
                </div>
            </div>
        </>
    )
}

export default CustomDialog