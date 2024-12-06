import { createSlice } from "@reduxjs/toolkit"
import { setToken, getToken, clearToken } from "@/utils/token"
import { requests } from "@/utils/request"

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

// 异步获取用户信息
const getUserToken = (loginForm) => {
  return async (dispatch) => {
    const res = await requests.post("/authorizations", loginForm)
    dispatch(setUserToken(res.data.data.token)) // 保存到 Redux 和 localStorage
  }
}

const getUserInfo = () => {
  return async (dispatch) => {
    const res = await requests.get("/user/profile")
    dispatch(setUserInfo(res.data.data))
  }
}

export { getUserToken, getUserInfo, clearUserInfo }
export default userReducer
