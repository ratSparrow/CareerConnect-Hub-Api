import { Model } from 'mongoose'

export type IEvents = {
  id?: string
  name: string
  description: string
  image?: string
}

export type EventsModel = Model<IEvents>
