import { Model } from 'mongoose'

export type IPortfolio = {
  gitHub: string
  other?: string
  userEmail: string
}

export type PortfolioModel = Model<IPortfolio>
