import { Request, Response } from 'express'

import { catchAsync } from '../../../shared/catchAsync'
import httpStatus from 'http-status'
import { sendResponse } from '../../../shared/sendResponse'
import { JobService } from './jobs.service'
import { pick } from '../../../shared/pick'
import { jobFilterableFields } from './jobs.constant'

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
  const paginationFields = ["page", "limit", "sortBy", "sortOrder"];

  const filters = pick(req.query, jobFilterableFields);

  const paginationOptions = pick(req.query, paginationFields);

  const result = await JobService.getAllJobs(filters,
    paginationOptions)
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

const getJobsByCompany = catchAsync(async (req: Request, res: Response) => {
  const { companyMail } = req.params

  const result = await JobService.getJobsByCompany(companyMail)
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
  getJobsByCompany,
}
