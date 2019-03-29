import React from 'react'
import { Switch, Route } from 'react-router-dom'

import AppLayout from '../app-layout/components/app-layout'
import QuinielasView from './components/quinielas-view/quinielas-view'
import QuinielasAction from './components/quinielas-action/quinielas-action'
import * as urls from './urls'

export default () => {
  return (
    <AppLayout>
      <Switch>
        <Route exact path={urls.home} component={QuinielasView}/>
        <Route path={urls.action(':action')} component={QuinielasAction}/>
      </Switch>
    </AppLayout>
  )
}
