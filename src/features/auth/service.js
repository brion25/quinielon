import fetch from '../../fetch'

export const authUser = (credentials) =>
  fetch.post('/auth', credentials).then(({data}) => data)
