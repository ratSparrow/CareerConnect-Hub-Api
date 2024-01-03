import ApiError from '../../errors/ApiError'

import httpStatus from 'http-status'
import { SortOrder } from 'mongoose'
import { paginationHelpers } from '../../../helpers/paginationHelper'
import { IPaginationOptions } from '../../../interface/pagination'
import { jobSearchableFields } from './jobs.constant'
import { IJobFilters, IJobs } from './jobs.interface'
import { Jobs } from './jobs.model'


const createJobs = async (payload: IJobs) => {
  const result = await Jobs.create(payload)
  return result
}

const getAllJobs = async (
  filters: IJobFilters,
  paginationOptions: IPaginationOptions,
) => {
  const { searchTerm, ...filtersData } = filters
  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(paginationOptions)

  const addConditions = []

  if (searchTerm) {
    addConditions.push({
      $or: jobSearchableFields.map(field => ({
        [field]: {
          $regex: searchTerm,
          $options: 'i',
        },
      })),
    })
  }

  if (Object.keys(filtersData).length) {
    addConditions.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value,
      })),
    })
  }

  const sortConditions: { [key: string]: SortOrder } = {}

  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder
  }

  const whereCondition = addConditions.length ? { $and: addConditions } : {}

  const result = await Jobs.find(whereCondition)
    .sort(sortConditions)
    .skip(skip)
    .limit(limit)

  const total = await Jobs.countDocuments(whereCondition)

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  }
}

const getSingleJobs = async (id: string) => {
  const result = await Jobs.findById(id)

  return result
}
const getJobsByCompany = async (companyMail: string) => {
  const result = await Jobs.find({ contactEmail: companyMail })

  return result
}

const getJobsById = async (id: string) => {
  const result = await Jobs.find({ id })

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

export const JobService = {
  createJobs,
  getAllJobs,
  updateJobs,
  deleteJobs,
  getJobsById,
  getSingleJobs,
  getJobsByCompany,
}
