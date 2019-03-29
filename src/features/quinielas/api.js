import fetch from '../../fetch'

export const getUserQuinielasAPI = () => {
  return fetch.get('/quiniela').then(({data}) => data.quinielas || {})
}

export const getValidMatchesAPI = () => {
  return fetch.get('/tournaments/valid').then(({data}) => data.data || {})
}
