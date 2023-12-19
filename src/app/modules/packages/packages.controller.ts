import { Request, Response } from 'express'

import { catchAsync } from '../../../shared/catchAsync'
import httpStatus from 'http-status'
import { sendResponse } from '../../../shared/sendResponse'
import { PackageService } from './packages.service'

const createPackages = catchAsync(async (req: Request, res: Response) => {
  const result = await PackageService.createPackages(req.body)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Packages Created Successfully',
    data: result,
  })
})
const getAllPackages = catchAsync(async (req: Request, res: Response) => {
  const result = await PackageService.getAllPackages()
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Packages retrieved Successfully',
    data: result,
  })
})
const getSinglePackages = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await PackageService.getSinglePackages(id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Package retrieved Successfully',
    data: result,
  })
})
const getPackagesBySubServiceId = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params
    const result = await PackageService.getPackagesBySubServiceId(id)
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Package retrieved Successfully',
      data: result,
    })
  },
)

const updatePackages = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const updatedData = req.body
  const result = await PackageService.updatePackages(id, updatedData)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Package updated successfully',
    data: result,
  })
})

const deletePackages = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await PackageService.deletePackages(id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Package deleted successfully',
    data: result,
  })
})

export const PackagesController = {
  createPackages,
  getAllPackages,
  getSinglePackages,
  getPackagesBySubServiceId,
  updatePackages,
  deletePackages,
}
