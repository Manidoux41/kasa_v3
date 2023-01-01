import React from 'react'
import logo from '../assets/svg/logo-footer.svg';

const Footer = () => {
  return (
    <footer>
        <div className="logo">
            <img src={logo} alt="logo Kasa" />
        </div>
        <div className="copyright">
            <p>&copy; 2023 Kasa. All rights reserved</p>
        </div>
    </footer>
  )
}

export default Footer