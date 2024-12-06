// userSlice.js
import { getProfileAPI, loginAPI } from "@/api/user/user"
import { clearToken, getToken, setToken } from "@/utils/token"
import { createSlice } from "@reduxjs/toolkit"

const userStore = createSlice({
  name: "user",
  initialState: {
    token: getToken() || "",
    userInfo: {},
  },
  reducers: {
    setUserToken(state, action) {
      state.token = action.payload
      setToken(state.token)
    },
    setUserInfo(state, action) {
      state.userInfo = action.payload
    },
    clearUserInfo(state) {
      state.token = ""
      state.userInfo = {}
      clearToken()
    },
  },
})

const { setUserToken, setUserInfo, clearUserInfo } = userStore.actions

const userReducer = userStore.reducer

// 异步获取用户 token
const fetchUserToken = (loginForm) => {
  return async (dispatch) => {
    try {
      const res = await loginAPI(loginForm)
      dispatch(setUserToken(res.data.data.token))
    } catch (error) {
      console.error("登录失败", error)
    }
  }
}

// 异步获取用户信息
const fetchUserInfo = () => {
  return async (dispatch) => {
    try {
      const res = await getProfileAPI()
      dispatch(setUserInfo(res.data.data))
    } catch (error) {
      console.error("获取用户信息失败", error)
    }
  }
}

export { clearUserInfo, fetchUserInfo, fetchUserToken }
export default userReducer
