// userStore.js
import { createSlice } from "@reduxjs/toolkit"
import { setToken, getToken } from "@/utils/token" // 引入本地存储的工具
import { requests } from "@/utils/request"

const userStore = createSlice({
  name: "user",
  initialState: {
    token: getToken() || "", // 从 localStorage 获取 token
  },
  reducers: {
    setUserInfo(state, actions) {
      state.token = actions.payload
      console.log("Token saved to Redux:", state.token)

      // 每次更新 token 时同步到 localStorage
      setToken(state.token)
    },
  },
})

const { setUserInfo } = userStore.actions

const userReducer = userStore.reducer

// 异步获取用户信息
const getUserInfo = (loginForm) => {
  return async (dispatch) => {
    const res = await requests.post("/authorizations", loginForm)
    dispatch(setUserInfo(res.data.data.token)) // 保存到 Redux 和 localStorage
  }
}

export { getUserInfo }
export default userReducer
