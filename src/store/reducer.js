export const AUTH_USER = 'AUTH_USER'

const reducer = (state, action) => {
  switch(action.type) {
    case AUTH_USER:
      return {
        ...state,
        isAnonymous: false,
        token: action.token
      }
    default:
      return state
  }
}

export default reducer
