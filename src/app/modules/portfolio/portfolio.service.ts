import ApiError from '../../errors/ApiError'
import httpStatus from 'http-status'
import { IPortfolio } from './portfolio.interface'
import { Portfolio } from './portfolio.model'

const createPortfolio = async (payload: IPortfolio) => {
  const result = await Portfolio.create(payload)
  return result
}
const getAllPortfolio = async () => {
  const result = await Portfolio.find()
  return result
}

const getSinglePortfolio = async (id: string) => {
  const result = await Portfolio.find({ userEmail: id })
  return result
}

const updatePortfolio = async (
  id: string,
  paylod: IPortfolio,
): Promise<IPortfolio | null> => {
  const result = await Portfolio.findOneAndUpdate({ _id: id }, paylod, {
    new: true,
  })
  return result
}

const deletePortfolio = async (id: string) => {
  const res = await Portfolio.findById(id)
  if (!res) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      'Event Not Found and Deletion Unsuccessfull',
    )
  }
  const result = Portfolio.findByIdAndDelete(id)
  return result
}

export const PortfolioService = {
  createPortfolio,
  getAllPortfolio,
  updatePortfolio,
  deletePortfolio,
  getSinglePortfolio,
}
