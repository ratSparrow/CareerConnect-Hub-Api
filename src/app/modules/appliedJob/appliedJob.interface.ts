import { Model, Schema } from 'mongoose'

export type IAppliedJob = {
  companyId: Schema.Types.ObjectId
  jobSeekerId: Schema.Types.ObjectId
  jobId: Schema.Types.ObjectId
}

export type AppliedJobModel = Model<IAppliedJob>
