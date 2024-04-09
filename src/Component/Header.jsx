import React from 'react'
import { Link } from 'react-router-dom'
import useOnlineStatus from './useOnlineStatus'
import {useSelector } from 'react-redux'
const Header = () => {
  const cartItem=useSelector((store)=>store.cart.items)
  console.log(cartItem)
  const sts=useOnlineStatus();
  return (
    <div>
      <div className="nav">
        <img className="img" src="https://files.yappe.in/place/full/food-villa-family-restaurant-hotel-4642683.webp" alt="" height={'100px'} width={'100px'} />
        <div className='navCon'>
          <span>OnlineStatus {sts?(<span>✅</span> ):(<span>🔴</span>)} </span>
          <Link to={'/'}><span>Home</span></Link>
          <Link to={'/about'}><span>About</span></Link>
          <Link to={'/contact'}><span>Contact</span></Link>
          <Link to={'./grocery'}><span>Grocery</span></Link>
          <Link to={'./cart'}><span>Cart- {cartItem.length}</span></Link>
        </div>
      </div>
    </div>
  )
}

export default Header