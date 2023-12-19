/* eslint-disable @typescript-eslint/no-unused-vars */
import { ErrorRequestHandler, NextFunction, Request, Response } from 'express'
import config from '../../config'
import { IGenericErrorMessage } from '../../interface/error'
import ApiError from '../errors/ApiError'
import { handleCastError } from '../errors/handleCastError'
import { handleValidationError } from '../errors/handleValidationError'

const globalErrorHandler: ErrorRequestHandler = (
  err,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let statusCode = 500
  let message = 'Something went wrong !'
  let errorMessage: IGenericErrorMessage[] = []

  // handling validation error
  if (err.name === 'ValidationError') {
    const simplifiedError = handleValidationError(err)
    simplifiedError.statusCode = statusCode
    simplifiedError.message = message
    simplifiedError.errorMessages = errorMessage
  }

  //handling cast error
  else if (err?.name === 'CastError') {
    const simplifiedError = handleCastError(err)
    simplifiedError.statusCode = statusCode
    simplifiedError.message = message
    simplifiedError.errorMessages = errorMessage
  }

  //handling Apierror
  else if (err instanceof ApiError) {
    statusCode = err?.statusCode
    message = err.message
    errorMessage = err?.message
      ? [
          {
            path: '',
            message: err.message,
          },
        ]
      : []
  }
  res.status(statusCode).json({
    success: false,
    message,
    errorMessage,
    stack: config.env === 'development' ? err?.stack : undefined,
  })
}

export default globalErrorHandler
