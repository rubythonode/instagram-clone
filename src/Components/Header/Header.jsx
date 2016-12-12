import React from 'react'
import { Link } from 'react-router'
import './Header.css'

function Header() {
  return (
    <div className="header">
      <ul role="menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/explore">Explore</Link></li>
        <li><Link to="/myinfo">MyInfo</Link></li>
      </ul>
    </div>
  )
}

export default Header
