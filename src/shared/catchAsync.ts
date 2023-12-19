import { NextFunction, Request, RequestHandler, Response } from 'express'

export const catchAsync = (payloadFn: RequestHandler) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await payloadFn(req, res, next)
    } catch (error) {
      console.log(error)
      next(error)
    }
  }
}
