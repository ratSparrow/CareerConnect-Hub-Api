import httpStatus from 'http-status'
import ApiError from '../../errors/ApiError'
import { IAdmin } from './admin.interface'
import { Admin } from './admin.model'
import { User } from '../users/user.model'

const createNewAdmin = async (payload: IAdmin) => {
  const adminExists = await Admin.findOne({ email: payload.email })
  const userExists = await User.findOne({ email: payload.email })
  if (adminExists && userExists) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      'An admin already exist to this email and phone Number',
    )
  }
  payload.role = 'admin'
  const user = await User.create(payload)
  if (!user) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Admin Can not created')
  }
  const result = await Admin.create(payload)
  return result
}

const getAllAdmin = async () => {
  const result = await Admin.find({})
  return result
}
const getSingleAdmin = async (id: string) => {
  const result = await Admin.findById(id)
  return result
}

const updateAdmin = async (
  id: string,
  paylod: IAdmin,
): Promise<IAdmin | null> => {
  const result = await Admin.findOneAndUpdate({ _id: id }, paylod, {
    new: true,
  })
  return result
}

const deleteAdmin = async (id: string) => {
  const adminExists = await Admin.findById(id)
  if (!adminExists) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      'User Not Found and Deletion Unsuccessfull',
    )
  }
  const result = Admin.findByIdAndDelete(id)
  return result
}

export const AdminService = {
  createNewAdmin,
  getAllAdmin,
  getSingleAdmin,
  updateAdmin,
  deleteAdmin,
}
