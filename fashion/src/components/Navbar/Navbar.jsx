import React, { useState } from 'react'
import './Navbar.css'
import logo from '../assets/images/logo.png'
import cart from '../assets/images/cart.jpg'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [menu,setmenu] = useState("Home")
  return (
    <div className='navbar'>
     <div className='nav-logo'>
        <img src={logo} alt=' ' />
        <p>Men Fashion Hub</p>
     </div>
    <ul className='nav-menu'>
        <li onClick={()=>{setmenu("Home")}}><Link to='/'>Home</Link>{menu==="Home"?<hr/>:<></>}</li>
        <li onClick={()=>{setmenu("Shirts")}}><Link to='/Shirt'>Shirt</Link>{menu==="Shirt"?<hr/>:<></>}</li>
        <li onClick={()=>{setmenu("Pents")}}><Link to='/pent'>pent</Link>{menu==="Pent"?<hr/>:<></>}</li>
    </ul>
    <div className='nav-login-cart'>
        <Link to='/logit'><button>Login</button></Link>
        <Link to='/cart'><img src={cart} alt="" /></Link>
        <div className="nav-cart-count">0</div>
    </div>
    </div>

  )
}

export default Navbar
