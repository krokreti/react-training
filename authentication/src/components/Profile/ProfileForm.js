import { useRef, useContext } from 'react';
import AuthContext from '../store/auth-context';
import classes from './ProfileForm.module.css';

const ProfileForm = () => {
  const newPasswordInputRef = useRef();
  const authCtx = useContext(AuthContext)

  const submitHandler = event => {
    event.preventDefault();

    const enteredNewPassword = newPasswordInputRef.current.value;

    //validation

    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDYL8MXKHBY8-munFeQbKZd43SbAZneRR4', 
    {
      method: 'POST',
      body: JSON.stringify({
        idToken: authCtx.token,
        password: enteredNewPassword,
        returnSecureToken: false,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      //needs validation
      //redirect
      console.log(response)
    }).catch(error => {
      alert(error.message)
    })
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password' ref={newPasswordInputRef}>New Password</label>
        <input type='password' id='new-password' />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
