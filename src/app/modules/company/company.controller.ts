import { Request, Response } from 'express'

import { catchAsync } from '../../../shared/catchAsync'
import httpStatus from 'http-status'
import { sendResponse } from '../../../shared/sendResponse'
import { AllCompany } from './company.service'

const createCompany = catchAsync(async (req: Request, res: Response) => {

  const result = await AllCompany.createCompany(req.body)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Company Created Successfully',
    data: result,
  })
})
const getAllCompanies = catchAsync(async (req: Request, res: Response) => {
  const result = await AllCompany.getAllCompanies()
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Company retrieved Successfully',
    data: result,
  })
})

const getSingleCompany = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await AllCompany.getSingleCompany(id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Company retrieved Successfully',
    data: result,
  })
})

const updateCompany = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const updatedData = req.body
  const result = await AllCompany.updateCompany(id, updatedData)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Company updated successfully',
    data: result,
  })
})

const deleteCompany = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await AllCompany.deleteCompany(id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' Company deleted successfully',
    data: result,
  })
})

export const AllCompanyController = {
  createCompany,
  getAllCompanies,
  getSingleCompany,
  updateCompany,
  deleteCompany,
}
