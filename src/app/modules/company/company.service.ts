import ApiError from '../../errors/ApiError'
import httpStatus from 'http-status'
import { ICompany } from './company.interface'
import { Company } from './company.model'

const createCompany = async (payload: ICompany) => {
  const result = await Company.create(payload)
  return result
}
const getAllCompanies = async () => {
  const result = await Company.find()
  return result
}

const getSingleCompany = async (id: string) => {
  const result = await Company.findById(id)
  return result
}

const updateCompany = async (
  id: string,
  paylod: ICompany,
): Promise<ICompany | null> => {
  const result = await Company.findOneAndUpdate({ _id: id }, paylod, {
    new: true,
  })
  return result
}

const deleteCompany = async (id: string) => {
  const res = await Company.findById(id)
  if (!res) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      'Company Not Found and Deletion Unsuccessfull',
    )
  }
  const result = Company.findByIdAndDelete(id)
  return result
}

export const AllCompany = {
  createCompany,
  getAllCompanies,
  updateCompany,
  deleteCompany,
  getSingleCompany,
}
