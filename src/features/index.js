import React, { Fragment } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { Navigation } from './nav'
import { routes as Auth } from './auth'
import { routes as Home } from './home'

export default () => (
  <Router>
    <Fragment>
      <Navigation />
      <Auth />
      <Home />
    </Fragment>
  </Router>
)
