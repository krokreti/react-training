import React, { useState, useEffect, useReducer, useContext } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/auth-context';

const emailReducer = (state, action) => {
  if(action.type === 'USER_INPUT') {
    return {value: action.val, isValid: action.val.includes('@') }
  } 
  if (action.type === 'INPUT_BLUR') {
    return {value: state.value, isValid: state.value.includes('@') }
  }
  return {value: '', isValid: false}
}

const passwordReducer = (state, action) => {
  if(action.type === 'PASSWORD_INPUT') {
    return {value: action.val, isValid: action.val.trim().length > 6}
  } else if (action.type === 'PASSWORD_BLUR') {
    return { value: state.value, isValid: state.value.trim().length > 6}
  }
  return {value: '', isValid: false}
}

const Login = () => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  // useEffect(() => {}) assim, ele é executado toda hora que algum estado for modificado
  // useEffect(() => {}, []) assim ele é executado uma vez só qunado o app é montado na primeira vez
  // useEffect(() => {} , [enteredPassword]) vai executar so quando essa variavel sofrer alteraçoes

  //useReducer é usado quando um state depende de outro state

  const [emailState, dispatchEmail] = useReducer(
    emailReducer,
    {value: '', isValid: null}
    );

  const [passwordState, dispatchPassword] = useReducer( 
    passwordReducer, 
    {value: '', isValid: null}
    );

    const authCtx = useContext(AuthContext)

  useEffect(()=>{
    //usa esse timeout pra nao fazer inumeros acesso a um fetch api
    const identifier = setTimeout(() => {
      setFormIsValid(
        emailState.value.includes('@') && passwordState.value.trim().length > 6
        );
      }, 500);

      return () => {
        console.log('Cleanup')
        clearTimeout(identifier)
      }
  }, [emailState, passwordState]);

  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);
    dispatchEmail({type: 'USER_INPUT', val: event.target.value});
  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);
    dispatchPassword({type: 'PASSWORD_INPUT', val: event.target.value});

    // setFormIsValid(
    //   emailState.isValid && event.target.trim().length > 6
    // )
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(emailState.isValid);
    dispatchEmail({type: 'INPUT_BLUR'})
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(enteredPassword.trim().length > 6);
    dispatchPassword({type: 'PASSWORD_BLUR'})
  };

  const submitHandler = (event) => {
    event.preventDefault();
    authCtx.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>

          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
