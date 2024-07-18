import { useRef } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { login } from '../actions/index';
import classes from './Login.module.css';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const usernameRef = useRef();
  const passwordRef = useRef();

  const handleClick = () => {
    const userValue = usernameRef.current.value;
    const passwordValue = passwordRef.current.value;
    const logindata = { user: userValue, password: passwordValue };

    axios.post(`https://reqres.in/api/login/${logindata}`)
      .then(() => {
        localStorage.setItem('USER_LOGGED_IN_STATUS', true);
        dispatch(login());
        navigate('/', { replace: true });
      })
      .catch(err => console.log(err));
  };

  return (
    <div className={classes.MainContainer}>
      <h1>Login</h1>
      <br />
      <h5>Enter username</h5>
      <input ref={usernameRef} type='text' />
      <br />
      <br />
      <h5>Enter password</h5>
      <input ref={passwordRef} type='password' />
      <br />
      <br />
      <button className={classes.LoginButton} onClick={handleClick}>Login</button>
    </div>
  );
};

export default Login;
