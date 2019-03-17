export const AUTH_USER = 'AUTH_USER'
export const LOGOUT_USER = 'LOGOUT_USER'
export const SET_USER = 'SET_USER'
export const SET_QUINIELAS = 'SET_QUINIELAS'

const reducer = (state, action) => {
  switch(action.type) {
    case AUTH_USER:
      return {
        ...state,
        isAnonymous: false,
        token: action.token,
        username: action.username,
      }
    case LOGOUT_USER:
      return {
        isAnonymous: true,
        token: null,
        username: null,
      }
    case SET_USER:
      return {
        ...state,
        user: action.user
      }
    case SET_QUINIELAS:
      return {
        ...state,
        quinielas: action.quinielas
      }
    default:
      return state
  }
}

export default reducer
