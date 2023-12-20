import { Schema, model } from 'mongoose'
import { IJobs, JobsModel } from './blogs.interface'

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
    description: {
      type: String,
      required: true,
    },
    requirements: [String],
    salary: {
      type: Number,
      default: 0,
    },

    deadline: Date,
    category: String,
    jobType: {
      enum: ['Full-time', 'Part-time', 'Contract', 'Freelance'],
    },
    experienceLevel: {
      type: String,
      enum: ['Entry', 'Intermediate', 'Senior'],
    },
    skills: [String],
    benefits: [String],
    contactEmail: String,
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
)

export const Jobs = model<IJobs, JobsModel>('jobs', PackageSchema)
