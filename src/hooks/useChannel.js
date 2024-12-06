import { useState, useEffect } from "react"
import { getChannelAPI } from "@/api/article/article"

export const useChannel = () => {
  // 1. 获取频道列表所有的逻辑
  // 获取频道列表
  const [channelList, setChannelList] = useState([])

  useEffect(() => {
    // 1. 封装函数 在函数体内调用接口
    const getChannelList = async () => {
      const res = await getChannelAPI()
      setChannelList(res.data.data.channels)
    }
    // 2. 调用函数
    getChannelList()
  }, [])
  // 2. 把组件中要用到的数据return出去
  return {
    channelList,
  }
}
