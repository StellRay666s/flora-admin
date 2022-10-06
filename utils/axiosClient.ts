import axios, { AxiosRequestConfig } from 'axios'

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_KEY,
  timeout: 99999,
})

axiosClient.interceptors.request.use((config: AxiosRequestConfig) => {
  const accessToken = window.localStorage.getItem('accessToken')

  if (config.headers) {
    config.headers.Authorization = accessToken
  }
  return config
})

export { axiosClient }
