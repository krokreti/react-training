import { useEffect, useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false)
  const [formIsValid, setFormIsValid] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  useEffect(() => {
    if(enteredNameIsValid) {
      setFormIsValid(true)
    } else {
      setFormIsValid(false)
    }
  }, [enteredNameIsValid]) //se tivesse mais inputs para validar, era pra colocar aqui!!

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
    // if (enteredName.trim() === '') {
    //   setEnteredNameIsValid(false);
    // }
    setEnteredNameTouched(true);
  }

  const formSubmissionHandler = event => {
    event.preventDefault();

    setEnteredNameTouched(true);

    if (!enteredNameIsValid) {
      return;
    }

    setEnteredName('')
    setEnteredNameTouched(false)
  };

  const nameInputClasses = !nameInputIsInvalid ? 'form-control' : 'form-control invalid';

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
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
