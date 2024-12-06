import { requests } from "@/utils/request"

export const loginAPI = (formData) =>
  requests({
    url: "/authorizations",
    method: "POST",
    data: formData,
  })

export const getUserInfo = () =>
  requests({
    url: "/user/profile",
    method: "GET",
  })
