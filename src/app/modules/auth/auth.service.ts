import httpStatus from 'http-status'
import jwt, { Secret } from 'jsonwebtoken'
import config from '../../../config'
import { jwtHelpers } from '../../../helpers/jwtHelpers'
import ApiError from '../../errors/ApiError'
import { User } from '../users/user.model'
import { IRefreshTokenResponse, IUserLogin } from './auth.interface'

const loginUser = async (payload: IUserLogin) => {
  const { email: emailId, password } = payload

  // check user exist
  const isUserExists = await User.isUserExists(emailId)

  if (!isUserExists) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'User does not exist')
  }

  //matched password
  if (
    isUserExists?.password &&
    !(await User.isPasswordMatched(password, isUserExists?.password))
  ) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Password is incorrect')
  }

  const { phoneNumber, role, email } = isUserExists

  console.log(email)

  // create access token
  const accessToken = jwt.sign(
    {
      email: isUserExists.email,
      role: isUserExists.role,
    },
    config.jwt.secret as Secret,
    {
      expiresIn: config.jwt.secret_expire_in,
    },
  )

  const refreshToken = jwtHelpers.createToken(
    { phoneNumber, role },
    config.jwt.refresh_secret as Secret,
    config.jwt.refresh_secret_expire_in as string,
  )

  return {
    accessToken,
    refreshToken,
    emailId,
    role,
  }
}

const refreshTokenService = async (
  token: string,
): Promise<IRefreshTokenResponse> => {
  let verifiedToken = null
  try {
    verifiedToken = jwtHelpers.verifyToken(
      token,
      config.jwt.refresh_secret as Secret,
    )
  } catch (error) {
    throw new ApiError(httpStatus.FORBIDDEN, 'Invalid Refresh Token')
  }

  //checking deleted user refresh token
  const { phoneNumber } = verifiedToken

  const isUserExists = await User.isUserExists(phoneNumber)
  if (!isUserExists) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'User does not exist')
  }

  //generate new token
  const newAccessToken = jwtHelpers.createToken(
    {
      id: isUserExists.phoneNumber,
      role: isUserExists.role,
    },
    config.jwt.secret as Secret,
    config.jwt.secret_expire_in as string,
  )
  return {
    accessToken: newAccessToken,
  }
}
export const AuthService = {
  loginUser,
  refreshTokenService,
}
