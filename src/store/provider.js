import React from 'react'
import _isFunction from 'lodash/isFunction'
import _mapValues from 'lodash/mapValues'
import _pick from 'lodash/pick'

import reducer from './reducer'

export const StateContext = React.createContext({})

export const getInitialState = () => {
  let storageState = {}

  try {
    storageState = JSON.parse(window.localStorage.getItem('state') || '')
  } catch(e) {
    storageState = {
      isAnonymous: true
    }
  }

  return storageState
}

const storeState = state => {
  window.localStorage.setItem('state', JSON.stringify(_pick(state, ['isAnonymous', 'token', 'username'])))
}

export const Provider = ({children}) => {
  const [ state, dispatch ] = React.useReducer(reducer, getInitialState())
  React.useEffect(() => storeState(state))

  return (
    <StateContext.Provider value={{state, dispatch}}>
      {children}
    </StateContext.Provider>
  )
}

export const connect = (mapStateToProps, mapDispatchToProps) => Component => {
  return props => {
    const { state, dispatch } = React.useContext(StateContext)

    let dispatchToProps = {}
    let stateToProps = {}

    if (_isFunction(mapDispatchToProps)) {
      dispatchToProps = mapDispatchToProps(dispatch)
    } else {
      dispatchToProps = _mapValues(mapDispatchToProps, action => action(dispatch, () => state))
    }

    if (_isFunction(mapStateToProps)) {
      stateToProps = mapStateToProps(state)
    }

    return (
      <Component
        {...stateToProps}
        {...dispatchToProps}
        {...props}
      />
    )
  }
}
