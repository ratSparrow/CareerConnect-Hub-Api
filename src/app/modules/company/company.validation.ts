import { z } from 'zod'

const companySizeSchema = z.object({
  size: z.enum(['Small', 'Medium', 'Large']),
})

const socialMediaLinksSchema = z.object({
  twitter: z.string().optional(),
  linkedin: z.string().optional(),
  facebook: z.string().optional(),
})

const contactInfoSchema = z.object({
  email: z.string().email(),
  phone: z.string().optional(),
  address: z.string(),
})

const companySchema = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
  industry: z.string().optional(),
  location: z.string().optional(),
  website: z.string().url().optional(),
  logoUrl: z.string().url().optional(),
  size: companySizeSchema.optional(),
  socialMedia: socialMediaLinksSchema.optional(),
  contact: contactInfoSchema.optional(),
})

export const ComanyValidaion = {
  companySchema,
}
