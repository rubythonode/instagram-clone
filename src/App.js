import React, { Component } from 'react'

import './Style/reset.css'
import './Style/common.css'

import Home from './Views/Home/Home'
import FooterComponent from './Components/Footer/Footer'
import HeaderComponent from './Components/Header/Header'

class App extends Component {
  render() {
    return (
      <section className="wrap">
        <HeaderComponent />
        <main className="main">
          <div className="mainWrap">
            {this.props.children || <Home />}
          </div>
        </main>
        <FooterComponent />
      </section>
    )
  }
}
export default App
