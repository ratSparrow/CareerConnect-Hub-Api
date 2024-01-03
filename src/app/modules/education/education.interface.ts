import { Model } from 'mongoose'

export type IEducation = {
  college?: string
  startYear: string
  endYear: string
  degree?: string
  description: string
  performanceScale: 'CGPA' | 'GPA'
  cgpa: string
  userEmail:string
}

export type EducationModel = Model<IEducation>
