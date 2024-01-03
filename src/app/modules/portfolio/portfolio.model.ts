import { Schema, model } from 'mongoose'
import { IPortfolio, PortfolioModel } from './portfolio.interface'

const Portfoliochema = new Schema<IPortfolio>(
  {
    gitHub: {
      type: String,
      required: true,
    },
    other: {
      type: String,
      required: false,
    },
    userEmail: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
)

export const Portfolio = model<IPortfolio, PortfolioModel>(
  'portfolio',
  Portfoliochema,
)
