import { getUserQuinielasAPI } from './api'

import { SET_QUINIELAS } from '../../store/reducer'

export const getUserQuinielas = (dispatch) => () => {
  return getUserQuinielasAPI().then(quinielas => {
    dispatch({
      type: SET_QUINIELAS,
      quinielas: Object.keys(quinielas).map(id => ({...quinielas[id], id}))
    })
  })
}
