// 封装和文章相关的接口函数

import { requests } from "@/utils/request"

// 1. 获取频道列表
export const getChannelAPI = () =>
  requests({
    url: "/channels",
    method: "GET",
  })

// 2. 提交文章表单
export const createArticleAPI = (data) =>
  requests({
    url: "/mp/articles?draft=false",
    method: "POST",
    data,
  })

// 更新文章表单
export const updateArticleAPI = (data) =>
  requests({
    url: `/mp/articles/${data.id}?draft=false`,
    method: "PUT",
    data,
  })

// 获取文章列表
export const getArticleListAPI = (params) =>
  requests({
    url: "/mp/articles",
    method: "GET",
    params,
  })

// 删除文章
export const delArticleAPI = (id) =>
  requests({
    url: `/mp/articles/${id}`,
    method: "DELETE",
  })

// 获取文章详情
export const getArticleById = (id) =>
  requests({
    url: `/mp/articles/${id}`,
  })
