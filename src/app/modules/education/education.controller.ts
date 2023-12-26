import { Request, Response } from 'express'

import { catchAsync } from '../../../shared/catchAsync'
import httpStatus from 'http-status'
import { sendResponse } from '../../../shared/sendResponse'
import { EducationService } from './education.service'

const createEducation = catchAsync(async (req: Request, res: Response) => {
  const result = await EducationService.createEducation(req.body)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Education Created Successfully',
    data: result,
  })
})
const getAllEducation = catchAsync(async (req: Request, res: Response) => {
  const result = await EducationService.getAllEducation()
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Education retrieved Successfully',
    data: result,
  })
})

const getSingleEducation = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await EducationService.getSingleEducation(id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Education retrieved Successfully',
    data: result,
  })
})

const updateEducation = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const updatedData = req.body
  const result = await EducationService.updateEducation(id, updatedData)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Education updated successfully',
    data: result,
  })
})

const deleteEducation = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await EducationService.deleteEducation(id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' Education deleted successfully',
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
