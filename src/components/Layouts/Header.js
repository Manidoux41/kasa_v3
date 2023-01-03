import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../../assets/svg/logo.svg';
const Header = () => {

      //assigning location variable
      const location = useLocation();

      //destructuring pathname from location
      const { pathname } = location;
  
      //Javascript split method to get the name of the path in array
      const splitLocation = pathname.split("/");

  return (
    <header className='wrapper'>
        <NavLink to="/" className="logo">
            <img src={logo} alt="logo de Kasa" />
        </NavLink>
        <nav>
            <ul>
                <li className={splitLocation[1] === "home"  || splitLocation[1] === "" ? "active" : ""}>
                    <Link to="/home" >Accueil</Link>
                </li>
                <li className={splitLocation[1] === "about" ? "active" : ""}>
                    <Link to="/about" >A Propos</Link>
                </li>                
            </ul>
        </nav>
    </header>
  )
}

export default Header