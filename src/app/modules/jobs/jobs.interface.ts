import { Model, Types } from 'mongoose'
import { ICompany } from '../company/company.interface'

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
  companyId: Types.ObjectId | ICompany;
}

export type JobsModel = Model<IJobs>


export type IJobFilters = {
  searchTerm?: string;
};