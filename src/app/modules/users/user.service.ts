import httpStatus from 'http-status'
import { JwtPayload } from 'jsonwebtoken'
import ApiError from '../../errors/ApiError'
import { IUser } from './user.interface'
import { User } from './user.model'

const createUser = async (payload: IUser) => {
  const userExist = await User.findOne({ email: payload.email })
  if (userExist) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      'An applicant already exist to this email and phone Number',
    )
  }
  payload.role = 'applicant'
  const result = await User.create(payload)
  return result
}

//get all users
const getAllUserService = async () => {
  const result = await User.find({})
  return result
}

//get single user
const getSingleUser = async (id: string) => {
  const result = await User.findById(id)
  return result
}

const updateSingleUser = async (
  id: string,
  paylod: IUser,
): Promise<IUser | null> => {
  const result = await User.findOneAndUpdate({ _id: id }, paylod, {
    new: true,
  })
  return result
}

const deleteSingleUser = async (id: string) => {
  const userExist = await User.findById(id)
  if (!userExist) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      'User Not Found and Deletion Unsuccessfull',
    )
  }
  const result = User.findByIdAndDelete(id)
  return result
}

const userProfile = async (user: JwtPayload | null) => {
  if (!user) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Unauthorized')
  }

  const result = await User.findOne({ email: user.email })

  return result
}

const updateUserProfile = async (
  user: JwtPayload | null,
  payload: Partial<IUser>,
) => {
  if (!user) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Unauthorized')
  }

  const result = await User.findOneAndUpdate({ email: user.email }, payload, {
    new: true,
  })
  return result
}

export const UserService = {
  createUser,
  getAllUserService,
  getSingleUser,

  updateUserProfile,
  userProfile,
  updateSingleUser,
  deleteSingleUser,
}
