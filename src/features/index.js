import React from 'react'
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom'

import AuthRoute from './auth/components/auth-route'
import AuthView from './auth/components/auth-view'
import Quinielas from './quinielas'
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

          return <Redirect to="/quinielas"/>
        }}/>
        <AuthRoute path="/quinielas" component={Quinielas} />
      </Switch>
    </Router>
  )
}

const mapStateToProps = state => ({
  isAnonymous: state.isAnonymous,
})

export default connect(mapStateToProps)(FeaturesRoutes)
