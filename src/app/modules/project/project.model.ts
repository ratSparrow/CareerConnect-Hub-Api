import { Schema, model } from 'mongoose'
import { IProject, ProjectModel } from './project.interface'

const ProjectSchema = new Schema<IProject>(
  {
    title: {
      type: String,
      required: true,
    },
    userEmail: {
      type: String,
      required: true,
    },
    startMonth: {
      type: String,
      required: false,
    },
    endMonth: {
      type: String,
      required: false,
    },
    currentlyOngoing: {
      type: Boolean,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
    projectLink: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
)

export const Project = model<IProject, ProjectModel>('project', ProjectSchema)
