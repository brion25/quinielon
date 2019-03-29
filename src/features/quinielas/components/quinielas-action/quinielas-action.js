import React from 'react'
import _get from 'lodash/get'
import { Redirect } from 'react-router-dom'

import QuinielasCreate from '../quinielas-create/quinielas-create'

const QuinielasAction = (props) => {
  const action = _get(props, 'match.params.action', '')

  switch (action) {
    case 'see':
      return (
        <Redirect to="/quinielas" />
      )
    case 'create':
      return (
        <QuinielasCreate />
      )
    default:
      return null
  }
}

export default QuinielasAction
