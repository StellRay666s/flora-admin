import axios, { AxiosRequestConfig } from 'axios'

console.log(process.env.BASE_URL)

const axiosClient = axios.create({
  baseURL: process.env.NUXT_ENV_COOL_WORD,
  timeout: 9999999999,
})

axiosClient.interceptors.request.use((config: AxiosRequestConfig) => {
  const accessToken = window.localStorage.getItem('accessToken')
  if (config.headers) {
    config.headers.Authorization = accessToken
  }
  return config
})

export { axiosClient }
