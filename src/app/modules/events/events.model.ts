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
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    speakers: [
      {
        type: {
          name: {
            type: String,
            required: String,
          },
          title: {
            type: String,
            required: String,
          },
          bio: {
            type: String,
            required: String,
          },
        },
      },
    ],
    agenda: [
      {
        type: {
          time: {
            type: String,
            required: String,
          },
          event: {
            type: String,
            required: String,
          },
        },
      },
    ],
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
)

export const Events = model<IEvents, EventsModel>('events', EventSchema)
