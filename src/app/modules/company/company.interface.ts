import { Model } from 'mongoose'

export type ICompanySize = {
  size: 'Small' | 'Medium' | 'Large'
}
export type ISocialMediaLinks = {
  twitter?: string
  linkedin?: string
  facebook?: string
}
export type IContactInfo = {
  email: string
  phone?: string
  address: string
}
export type ICompany = {
  name: string
  description: string
  industry: string
  location: string
  website: string
  logoUrl: string
  size: ICompanySize
  socialMedia?: ISocialMediaLinks
  contact: IContactInfo
}

export type CompanyModel = Model<ICompany>
