import { Request, Response } from 'express'

import { catchAsync } from '../../../shared/catchAsync'
import httpStatus from 'http-status'
import { sendResponse } from '../../../shared/sendResponse'
import { AppliedJobService } from './appliedJob.service'

const createAppliedJob = catchAsync(async (req: Request, res: Response) => {
  const result = await AppliedJobService.createAppliedJob(req.body)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'AppliedJob  Created Successfully',
    data: result,
  })
})
const getAllAppliedJob = catchAsync(async (req: Request, res: Response) => {
  const result = await AppliedJobService.getAllAppliedJob()
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'AppliedJob  retrieved Successfully',
    data: result,
  })
})

const getAppliedJobByCompany = catchAsync(
  async (req: Request, res: Response) => {
    const { companyEmail } = req.params
    const result = await AppliedJobService.getAppliedJobByCompany(companyEmail)
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'AppliedJob retrieved Successfully',
      data: result,
    })
  },
)
const getAppliedJobByApplicant = catchAsync(
  async (req: Request, res: Response) => {
    const { applicantEmail } = req.params
    const result = await AppliedJobService.getAppliedJobByApplicant(
      applicantEmail,
    )
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'AppliedJob retrieved Successfully',
      data: result,
    })
  },
)

const updateAppliedJob = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const updatedData = req.body
  const result = await AppliedJobService.updateAppliedJob(id, updatedData)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'AppliedJob updated successfully',
    data: result,
  })
})

const deleteAppliedJob = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await AppliedJobService.deleteAppliedJob(id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' AppliedJob deleted successfully',
    data: result,
  })
})

export const AppliedJobController = {
  createAppliedJob,
  getAllAppliedJob,
  getAppliedJobByCompany,
  updateAppliedJob,
  deleteAppliedJob,
  getAppliedJobByApplicant,
}
