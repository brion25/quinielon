import React from 'react'

import reducer from './reducer'

export const StateContext = React.createContext({})

export const ContextConsumer = StateContext.Consumer


const getInitialState = () => {
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

export const Provider = ({children}) => {
  const [ state, dispatch ] = React.useReducer(reducer, getInitialState())

  return (
    <StateContext.Provider value={{state, dispatch}}>
      {children}
    </StateContext.Provider>
  )
}
