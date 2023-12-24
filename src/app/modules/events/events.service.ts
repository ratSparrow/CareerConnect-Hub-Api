import ApiError from '../../errors/ApiError'
import httpStatus from 'http-status'

import { IEvents } from './events.interface'
import { Events } from './events.model'

const createEvents = async (payload: IEvents) => {
  const result = await Events.create(payload)
  return result
}
const getAllEvents = async () => {
  const result = await Events.find()
  return result
}

const getSingleEvent = async (id: string) => {
  const result = await Events.findById(id)
  return result
}

const updateEvent = async (
  id: string,
  paylod: IEvents,
): Promise<IEvents | null> => {
  const result = await Events.findOneAndUpdate({ _id: id }, paylod, {
    new: true,
  })
  return result
}

const deleteEvent = async (id: string) => {
  const res = await Events.findById(id)
  if (!res) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      'Event Not Found and Deletion Unsuccessfull',
    )
  }
  const result = Events.findByIdAndDelete(id)
  return result
}

export const AllEvents = {
  createEvents,
  getAllEvents,
  updateEvent,
  deleteEvent,
  getSingleEvent,
}
