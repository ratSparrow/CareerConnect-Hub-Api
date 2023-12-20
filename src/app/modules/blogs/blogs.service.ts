import ApiError from '../../errors/ApiError'

import httpStatus from 'http-status'
import { IBlogs } from './blogs.interface'
import { Blogs } from './blogs.model'

const createBlogs = async (payload: IBlogs) => {
  const result = await Blogs.create(payload)
  return result
}
const getAllBlogs = async () => {
  const result = await Blogs.find()
  return result
}

const getSingleBlog = async (id: string) => {
  const result = await Blogs.findById(id)

  return result
}

const getBlogById = async (id: string) => {
  const result = await Blogs.find({ id })

  return result
}

const updateBlog = async (
  id: string,
  paylod: IBlogs,
): Promise<IBlogs | null> => {
  const result = await Blogs.findOneAndUpdate({ _id: id }, paylod, {
    new: true,
  })
  return result
}

const deleteBlog = async (id: string) => {
  const existingBlog = await Blogs.findById(id)
  if (!existingBlog) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      'Blogs Not Found and Deletion Unsuccessfull',
    )
  }
  const result = Blogs.findByIdAndDelete(id)
  return result
}

export const BlogService = {
  createBlogs,
  getAllBlogs,
  updateBlog,
  deleteBlog,
  getBlogById,
  getSingleBlog,
}
