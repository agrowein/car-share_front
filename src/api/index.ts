import axios from 'axios'
import cookie from "../utils/cookieWorker";

const api = axios.create({
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    Accept: 'application/json',
  },
})

api.interceptors.request.use((config) => {
  const token = cookie.get('token')
  if (config.headers) {
    config.headers.Authorization = token ? `Bearer ${token}` : ''
  }
  return config
})

export const getCars = () => {return Promise.resolve([{
  id: '0',
  brand: 'Лада',
  model: 'Приора',
  year: 2019,
  type: 'седан',
  color: 'баклажан',
  stateNumber: 'a000aa99rus'
}])}