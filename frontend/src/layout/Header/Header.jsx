import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'
import { FaFacebookF , FaTwitter , FaEquals } from 'react-icons/fa';

function Header() {
  return (
    <>
    <div className="header">
        <img src="https://preview.colorlib.com/theme/pato/images/icons/logo.png.webp" alt="logo" />
        <ul>
          <li>
            <Link to="">Home</Link>
          </li>
          <li>
            <Link to="add">Add</Link>
          </li>
          <li>
            <Link to="wishlist">Wishlist</Link>
          </li>
        </ul>

        <div className="header__icons">
            <FaFacebookF />
            <FaTwitter />
            <FaEquals />
        </div>
    </div>
    </>
  )
}

export default Header