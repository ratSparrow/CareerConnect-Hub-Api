import { Request, Response } from 'express'

import { catchAsync } from '../../../shared/catchAsync'
import httpStatus from 'http-status'
import { sendResponse } from '../../../shared/sendResponse'
import { JobService } from './jobs.service'

const createJobs = catchAsync(async (req: Request, res: Response) => {
  const result = await JobService.createJobs(req.body)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Jobs Created Successfully',
    data: result,
  })
})
const getAllJobs = catchAsync(async (req: Request, res: Response) => {
  const result = await JobService.getAllJobs()
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Jobs retrieved Successfully',
    data: result,
  })
})
const getSingleJobs = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await JobService.getSingleJobs(id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Jobs retrieved Successfully',
    data: result,
  })
})

const updateJobs = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const updatedData = req.body
  const result = await JobService.updateJobs(id, updatedData)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Job updated successfully',
    data: result,
  })
})

const deleteJobs = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await JobService.deleteJobs(id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'JOb deleted successfully',
    data: result,
  })
})

export const JobsController = {
  createJobs,
  getAllJobs,
  getSingleJobs,
  updateJobs,
  deleteJobs,
}
