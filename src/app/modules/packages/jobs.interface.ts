import { Model } from 'mongoose'

export type IJobs = {
  title: string
  company: string
  location: string
  description: string
  requirements: string
  salary: number
  deadline: string
  category: string
  jobType: ['Full-time', 'Part-time', 'Contract', 'Freelance']
  experienceLevel: string
  benefits: string
  contactEmail: string
}

export type PackageModel = Model<IJobs>
