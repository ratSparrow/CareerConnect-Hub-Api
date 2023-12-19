import mongoose from 'mongoose'
import { IGenericErrorResponse } from '../../interface/commonError'
import { IGenericErrorMessage } from '../../interface/error'

export const handleValidationError = (
  err: mongoose.Error.ValidationError,
): IGenericErrorResponse => {
  const errors: IGenericErrorMessage[] = Object.values(err.errors).map(
    element => {
      return {
        path: element?.path,
        message: element.message,
      }
    },
  )
  const statusCode = 400
  return {
    statusCode,
    message: 'Validation Error',
    errorMessages: errors,
  }
}
