import fetch from '../../fetch'

export const authUserAPI = credentials =>
  fetch.post('/auth', credentials).then(({data}) => data)
