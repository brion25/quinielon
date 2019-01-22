import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { links } from '../nav'

import AuthView from './components/auth-view'

export default () => (
  <Switch>
    <Route exact path={links.auth.path} component={AuthView}/>
  </Switch>
)
