// requests.js
import axios from "axios"
import { getToken } from "./token" // 引入 token 工具函数

const requests = axios.create({
  baseURL: "http://geek.itheima.net/v1_0",
  timeout: 5000,
})

requests.interceptors.request.use(
  (config) => {
    const token = getToken() // 获取 token

    if (token) {
      config.headers.Authorization = `Bearer ${token}` // 设置 Authorization 头
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
    if (error.response.status === 401) {
      clearToken()
      router.navigate("/login")
      window.location.reload()
    }
    return Promise.reject(error)
  }
)

export { requests }
