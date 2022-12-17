import { useState } from 'react'
import CustomDialog from '../Dialog/CustomDialog'
import Button from '../UI/Button'
import Input from '../UI/Input'
import styles from './Form.module.css'


const Form = props => {
    const [username, setUsername] = useState('');
    const [age, setAge] = useState(null);
    const [isValid, setIsValid] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');

    const usernameInputHandler = event => {
        setUsername(event.target.value)
    }

    const ageInputHandler = event => {
        setAge(event.target.value)
    }

    const onCloseDialog = () => {
        setIsValid(true)
    }

    const addUserHandler = () => {
        if(username.trim().length===0 || age.length === 0) {
            setErrorMessage("Please, fill all the fields!")
            setIsValid(false)
            return;
        } else if (age < 0) {
            setErrorMessage("Please, enter a valid age!")
            setIsValid(false)
            return;
        }

        const newUser = {
            id: Math.random(),
            username: username,
            age: +age
        }
        props.onAddUser(newUser)
    }    

    return (
        <form className={styles.form}>
            <Input type={'text'} title={'Username'}  inputChangeHandler={usernameInputHandler}/>
            <Input type={'number'} title={'Age'}  inputChangeHandler={ageInputHandler}/>
            <Button title={'Add New User'} onClick={addUserHandler}/>
            {!isValid &&
                <CustomDialog >
                    {errorMessage}
                    <Button title={'Fechar'} onClick={onCloseDialog}/>
                </CustomDialog>
            }
        </form>
    )
}

export default Form