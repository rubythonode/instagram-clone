import React, { Component } from 'react'
import { Route, Router, browserHistory, IndexRoute } from 'react-router'

import App from './App/App'
import Home from './Home/Home'
import About from './About/About'

class Routes extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App} >
          <IndexRoute component={Home} />
          <Route path="/about" component={About} />
        </Route>
      </Router>
    )
  }
}
export default Routes
