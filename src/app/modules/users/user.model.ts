/* eslint-disable @typescript-eslint/no-this-alias */
import bcrypt from 'bcrypt'
import { Schema, model } from 'mongoose'

import { IUser, UserModel } from './user.interface'
import config from '../../../config'

const UserSchema = new Schema<IUser>(
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
          required: false,
        },
        lastName: {
          type: String,
          required: false,
        },
      },
      required: false,
    },
    phoneNumber: {
      type: String,
      required: false,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: 0,
    },
    role: {
      type: String,
      enum: ['applicant', 'recruiter', 'admin', 'super_admin'],
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
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
)

UserSchema.statics.isUserExists = async function (
  email: string,
): Promise<Pick<IUser, 'email' | 'phoneNumber' | 'password' | 'role'> | null> {
  const user = await User.findOne(
    { email },
    { phoneNumber: 1, password: 1, role: 1, email: 1 },
  )

  return user
}

UserSchema.statics.isPasswordMatched = async function (
  givenPassword: string,
  savedPassword: string,
): Promise<boolean> {
  return await bcrypt.compare(givenPassword, savedPassword)
}

UserSchema.pre('save', async function (next) {
  const user = this
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds),
  )
  next()
})

export const User = model<IUser, UserModel>('user', UserSchema)
