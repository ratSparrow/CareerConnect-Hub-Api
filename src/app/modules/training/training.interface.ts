import { Model } from 'mongoose'

export type ITraining = {
  title: string
  organization: string
  location: string
  online?: boolean
  startDate?: string
  endDate?: string
  currentlyOngoing: boolean
  description?: string
  userEmail: string
}

export type TrainingModel = Model<ITraining>
