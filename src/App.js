import React, { Component } from 'react'

import Home from './Views/Home/Home'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children || <Home />}
        <Footer />
      </div>
    )
  }
}
export default App
