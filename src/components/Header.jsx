import { useState } from "react"
import { Link } from "react-router-dom";
import logo from '../images/logo.png';

const Header = () => {
  // let btnName = 'Login';
  const [btnName, setBtnName] = useState('Login');
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src= {logo}
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>
              <Link to = '/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About Us</Link>
            </li>
            <li>
              <Link to='/contact'>Contact Us</Link>
            </li>
            <li>
              <img src="https://img.icons8.com/?size=100&id=59997&format=png&color=000000" />
            </li>
            <button className="log-btn " onClick={() => btnName =='Login' ? setBtnName('Logout') : setBtnName('Login')}>{btnName}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header