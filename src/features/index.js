import React from 'react'
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom'

import AuthRoute from './auth/components/auth-route'
import AuthView from './auth/components/auth-view'
import Home from './home'
import { connect } from '../store/provider'

const FeaturesRoutes = ({isAnonymous}) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => {
          if (isAnonymous) {
            return (
              <AuthView/>
            )
          }

          return <Redirect to="/home"/>
        }}/>
        <AuthRoute component={Home} />
      </Switch>
    </Router>
  )
}

const mapStateToProps = state => ({
  isAnonymous: state.isAnonymous,
})

export default connect(mapStateToProps)(FeaturesRoutes)
