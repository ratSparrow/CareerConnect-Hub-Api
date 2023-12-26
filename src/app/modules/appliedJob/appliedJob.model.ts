import { Schema, model } from 'mongoose'
import { AppliedJobModel, IAppliedJob } from './appliedJob.interface'

const AppliedJobSchema = new Schema<IAppliedJob>(
  {
    companyId: {
      type: Schema.Types.ObjectId,
      ref: 'company',
      required: true,
    },
    jobSeekerId: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    jobId: {
      type: Schema.Types.ObjectId,
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
