import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../actions/index';
import classes from './Navbar.module.css';
import { useState } from 'react';
import Icon from '../assets/search.svg';

const Navbar = () => {
  const isUserLoggedIn = useSelector(state => state.isUserLoggedIn);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleLogout = () => {
    localStorage.removeItem('USER_LOGGED_IN_STATUS');
    dispatch(logout());
  };

  const handleSearch = () => {
    if (inputValue.trim() !== '') {
      navigate(`/search?query=${encodeURIComponent(inputValue)}`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <header className={classes.MainContainer}>
      <nav className={classes.MenuWrapper}>
        <div>
          <Link className={classes.MenuItem} to='/'>Home</Link>
          {
            isUserLoggedIn ?
              <Link className={classes.MenuItem} onClick={handleLogout}>Logout</Link>
              :
              <Link className={classes.MenuItem} to='/login'>Login</Link>
          }
        </div>
        <div>
          <img className={classes.search} src={Icon} onClick={handleSearch} alt='' />
          <input type="search" name="search-form" placeholder="Search" value={inputValue} onChange={handleChange}  onKeyPress={handleKeyPress} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
