import React, { Component } from 'react'
import { Link } from 'react-router'

import Home from '../Home/Home'

class App extends Component {
  render() {
    return (
      <div>
        <h1>React Router Tutorial</h1>
        <ul role="menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>

        {this.props.children || <Home />}
      </div>
    )
  }
}
export default App
