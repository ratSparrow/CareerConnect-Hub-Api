import ApiError from '../../errors/ApiError'
import httpStatus from 'http-status'
import { ICompany } from './company.interface'
import { Company } from './company.model'
import { User } from '../users/user.model'

const createCompany = async (payload: ICompany) => {
  const companyExists = await Company.findOne({ email: payload.contact.email })

  const userExists = await User.findOne({ email: payload.contact.email })

  if (companyExists && userExists) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      'A Company already exist to this email and phone Number',
    )
  }

  payload.role = 'recruiter'
  payload.status = 'pending'
  const mCompanyData = {
    email: payload.contact.email,
    phoneNumber: payload.contact.phone,
    role: payload.role,
    password: payload.password,
  }

  const user = await User.create(mCompanyData)
  if (!user) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Company Can not created now.')
  }
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
