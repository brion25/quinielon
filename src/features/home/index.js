import React, { Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'

import AppLayout from '../app-layout/components/app-layout'
import HomeView from './components/home-view'

export default () => (
  <Fragment>
    <AppLayout>
      <Switch>
        <Route path="/" component={HomeView}/>
        <Route path="/quiniela/:action" component={HomeView}/>
      </Switch>
    </AppLayout>
  </Fragment>
)
