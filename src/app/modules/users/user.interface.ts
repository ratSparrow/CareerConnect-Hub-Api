import { Model } from 'mongoose'
import { UserName } from '../../../interface/username'

export type IUser = {
  email: string
  name?: UserName
  phoneNumber?: string
  password: string
  role: 'user' | 'admin' | 'super_admin'
  address?: string
  profileImg?: string
}

export type UserModel = {
  isUserExists(
    email: string,
  ): Promise<Pick<IUser, 'email' | 'phoneNumber' | 'password' | 'role'>>
  isPasswordMatched(
    givenPassword: string,
    savedPassword: string,
  ): Promise<boolean>
} & Model<IUser>
