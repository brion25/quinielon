import { authUserAPI } from './api'
import { AUTH_USER, LOGOUT_USER } from '../../store/reducer'

export const authUser = dispatch => credentials =>
  authUserAPI(credentials).then(({token}) => {
    dispatch({
      type: AUTH_USER,
      username: credentials.username,
      token,
    })
  })

export const logoutUser = dispatch => () => dispatch({
  type: LOGOUT_USER
})
