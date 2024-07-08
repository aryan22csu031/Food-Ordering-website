import { useContext, useState } from "react"
import { Link } from "react-router-dom";
import logo from '../images/logo.png';
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  // let btnName = 'Login';
  const [btnName, setBtnName] = useState('Login');
  const onlineStatus = useOnlineStatus();
  const data = useContext(UserContext);
  const cartItems = useSelector((store)=> store.cart.items);
    return (
      <div className="flex justify-between w-full shadow-lg">
        <div className="w-[12rem]">
          <img
            className="logo"
            src= {logo}
          />
        </div>
        <div className="nav-items flex items-center">
          <ul className="flex items-center gap-10 p-4 font-semibold">
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
            <div className="flex">
              <Link to='/cart'> 
              <img src="https://img.icons8.com/?size=100&id=59997&format=png&color=000000" className="w-[1.4rem]" />
              </Link>
              <h5 className="font-mono">({cartItems.length})</h5>
              </div>
            </li>
            <button className="log-btn " onClick={() => btnName =='Login' ? setBtnName('Logout') : setBtnName('Login')}>{btnName}</button>
            <li className="font-bold">
              {data.loggedInUser}
            </li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header