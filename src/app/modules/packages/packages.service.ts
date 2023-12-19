import ApiError from '../../errors/ApiError'

import httpStatus from 'http-status'
import { IPackages } from './packages.interface'
import { Packages } from './packages.model'

const createPackages = async (payload: IPackages) => {
  const result = await Packages.create(payload)
  return result
}
const getAllPackages = async () => {
  const result = await Packages.find()
    .populate('subServiceId')
    .populate('serviceId')
  return result
}

const getSinglePackages = async (id: string) => {
  const result = await Packages.findById(id)
    .populate('subServiceId')
    .populate('serviceId')
  return result
}

const getPackagesBySubServiceId = async (id: string) => {
  const result = await Packages.find({ subServiceId: id })
    .populate('subServiceId')
    .populate('serviceId')
  return result
}

const updatePackages = async (
  id: string,
  paylod: IPackages,
): Promise<IPackages | null> => {
  const result = await Packages.findOneAndUpdate({ _id: id }, paylod, {
    new: true,
  })
  return result
}

const deletePackages = async (id: string) => {
  const services = await Packages.findById(id)
  if (!services) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      'Services Not Found and Deletion Unsuccessfull',
    )
  }
  const result = Packages.findByIdAndDelete(id)
  return result
}

export const PackageService = {
  createPackages,
  getAllPackages,
  updatePackages,
  deletePackages,
  getPackagesBySubServiceId,
  getSinglePackages,
}
