import { useRef, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../store/auth-context';
import classes from './ProfileForm.module.css';

const ProfileForm = () => {
  const history = useHistory()
  const newPasswordInputRef = useRef();
  const authCtx = useContext(AuthContext)

  const submitHandler = event => {
    event.preventDefault();

    const enteredNewPassword = newPasswordInputRef.current.value;
    console.log(enteredNewPassword)
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
      history.replace('/')
    }).catch(error => {
      alert(error.message)
    })
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password' >New Password</label>
        <input type='password' id='new-password' ref={newPasswordInputRef}/>
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
