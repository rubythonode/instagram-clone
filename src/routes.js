import React, { Component } from 'react'
import { Route, Router, browserHistory, IndexRoute } from 'react-router'

import App from './App'
import Home from './Views/Home/Home'
import Explore from './Views/Explore/Explore'
import MyInfo from './Views/MyInfo/MyInfo'

class Routes extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App} >
          <IndexRoute component={Home} />
          <Route path="/explore" component={Explore} />
          <Route path="/myinfo" component={MyInfo} />
        </Route>
      </Router>
    )
  }
}
export default Routes
