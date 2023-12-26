import { Model } from 'mongoose'

export type IPortfolio = {
  gitHub: string
  other?: string
}

export type PortfolioModel = Model<IPortfolio>
