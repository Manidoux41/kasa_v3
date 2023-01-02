import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/svg/logo.svg';
const Header = () => {
  return (
    <header className='wrapper'>
        <NavLink to="/" className="logo">
            <img src={logo} alt="logo de Kasa" />
        </NavLink>
        <nav>
            <ul>
                <li>
                    <Link to="/home">Accueil</Link>
                </li>
                <li>
                    <Link to="/about">A Propos</Link>
                </li>                
            </ul>
        </nav>
    </header>
  )
}

export default Header