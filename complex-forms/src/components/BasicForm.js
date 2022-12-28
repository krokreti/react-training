import { useEffect, useState } from "react";
import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);

  const {
    value: enteredFirstName,
    hasError: firstNameHasError,
    isValid: firstNameInputIsValid,
    valueBlurHandler: inputFirstNameBlurHandler,
    valueChangeHandler: inputFirstNameChangeHandler,
    reset: firstNameReset,
  } = useInput(value => value.trim() !== '');

  const {
    value: enteredLastName,
    hasError: lastNameHasError,
    isValid: lastNameInputIsValid,
    valueBlurHandler: inputLastNameBlurHandler,
    valueChangeHandler: inputLastNameChangeHandler,
    reset: lastNameReset,
  } = useInput(value => value.trim() !== '');

  const {
    value: enteredEmail,
    hasError: emailHasError,
    isValid: emailInputIsValid,
    valueBlurHandler: inputEmailBlurHandler,
    valueChangeHandler: inputEmailChangeHandler,
    reset: emailReset,
  } = useInput(value => value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/));

  useEffect(() => {
    if(firstNameInputIsValid && lastNameInputIsValid && emailInputIsValid) {
      setFormIsValid(true)
    } else {
      setFormIsValid(false)
    }
  },[firstNameInputIsValid, lastNameInputIsValid, emailInputIsValid])

  const submitFormHandler = event => {
    event.preventDefault();
    
    if(!firstNameInputIsValid || !lastNameInputIsValid || !emailInputIsValid) {
      return;
    }
    
    firstNameReset();
    lastNameReset();
    emailReset();
  }

  const firstNameClasses = firstNameHasError ? 'form-control invalid' : 'form-control'
  const lastNameClasses = lastNameHasError ? 'form-control invalid' : 'form-control'
  const emailClasses = emailHasError ? 'form-control invalid' : 'form-control'

  return (
    <form onSubmit={submitFormHandler}>
      <div className='control-group'>
        <div className={firstNameClasses}>
          <label htmlFor='name'>First Name</label>
          <input 
            type='text' 
            id='name' 
            onChange={inputFirstNameChangeHandler}
            onBlur={inputFirstNameBlurHandler}
            value={enteredFirstName}
          />
          {firstNameHasError && (
            <p className="error-text">First name must be not empty.</p>
          )}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor='name'>Last Name</label>
          <input 
            type='text' 
            id='lastName' 
            onChange={inputLastNameChangeHandler}
            onBlur={inputLastNameBlurHandler}
            value={enteredLastName}
          />
          {lastNameHasError && (
            <p className="error-text">Last name must be not empty.</p>
          )}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input 
          type='email' 
          id='email' 
          onChange={inputEmailChangeHandler}
          onBlur={inputEmailBlurHandler}
          value={enteredEmail}
        />
        {emailHasError && (
          <p className="error-text">Email must be valid.</p>
        )}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid} >Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
