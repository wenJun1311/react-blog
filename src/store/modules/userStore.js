import { createSlice } from "@reduxjs/toolkit"
import { requests } from "@/utils/request"

const userStore = createSlice({
  name: "user",
  initialState: {
    token: "",
  },
  reducers: {
    setUserInfo(state, actions) {
      state.token = actions.payload
    },
  },
})

const { setUserInfo } = userStore.actions

const userReducer = userStore.reducer

const getUserInfo = (loginForm) => {
  return async (dispatch) => {
    const res = await requests.post("/authorizations", loginForm)
    dispatch(setUserInfo(res.data.token))
  }
}

export { getUserInfo }

export default userReducer
