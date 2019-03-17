import fetch from '../../fetch'

export const getUserQuinielasAPI = () => {
  return fetch.get('/quiniela').then(({data}) => data.quinielas || {})
}

