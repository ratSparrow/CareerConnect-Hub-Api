import { Model, Schema } from 'mongoose'

export type IPackages = {
  serviceId: Schema.Types.ObjectId
  subServiceId: Schema.Types.ObjectId
  name: string
  unit: string
  price: number
  details: string[]
  images: string[]
  discount: number
  options?: string[]
}

export type PackageModel = Model<IPackages>
