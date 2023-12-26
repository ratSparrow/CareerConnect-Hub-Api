import { Request, Response } from 'express'

import { catchAsync } from '../../../shared/catchAsync'
import httpStatus from 'http-status'
import { sendResponse } from '../../../shared/sendResponse'
import { ExperienceService } from './experience.service'

const createExperience = catchAsync(async (req: Request, res: Response) => {
  const result = await ExperienceService.createExperience(req.body)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Experience Created Successfully',
    data: result,
  })
})
const getAllExperience = catchAsync(async (req: Request, res: Response) => {
  const result = await ExperienceService.getAllExperience()
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Experience retrieved Successfully',
    data: result,
  })
})

const getSingleExperience = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await ExperienceService.getSingleExperience(id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Experience retrieved Successfully',
    data: result,
  })
})

const updateExperience = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const updatedData = req.body
  const result = await ExperienceService.updateExperience(id, updatedData)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Experience updated successfully',
    data: result,
  })
})

const deleteExperience = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await ExperienceService.deleteExperience(id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' Experience deleted successfully',
    data: result,
  })
})

export const ExperienceController = {
  createExperience,
  getAllExperience,
  getSingleExperience,
  updateExperience,
  deleteExperience,
}
