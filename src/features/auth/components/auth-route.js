import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { connect } from '../../../store/provider'

const AuthRoute = ({isAnonymous, component: Component, path, exact}) => {
  return (
    <Route exact={exact} path={path} render={(routeProps) => {
      if (isAnonymous) {
        return (
          <Redirect to="/"/>
        )
      }

      return (
        <Component {...routeProps}/>
      )
    }}/>
  )
}

const mapStateToProps = state => ({
  isAnonymous: state.isAnonymous
})

export default connect(mapStateToProps)(AuthRoute)
