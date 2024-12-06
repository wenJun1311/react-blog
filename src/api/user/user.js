// 用户相关的所有请求
import { requests } from "@/utils/request"
// 1. 登录请求

export const loginAPI = (formData) =>
  requests({
    url: "/authorizations",
    method: "POST",
    data: formData,
  })

// 2. 获取用户信息

export const getProfileAPI = () =>
  requests({
    url: "/user/profile",
    method: "GET",
  })
