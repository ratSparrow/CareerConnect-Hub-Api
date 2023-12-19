import ApiError from '../../errors/ApiError'

import httpStatus from 'http-status'
import { IJobs } from './jobs.interface'
import { Jobs } from './jobs.model'

const createJobs = async (payload: IJobs) => {
  const result = await Jobs.create(payload)
  return result
}
const getAllJobs = async () => {
  const result = await Jobs.find()
  return result
}

const getSingleJobs = async (id: string) => {
  const result = await Jobs.findById(id)

  return result
}

const getJobsById = async (id: string) => {
  const result = await Jobs.find({id})

  return result
}

const updateJobs = async (id: string, paylod: IJobs): Promise<IJobs | null> => {
  const result = await Jobs.findOneAndUpdate({ _id: id }, paylod, {
    new: true,
  })
  return result
}

const deleteJobs = async (id: string) => {
  const jobs = await Jobs.findById(id)
  if (!jobs) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      'jobs Not Found and Deletion Unsuccessfull',
    )
  }
  const result = Jobs.findByIdAndDelete(id)
  return result
}

export const Jobservice = {
  createJobs,
  getAllJobs,
  updateJobs,
  deleteJobs,
  getJobsById,
  getSingleJobs,
}
