import { createBrowserRouter } from "react-router-dom"

import Login from "@/pages/Login/Login"
import Layout from "@/pages/Layout/Layout"
import Publish from "@/pages/Publish/Publish"
import Article from "@/pages/Article/Article"
import Home from "@/pages/Home/Home"
import AuthRoute from "@/components/AuthRoute/AuthRoute"

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthRoute>
        <Layout />
      </AuthRoute>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "article",
        element: <Article />,
      },
      {
        path: "publish",
        element: <Publish />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
])

export default router
