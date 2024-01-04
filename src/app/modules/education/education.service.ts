import ApiError from '../../errors/ApiError'
import httpStatus from 'http-status'
import { IEducation } from './education.interface'
import { Education } from './education.model'

const createEducation = async (payload: IEducation) => {
  const result = await Education.create(payload)
  return result
}
const getAllEducation = async () => {
  const result = await Education.find()
  return result
}

const getSingleEducation = async (id: string) => {
  const result = await Education.find({ userEmail: id })
  return result
}

const updateEducation = async (
  id: string,
  paylod: IEducation,
): Promise<IEducation | null> => {
  const result = await Education.findOneAndUpdate({ _id: id }, paylod, {
    new: true,
  })
  return result
}

const deleteEducation = async (id: string) => {
  const res = await Education.findById(id)
  if (!res) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      'Event Not Found and Deletion Unsuccessfull',
    )
  }
  const result = Education.findByIdAndDelete(id)
  return result
}

export const EducationService = {
  createEducation,
  getAllEducation,
  updateEducation,
  deleteEducation,
  getSingleEducation,
}
