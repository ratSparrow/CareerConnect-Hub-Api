import { Schema, model } from 'mongoose'
import { IJobs, JobsModel } from './jobs.interface'

const PackageSchema = new Schema<IJobs>(
  {
    title: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    companyDescription: {
      type: String,
      required: true,
    },
    jobDescription: {
      type: String,
      required: true,
    },
    requirements: [
      {
        type: String,
        required: true,
      },
    ],
    salary: {
      type: Number,
      default: 0,
    },
    deadline: {
      type: String,
      required: false,
    },
    category: {
      type: String,
    },
    jobType: {
      type: String,
      enum: ['Full-time', 'Part-time', 'Contract', 'Freelance'],
      required: true,
    },
    experienceLevel: {
      type: String,
      enum: ['Entry', 'Intermediate', 'Senior'],
      required: true,
    },
    skills: [
      {
        type: String,
        required: false,
      },
    ],
    benefits: [
      {
        type: String,
        required: false,
      },
    ],
    contactEmail: {
      type: String,
      required: true,
    },
    joiningDate: {
      type: String,
      required: false,
    },
    keyResponsibilities: [
      {
        type: String,
        required: false,
      },
    ],
    numberOfOpenings: {
      type: String,
      required: false,
    },
    companyId: {
      type: Schema.Types.ObjectId,
      ref: 'company',
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

export const Jobs = model<IJobs, JobsModel>('jobs', PackageSchema)
