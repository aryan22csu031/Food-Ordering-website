import { useState } from "react"
import { Link } from "react-router-dom";
import logo from '../images/logo.png';
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  // let btnName = 'Login';
  const [btnName, setBtnName] = useState('Login');
  const onlineStatus = useOnlineStatus();
    return (
      <div className="flex justify-between w-full shadow-lg">
        <div className="w-[12rem]">
          <img
            className="logo"
            src= {logo}
          />
        </div>
        <div className="nav-items flex items-center">
          <ul className="flex justify-center content-center gap-[2rem] p-4 font-semibold">
            <li>
              Online Status: {
                onlineStatus ? "🟢" : "🔴"
              }
            </li>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to="/grocery">Grocery</Link>
            </li>
            <li>
              <Link to='/about'>About Us</Link>
            </li>
            <li>
              <Link to='/contact'>Contact Us</Link>
            </li>
            <li>
              <img src="https://img.icons8.com/?size=100&id=59997&format=png&color=000000" className="w-[1.4rem]" />
            </li>
            <button className="log-btn " onClick={() => btnName =='Login' ? setBtnName('Logout') : setBtnName('Login')}>{btnName}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header