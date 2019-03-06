import React, { Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'

import HomeView from './components/home-view'

export default () => (
  <Fragment>
    <main>
      <Switch>
        <Route path="/" component={HomeView}/>
      </Switch>
    </main>
  </Fragment>
)
