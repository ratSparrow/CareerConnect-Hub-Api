import { z } from 'zod'

const jobSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    company: z.string().optional(),
    location: z.string().optional(),
    companyDescription: z.string().optional(),
    jobDescription: z.string().optional(),
    requirements: z.string().optional(),
    salary: z.number(),
    deadline: z.string().optional(),
    category: z.string().optional(),
    jobType: z.enum(['Full-time', 'Part-time', 'Contract', 'Freelance']),
    experienceLevel: z.enum(['Entry', 'Intermediate', 'Senior']),
    skills: z.string().optional(),
    benefits: z.string().optional(),
    contactEmail: z.string().email().optional(),
    joiningDate: z.string().optional(),
    keyResponsibilities: z.string().optional(),
    numberOfOpenings: z.string().optional(),
    companyId: z.union([
      z.string().optional(),
      z.object({ _id: z.string().optional() }),
    ]),
  }),
})

export const JobValidaion = {
  jobSchema,
}
