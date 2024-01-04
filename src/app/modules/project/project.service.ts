import ApiError from '../../errors/ApiError'
import httpStatus from 'http-status'
import { IProject } from './project.interface'
import { Project } from './project.model'

const createProject = async (payload: IProject) => {
  const result = await Project.create(payload)
  return result
}
const getAllProject = async () => {
  const result = await Project.find()
  return result
}

const getSingleProject = async (id: string) => {
  const result = await Project.find({ userEmail: id })
  return result
}

const updateProject = async (
  id: string,
  paylod: IProject,
): Promise<IProject | null> => {
  const result = await Project.findOneAndUpdate({ _id: id }, paylod, {
    new: true,
  })
  return result
}

const deleteProject = async (id: string) => {
  const res = await Project.findById(id)
  if (!res) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      'Event Not Found and Deletion Unsuccessfull',
    )
  }
  const result = Project.findByIdAndDelete(id)
  return result
}

export const ProjectService = {
  createProject,
  getAllProject,
  updateProject,
  deleteProject,
  getSingleProject,
}
