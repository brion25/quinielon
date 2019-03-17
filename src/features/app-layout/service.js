import { getUserInfoAPI } from './api'

import { SET_USER } from '../../store/reducer'

export const getUserInfo = (dispatch, getState) => () => {
  const { username } = getState()

  return getUserInfoAPI(username).then(user => {
    dispatch({
      type: SET_USER,
      user
    })

    return user
  })
}
