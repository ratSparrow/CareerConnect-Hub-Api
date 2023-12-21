import { Model } from 'mongoose'

export type IJobs = {
  title: string
  company: string
  location: string
  companyDescription: string
  jobDescription: string
  requirements: string
  salary: number
  deadline: string
  category: string
  jobType: 'Full-time' | 'Part-time' | 'Contract' | 'Freelance'
  experienceLevel: 'Entry' | 'Intermediate' | 'Senior'
  skills: string
  benefits: string
  contactEmail: string
  joiningDate: string
  keyResponsibilities: string
  numberOfOpenings: string
}

export type JobsModel = Model<IJobs>
