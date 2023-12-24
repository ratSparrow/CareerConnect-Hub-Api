import { Request, Response } from 'express'

import { catchAsync } from '../../../shared/catchAsync'
import httpStatus from 'http-status'
import { sendResponse } from '../../../shared/sendResponse'
import { AllEvents } from './events.service'

const createEvents = catchAsync(async (req: Request, res: Response) => {
  const result = await AllEvents.createEvents(req.body)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Events Created Successfully',
    data: result,
  })
})
const getAllEvents = catchAsync(async (req: Request, res: Response) => {
  const result = await AllEvents.getAllEvents()
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Events retrieved Successfully',
    data: result,
  })
})

const getSingleEvent = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await AllEvents.getSingleEvent(id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Event retrieved Successfully',
    data: result,
  })
})

const updateEvent = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const updatedData = req.body
  const result = await AllEvents.updateEvent(id, updatedData)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Event updated successfully',
    data: result,
  })
})

const deleteEvent = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await AllEvents.deleteEvent(id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' Event deleted successfully',
    data: result,
  })
})

export const AllEventsController = {
  createEvents,
  getAllEvents,
  getSingleEvent,
  updateEvent,
  deleteEvent,
}
