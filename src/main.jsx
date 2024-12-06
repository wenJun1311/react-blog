import React from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import { RouterProvider } from "react-router-dom"
import "./index.css"
import router from "./router/index"
import store from "./store/idnex"
import "normalize.css"

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
