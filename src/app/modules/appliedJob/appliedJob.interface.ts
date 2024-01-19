import { Model } from 'mongoose'

export type IAppliedJob = {
  companyEmail: string
  jobSeekerEmail: string
  jobId: string
}

export type AppliedJobModel = Model<IAppliedJob>
