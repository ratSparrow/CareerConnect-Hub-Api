import { Schema, model } from 'mongoose'
import { AppliedJobModel, IAppliedJob } from './appliedJob.interface'

const AppliedJobSchema = new Schema<IAppliedJob>(
  {
    companyEmail: {
      type: String,
      ref: 'company',
      required: true,
    },
    jobSeekerEmail: {
      type: String,
      ref: 'user',
      required: true,
    },
    jobId: {
      type: String,
      ref: 'jobs',
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
)

export const AppliedJob = model<IAppliedJob, AppliedJobModel>(
  'applied-job',
  AppliedJobSchema,
)
