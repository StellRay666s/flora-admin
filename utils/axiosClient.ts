import axios, { AxiosRequestConfig } from 'axios'

console.log(process.env.BASE_URL)

const axiosClient = axios.create({
  baseURL: "https://flora-api.onrender.com",
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
