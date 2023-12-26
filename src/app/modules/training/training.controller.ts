import { Request, Response } from 'express'

import { catchAsync } from '../../../shared/catchAsync'
import httpStatus from 'http-status'
import { sendResponse } from '../../../shared/sendResponse'
import { TrainingService } from './training.service'

const createTraining = catchAsync(async (req: Request, res: Response) => {
  const result = await TrainingService.createTraining(req.body)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Training Created Successfully',
    data: result,
  })
})
const getAllTraining = catchAsync(async (req: Request, res: Response) => {
  const result = await TrainingService.getAllTraining()
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Training retrieved Successfully',
    data: result,
  })
})

const getSingleTraining = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await TrainingService.getSingleTraining(id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Training retrieved Successfully',
    data: result,
  })
})

const updateTraining = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const updatedData = req.body
  const result = await TrainingService.updateTraining(id, updatedData)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Training updated successfully',
    data: result,
  })
})

const deleteTraining = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await TrainingService.deleteTraining(id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' Training deleted successfully',
    data: result,
  })
})

export const TrainingController = {
  createTraining,
  getAllTraining,
  getSingleTraining,
  updateTraining,
  deleteTraining,
}
