import ApiError from '../../errors/ApiError'
import httpStatus from 'http-status'
import { ITraining } from './training.interface'
import { Training } from './training.model'

const createTraining = async (payload: ITraining) => {
  const result = await Training.create(payload)
  return result
}
const getAllTraining = async () => {
  const result = await Training.find()
  return result
}

const getSingleTraining = async (id: string) => {
  const result = await Training.find({ userEmail: id })
  return result
}

const updateTraining = async (
  id: string,
  paylod: ITraining,
): Promise<ITraining | null> => {
  const result = await Training.findOneAndUpdate({ _id: id }, paylod, {
    new: true,
  })
  return result
}

const deleteTraining = async (id: string) => {
  const res = await Training.findById(id)
  if (!res) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      'Event Not Found and Deletion Unsuccessfull',
    )
  }
  const result = Training.findByIdAndDelete(id)
  return result
}

export const TrainingService = {
  createTraining,
  getAllTraining,
  updateTraining,
  deleteTraining,
  getSingleTraining,
}
