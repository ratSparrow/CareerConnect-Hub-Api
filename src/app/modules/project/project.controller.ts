import { Request, Response } from 'express'

import { catchAsync } from '../../../shared/catchAsync'
import httpStatus from 'http-status'
import { sendResponse } from '../../../shared/sendResponse'
import { ProjectService } from './project.service'

const createProject = catchAsync(async (req: Request, res: Response) => {
  const result = await ProjectService.createProject(req.body)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Projects Created Successfully',
    data: result,
  })
})
const getAllProject = catchAsync(async (req: Request, res: Response) => {
  const result = await ProjectService.getAllProject()
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Projects retrieved Successfully',
    data: result,
  })
})

const getSingleProject = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await ProjectService.getSingleProject(id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Project retrieved Successfully',
    data: result,
  })
})

const updateProject = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const updatedData = req.body
  const result = await ProjectService.updateProject(id, updatedData)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Project updated successfully',
    data: result,
  })
})

const deleteProject = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await ProjectService.deleteProject(id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' Project deleted successfully',
    data: result,
  })
})

export const ProjectController = {
  createProject,
  getAllProject,
  getSingleProject,
  updateProject,
  deleteProject,
}
