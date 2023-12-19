import { Model } from 'mongoose'
import { UserName } from '../../../interface/username'

export type IAdmin = {
  email: string
  name: UserName
  phoneNo: string
  phoneNumber: string
  password: string
  role: 'admin'
  address: string
  profileImg: string
  permissions?: ['view', 'update', 'delete']
}

export type AdminModel = Model<IAdmin>
