import axios from 'axios'

import * as config from './config'
import { getInitialState } from './store/provider'

const instance = axios.create({
  baseURL: config.SERVER_HOST,
  timeout: 10000,
})

instance.interceptors.request.use(config => {
  const { token } = getInitialState()

  if (token) {
    config.headers.Authorization = `Basic ${token}`
  }

  return config
})


export default instance
