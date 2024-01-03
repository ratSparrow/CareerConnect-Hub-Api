import { Schema, model } from 'mongoose'
import { EducationModel, IEducation } from './education.interface'

const EducationSchema = new Schema<IEducation>(
  {
    college: {
      type: String,
      required: true,
    },
    startYear: {
      type: String,
      required: false,
    },
    endYear: {
      type: String,
      required: false,
    },
    degree: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
    performanceScale: {
      type: String,
      enum: ['CGPA', 'GPA'],
      required: false,
    },
    cgpa: {
      type: String,
      required: false,
    },
    userEmail: {
      type: String,
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

export const Education = model<IEducation, EducationModel>(
  'education',
  EducationSchema,
)
