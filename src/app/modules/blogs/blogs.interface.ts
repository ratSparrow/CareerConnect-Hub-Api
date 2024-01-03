import { Model } from 'mongoose'

export type IComments = {
  user: string
  commentText: string
  commentDate: string
}

export type IBlogs = {
  img?: string
  title: string
  author: string
  content: string
  publishDate: string
  views: number
  likes: number
  comments: [IComments]
}

export type BlogModel = Model<IBlogs>
