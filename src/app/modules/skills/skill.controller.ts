import { Request, Response } from 'express'

import { catchAsync } from '../../../shared/catchAsync'
import httpStatus from 'http-status'
import { sendResponse } from '../../../shared/sendResponse'
import { SkillService } from './skill.service'

const createSkill = catchAsync(async (req: Request, res: Response) => {
  const result = await SkillService.createSkill(req.body)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Skill Created Successfully',
    data: result,
  })
})
const getAllSkill = catchAsync(async (req: Request, res: Response) => {
  const result = await SkillService.getAllSkill()
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Skill retrieved Successfully',
    data: result,
  })
})

const getSingleSkill = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await SkillService.getSingleSkill(id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Skill retrieved Successfully',
    data: result,
  })
})

const updateSkill = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const updatedData = req.body
  const result = await SkillService.updateSkill(id, updatedData)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Skill updated successfully',
    data: result,
  })
})

const deleteSkill = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await SkillService.deleteSkill(id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' Skill deleted successfully',
    data: result,
  })
})

export const SkillController = {
  createSkill,
  getAllSkill,
  getSingleSkill,
  updateSkill,
  deleteSkill,
}
