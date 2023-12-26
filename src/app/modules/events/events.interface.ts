import { Model } from 'mongoose'

export type ISpeakers = {
  name: string
  title: string
  bio: string
}

export type IAgenda = {
  time: string
  event: string
}

export type IEvents = {
  id?: string
  name: string
  description: string
  image?: string
  date: string
  location: string
  speakers: [ISpeakers]
  agenda: [IAgenda]
}

export type EventsModel = Model<IEvents>
