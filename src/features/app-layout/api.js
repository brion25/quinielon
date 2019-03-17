import fetch from '../../fetch'

export const getUserInfoAPI = username =>
  fetch.get(`/users/${username}`).then(({data}) => data.user || {})
