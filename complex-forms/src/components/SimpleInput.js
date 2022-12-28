import { useEffect, useState } from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);

  const { 
    value: enteredAge, 
    isValid: enteredAgeIsValid,
    hasError: ageInputHasError,
    valueChangeHandler: ageChangedHandler,
    valueBlurHandler: ageBlurHandler,
    reset: resetAgeInput
  } = useInput(value => value.trim() !== '');

  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false)
  
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false)
  
  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
  
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const enteredEmailIsValid = enteredEmail.match(validRegex);
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;
  

  useEffect(() => {
    if(enteredNameIsValid && enteredEmailIsValid && enteredAgeIsValid) {
      setFormIsValid(true)
    } else {
      setFormIsValid(false)
    }
  }, [enteredNameIsValid, enteredEmailIsValid]) //se tivesse mais inputs para validar, era pra colocar aqui!!

  // outra possibilidade sem usar useEffect (para economizar renderizaçoes)
  /* 
  let formIsValid = false;
  if(enteredNameIsValid) {
    formIsValid = true;
  } else {
    formIsValid = false;
  }
  */

  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);
  }

  const nameInputBlutHandler = event => {
    setEnteredNameTouched(true);
  }

  const emailInputChangeHandler = event => {
    setEnteredEmail(event.target.value)
  }

  const emailInputBlutHandler = event => {
    setEnteredEmailTouched(true);
  }

  const formSubmissionHandler = event => {
    event.preventDefault();

    setEnteredNameTouched(true);

    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }

    setEnteredName('')
    setEnteredEmail('')
    setEnteredNameTouched(false)
    setEnteredEmailTouched(false)
    resetAgeInput()
  };

  const nameInputClasses = !nameInputIsInvalid ? 'form-control' : 'form-control invalid';
  const emailInputClasses = !emailInputIsInvalid ? 'form-control' : 'form-control invalid';
  const agelInputClasses = !ageInputHasError ? 'form-control' : 'form-control invalid';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
          type='text' 
          id='name' 
          onChange={nameInputChangeHandler} 
          onBlur={nameInputBlutHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your Email</label>
        <input 
          type='email' 
          id='email' 
          onChange={emailInputChangeHandler} 
          onBlur={emailInputBlutHandler}
          value={enteredEmail}
        />
        {emailInputIsInvalid && (
          <p className="error-text">Please enter a valid email!</p>
        )}
      </div>
      <div className={agelInputClasses}>
        <label htmlFor='email'>Your Age</label>
        <input 
          type='text' 
          id='age' 
          onChange={ageChangedHandler} 
          onBlur={ageBlurHandler}
          value={enteredAge}
        />
        {ageInputHasError && (
          <p className="error-text">Age must not be empty!</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
