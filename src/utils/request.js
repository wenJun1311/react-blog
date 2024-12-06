import axios from "axios"

const requests = axios.create({
  baseURL: "http://geek.itheima.net/v1_0",
  setTimeout: 5000,
})

requests.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

requests.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

export { requests }
