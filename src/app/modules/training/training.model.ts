import { Schema, model } from 'mongoose'
import { ITraining, TrainingModel } from './training.interface'

const TrainingSchema = new Schema<ITraining>(
  {
    title: {
      type: String,
      required: true,
    },
    userEmail: {
      type: String,
      required: true,
    },
    organization: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    startDate: {
      type: String,
      required: false,
    },
    endDate: {
      type: String,
      required: false,
    },
    online: {
      type: Boolean,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
    currentlyOngoing: {
      type: Boolean,
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

export const Training = model<ITraining, TrainingModel>(
  'training',
  TrainingSchema,
)
