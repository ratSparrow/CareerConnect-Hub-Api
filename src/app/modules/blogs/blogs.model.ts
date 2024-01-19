import { Schema, model } from 'mongoose'
import { BlogModel, IBlogs } from './blogs.interface'

const BlogSchema = new Schema<IBlogs>(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: false,
    },
    content: {
      type: String,
      required: true,
    },
    publishDate: {
      type: String,
      required: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    likes: {
      type: Number,
      default: 0,
    },
    comments: [
      {
        type: {
          user: {
            type: String,
            required: false,
          },
          commentText: {
            type: String,
            required: false,
          },
          commentDate: {
            type: String,
            required: false,
          },
        },
      },
    ],
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
)

export const Blogs = model<IBlogs, BlogModel>('blogs', BlogSchema)
