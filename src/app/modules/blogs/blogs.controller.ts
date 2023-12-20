import { Request, Response } from 'express'

import { catchAsync } from '../../../shared/catchAsync'
import httpStatus from 'http-status'
import { sendResponse } from '../../../shared/sendResponse'
import { BlogService } from './blogs.service'

const createBlogs = catchAsync(async (req: Request, res: Response) => {
  const result = await BlogService.createBlogs(req.body)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog Created Successfully',
    data: result,
  })
})
const getAllBlogs = catchAsync(async (req: Request, res: Response) => {
  const result = await BlogService.getAllBlogs()
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog retrieved Successfully',
    data: result,
  })
})
const getSingleBlog = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await BlogService.getSingleBlog(id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog retrieved Successfully',
    data: result,
  })
})

const updateBlog = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const updatedData = req.body
  const result = await BlogService.updateBlog(id, updatedData)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog updated successfully',
    data: result,
  })
})

const deleteBlog = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await BlogService.deleteBlog(id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog deleted successfully',
    data: result,
  })
})

export const BlogController = {
  createBlogs,
  getAllBlogs,
  getSingleBlog,
  updateBlog,
  deleteBlog,
}
