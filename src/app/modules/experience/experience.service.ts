import ApiError from '../../errors/ApiError'
import httpStatus from 'http-status'
import { IExperience } from './experience.interface'
import { Experience } from './experience.model'

const createExperience = async (payload: IExperience) => {
  const result = await Experience.create(payload)
  return result
}
const getAllExperience = async () => {
  const result = await Experience.find()
  return result
}

const getSingleExperience = async (id: string) => {
  const result = await Experience.find({ userEmail: id })
  return result
}

const updateExperience = async (
  id: string,
  paylod: IExperience,
): Promise<IExperience | null> => {
  const result = await Experience.findOneAndUpdate({ _id: id }, paylod, {
    new: true,
  })
  return result
}

const deleteExperience = async (id: string) => {
  const res = await Experience.findById(id)
  if (!res) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      'Event Not Found and Deletion Unsuccessfull',
    )
  }
  const result = Experience.findByIdAndDelete(id)
  return result
}

export const ExperienceService = {
  createExperience,
  getAllExperience,
  updateExperience,
  deleteExperience,
  getSingleExperience,
}
