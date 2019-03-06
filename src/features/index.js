import React from 'react'
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom'

import AuthView from './auth/components/auth-view'
import Home from './home'
import { StateContext } from '../store/provider'

const FeaturesRoutes = () => {
  const { state } = React.useContext(StateContext)
  console.log(state)

  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => {
          if (state.isAnonymous) {
            return (
              <AuthView/>
            )
          }

          return <Redirect to="/home"/>
        }}/>
        <Route path="/home" component={Home} />
      </Switch>
    </Router>
  )
}

export default FeaturesRoutes
