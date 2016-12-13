import React from 'react'
import { Link } from 'react-router'
import './header.css'

import Search from '../Search/Search'

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <div className="menu" role="menu">
          <div className="menu-flex-01 home"><Link to="/" className="commonbg notext">Instagram</Link></div>
          <div className="menu-flex-02"><Search /></div>
          <div className="menu-flex-03">
            <div className="ohters">
              <div className="ohters-link-01">
                <Link to="/explore" className="commonbg notext">Explore</Link>
              </div>
              <div className="ohters-link-02">
                <Link to="/myinfo" className="commonbg notext">MyInfo</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
