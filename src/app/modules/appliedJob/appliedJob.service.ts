import ApiError from '../../errors/ApiError'
import httpStatus from 'http-status'
import { IAppliedJob } from './appliedJob.interface'
import { AppliedJob } from './appliedJob.model'

const createAppliedJob = async (payload: IAppliedJob) => {
  const result = await AppliedJob.create(payload)
  return result
}
const getAllAppliedJob = async () => {
  const result = await AppliedJob.find().populate('jobId')
  return result
}

const getAppliedJobByApplicant = async (id: string) => {
  const result = await AppliedJob.find({ jobSeekerEmail: id }).populate('jobId')

  return result
}
const getAppliedJobByCompany = async (id: string) => {
  const result = await AppliedJob.find({ companyEmail: id }).populate('jobId')

  return result
}

const updateAppliedJob = async (
  id: string,
  paylod: IAppliedJob,
): Promise<IAppliedJob | null> => {
  const result = await AppliedJob.findOneAndUpdate({ _id: id }, paylod, {
    new: true,
  })
  return result
}

const deleteAppliedJob = async (id: string) => {
  const res = await AppliedJob.findById(id)
  if (!res) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      'Event Not Found and Deletion Unsuccessfull',
    )
  }
  const result = AppliedJob.findByIdAndDelete(id)
  return result
}

export const AppliedJobService = {
  createAppliedJob,
  getAllAppliedJob,
  updateAppliedJob,
  deleteAppliedJob,
  getAppliedJobByCompany,
  getAppliedJobByApplicant,
}
