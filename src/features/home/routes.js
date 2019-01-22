import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { links } from '../nav'

import HomeView from './components/home-view'

export default () => (
  <Switch>
    <Route exact path={links.home.path} component={HomeView}/>
  </Switch>
)
