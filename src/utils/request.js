import axios from "axios"
import { getToken } from "./token"
import { useNavigate } from "react-router-dom"

const requests = axios.create({
  baseURL: "http://geek.itheima.net/v1_0",
  timeout: 5000,
})

requests.interceptors.request.use(
  (config) => {
    const token = getToken()
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

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
    console.dir(error)
    if (error.response && error.response.status === 401) {
      clearToken()
      const navigate = useNavigate()
      navigate("/login")
      window.location.reload()
    }
    return Promise.reject(error)
  }
)

export { requests }
