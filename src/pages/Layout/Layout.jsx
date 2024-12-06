import { fetchUserInfo, clearUserInfo } from "@/store/modules/userStore"
import {
  DiffOutlined,
  EditOutlined,
  HomeOutlined,
  LogoutOutlined,
} from "@ant-design/icons"
import { Layout, Menu, Popconfirm } from "antd"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import "./Layout.scss"

const { Header, Sider } = Layout

const items = [
  {
    label: "首页",
    key: "/",
    icon: <HomeOutlined />,
  },
  {
    label: "文章管理",
    key: "/article",
    icon: <DiffOutlined />,
  },
  {
    label: "创建文章",
    key: "/publish",
    icon: <EditOutlined />,
  },
]

const GeekLayout = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const name = useSelector((state) => state.user.userInfo.name)

  useEffect(() => {
    dispatch(fetchUserInfo())
  }, [dispatch])

  const menuClick = (route) => {
    navigate(route.key)
  }
  // 获取当前路径
  const location = useLocation()
  const selectedKey = location.pathname

  const loginOut = () => {
    dispatch(clearUserInfo())
    navigate("/login")
  }

  return (
    <Layout className="layout-content">
      <Header className="header">
        <div className="logo" />
        <div className="user-info">
          <span className="user-name">{name}</span>
          <span className="user-logout">
            <Popconfirm
              title="是否确认退出？"
              okText="退出"
              cancelText="取消"
              onClick={loginOut}
            >
              <LogoutOutlined /> 退出
            </Popconfirm>
          </span>
        </div>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            theme="dark"
            defaultSelectedKeys={["1"]}
            items={items}
            style={{ height: "100%", borderRight: 0 }}
            onClick={menuClick}
            selectedKeys={selectedKey}
          ></Menu>
        </Sider>
        <Layout className="layout-content" style={{ padding: 20 }}>
          <Outlet />
        </Layout>
      </Layout>
    </Layout>
  )
}
export default GeekLayout
