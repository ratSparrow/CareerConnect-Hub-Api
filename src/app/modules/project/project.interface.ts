import { Model } from 'mongoose'

export type IProject = {
  title: string
  startMonth?: string
  endMonth?: string
  currentlyOngoing?: boolean
  projectLink: string
  description: string
}

export type ProjectModel = Model<IProject>
