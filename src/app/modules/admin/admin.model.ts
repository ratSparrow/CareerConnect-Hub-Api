import { Schema, model } from 'mongoose'
import { AdminModel, IAdmin } from './admin.interface'

const AdminSchema = new Schema<IAdmin>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: {
        firstName: {
          type: String,
          required: true,
        },
        lastName: {
          type: String,
          required: false,
        },
      },
    },
    phoneNumber: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: 0,
    },
    role: {
      type: String,
      enum: ['admin'],
      required: true,
    },
    address: {
      type: String,
      required: false,
    },
    profileImg: {
      type: String,
      required: false,
    },
    permissions: {
      type: String,
      enum: ['view', 'update', 'delete'],
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

export const Admin = model<IAdmin, AdminModel>('admin', AdminSchema)
