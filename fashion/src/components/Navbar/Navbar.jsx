import React from 'react'
import './Navbar.css'
import logo from '../assets/images/logo.png'
import cart from '../assets/images/cart.jpg'

const Navbar = () => {
  return (
    <div className='navbar'>
     <div className='nav-logo'>
        <img src={logo} alt=' ' />
        <p>Men Fashion Hub</p>
     </div>
    <ul className='nav-menu'>
        <li>SHOP</li>
        <li>Shirt</li>
        <li>Pent</li>
    </ul>
    <div className='nav-login-cart'>
        <button>Login</button>
        <img src={cart} alt="" />
    </div>
    </div>

  )
}

export default Navbar
