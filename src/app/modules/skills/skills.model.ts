import { Schema, model } from 'mongoose'
import { ISkill, SkillModel } from './skills.interface'

const SkillSchema = new Schema<ISkill>(
  {
    skills: [
      {
        type: String,
        required: true,
      },
    ],
    userEmail: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
)

export const Skill = model<ISkill, SkillModel>('skills', SkillSchema)
