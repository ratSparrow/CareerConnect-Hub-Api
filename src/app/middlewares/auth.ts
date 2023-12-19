import { NextFunction, Request, Response } from 'express'
import httpStatus from 'http-status'
import jwt, { JwtPayload, Secret } from 'jsonwebtoken'
import ApiError from '../errors/ApiError'
import config from '../../config'

const auth =
  (...roles: string[]) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      //get authorization token
      const token = req.headers.authorization
      if (!token) {
        throw new ApiError(httpStatus.UNAUTHORIZED, 'You are not authorized')
      }

      //verify token

      let verifiedUser = null

      try {
        verifiedUser = jwt.verify(
          token,
          config.jwt.secret as Secret,
        ) as JwtPayload
      } catch (error) {
        throw new ApiError(httpStatus.FORBIDDEN, 'Invalid Token')
      }

      req.user = verifiedUser
      if (roles.length && !roles.includes(verifiedUser.role)) {
        throw new ApiError(httpStatus.FORBIDDEN, 'Forbidden')
      }

      console.log('verifiedUser', verifiedUser)

      next()
    } catch (error) {
      next(error)
    }
  }
export default auth
