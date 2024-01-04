import ApiError from '../../errors/ApiError'
import httpStatus from 'http-status'
import { ISkill } from './skills.interface'
import { Skill } from './skills.model'

const createSkill = async (payload: ISkill) => {
  const result = await Skill.create(payload)
  return result
}
const getAllSkill = async () => {
  const result = await Skill.find()
  return result
}

const getSingleSkill = async (id: string) => {
  const result = await Skill.find({ userEmail: id })
  return result
}

const updateSkill = async (
  id: string,
  paylod: ISkill,
): Promise<ISkill | null> => {
  const result = await Skill.findOneAndUpdate({ _id: id }, paylod, {
    new: true,
  })
  return result
}

const deleteSkill = async (id: string) => {
  const res = await Skill.findById(id)
  if (!res) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      'Event Not Found and Deletion Unsuccessfull',
    )
  }
  const result = Skill.findByIdAndDelete(id)
  return result
}

export const SkillService = {
  createSkill,
  getAllSkill,
  updateSkill,
  deleteSkill,
  getSingleSkill,
}
