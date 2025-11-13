import React from 'react'
import './Navbar.css'
import logo from '../Assets/images/logo.jpg'
import cart from'../Assets/images/cart.jpg'
import { Link } from 'react-router-dom'

const Navbar = ()  => {
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt="" />
            <p>Men Fashion</p>
        </div>
        <ul className='nav-menu'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shirt">Shirt</Link></li>
            <li><Link to="/pent">Pent</Link></li>

        </ul>
        <div className='nav-login-cart'>
            <button>Login</button>
            <img src={cart} alt="" />
        </div>
    </div>
  )
}



export default Navbar