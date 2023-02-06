import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'
import { CartState } from "../Context";

const Header = () => {
  const { cart } = CartState();

  return (
    <div id='header-container'>
      <ul className='nav'>
        <li>
          <Link to='/'><h1>E-Commerce</h1></Link>
        </li>
        <li>
          <Link to='/cart'><button>
            <i className="fa-solid fa-cart-shopping"></i> {cart.length}
          </button></Link>
        </li>
      </ul>
    </div>
  )
}

export default Header