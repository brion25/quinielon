import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { connect } from '../../../store/provider'

const AuthRoute = ({isAnonymous, component: Component}) => {
  return (
    <Route render={() => {
      if (isAnonymous) {
        return (
          <Redirect to="/"/>
        )
      }

      return (
        <Component/>
      )
    }}/>
  )
}

const mapStateToProps = state => ({
  isAnonymous: state.isAnonymous
})

export default connect(mapStateToProps)(AuthRoute)
