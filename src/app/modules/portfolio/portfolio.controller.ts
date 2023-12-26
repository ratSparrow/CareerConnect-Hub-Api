import { Request, Response } from 'express'

import { catchAsync } from '../../../shared/catchAsync'
import httpStatus from 'http-status'
import { sendResponse } from '../../../shared/sendResponse'
import { PortfolioService } from './portfolio.service'

const createPortfolio = catchAsync(async (req: Request, res: Response) => {
  const result = await PortfolioService.createPortfolio(req.body)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Portfolio Created Successfully',
    data: result,
  })
})
const getAllPortfolio = catchAsync(async (req: Request, res: Response) => {
  const result = await PortfolioService.getAllPortfolio()
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Portfolio retrieved Successfully',
    data: result,
  })
})

const getSinglePortfolio = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await PortfolioService.getSinglePortfolio(id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Portfolio retrieved Successfully',
    data: result,
  })
})

const updatePortfolio = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const updatedData = req.body
  const result = await PortfolioService.updatePortfolio(id, updatedData)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Portfolio updated successfully',
    data: result,
  })
})

const deletePortfolio = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await PortfolioService.deletePortfolio(id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' Portfolio deleted successfully',
    data: result,
  })
})

export const PortfolioController = {
  createPortfolio,
  getAllPortfolio,
  getSinglePortfolio,
  updatePortfolio,
  deletePortfolio,
}
