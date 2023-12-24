import { Request, Response } from 'express'

import { catchAsync } from '../../../shared/catchAsync'
import httpStatus from 'http-status'
import { sendResponse } from '../../../shared/sendResponse'
import { AllEducation } from './education.service'

const createEducation = catchAsync(async (req: Request, res: Response) => {
  const result = await AllEducation.createEducation(req.body)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Events Created Successfully',
    data: result,
  })
})
const getAllEducation = catchAsync(async (req: Request, res: Response) => {
  const result = await AllEducation.getAllEducation()
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Events retrieved Successfully',
    data: result,
  })
})

const getSingleEducation = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await AllEducation.getSingleEducation(id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Event retrieved Successfully',
    data: result,
  })
})

const updateEducation = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const updatedData = req.body
  const result = await AllEducation.updateEducation(id, updatedData)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Event updated successfully',
    data: result,
  })
})

const deleteEducation = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await AllEducation.deleteEducation(id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' Event deleted successfully',
    data: result,
  })
})

export const EducationController = {
  createEducation,
  getAllEducation,
  getSingleEducation,
  updateEducation,
  deleteEducation,
}
