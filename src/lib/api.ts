import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://172.26.42.131:3333',
})
