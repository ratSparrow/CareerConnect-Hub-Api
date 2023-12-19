import { Schema, model } from 'mongoose'
import { IPackages, PackageModel } from './packages.interface'

const PackageSchema = new Schema<IPackages>(
  {
    serviceId: {
      type: Schema.Types.ObjectId,
      ref: 'services',
      required: true,
    },
    subServiceId: {
      type: Schema.Types.ObjectId,
      ref: 'sub-services',
      required: true,
    },
    name: {
      type: String,
      required: true,
      unique: true,
    },
    price: {
      type: Number,
      required: true,
    },
    unit: {
      type: String,
      required: true,
    },
    details: {
      type: [String],
      required: true,
    },
    images: {
      type: [String],
      required: false,
    },
    discount: {
      type: Number,
      required: false,
    },
    options: {
      type: [String],
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

export const Packages = model<IPackages, PackageModel>(
  'packages',
  PackageSchema,
)
