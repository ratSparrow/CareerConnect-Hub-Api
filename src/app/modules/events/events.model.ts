import { Schema, model } from 'mongoose'
import { EventsModel, IEvents } from './events.interface'

const EventSchema = new Schema<IEvents>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      required: false,
    },
    description: {
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

export const Events = model<IEvents, EventsModel>('events', EventSchema)
