import axios from 'axios'

import * as config from './config'

const instance = axios.create({
  baseURL: config.SERVER_HOST,
  timeout: 5000,
})

export default instance
