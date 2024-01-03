import { Model } from 'mongoose'

export type ISkill = {
  skills: [string]
  userEmail: string
}

export type SkillModel = Model<ISkill>
