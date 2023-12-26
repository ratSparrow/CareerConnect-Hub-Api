import { Model } from 'mongoose'

export type ISkill = {
  skills: [string]
}

export type SkillModel = Model<ISkill>
