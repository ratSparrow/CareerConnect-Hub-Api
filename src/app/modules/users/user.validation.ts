import { z } from 'zod'

const nameSchema = z.object({
  firstName: z.string().optional(),
  lastName: z.string().optional(),
})

const userSchema = z.object({
  email: z.string().email(),
  name: nameSchema.optional(),
  phoneNumber: z.string().optional(),
  password: z.string(),
  role: z.enum(['user', 'admin', 'super_admin']),
  address: z.string().optional(),
  profileImg: z.string().optional(),
})

export const UserValidaion = {
  userSchema,
}
