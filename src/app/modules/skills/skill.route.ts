import express from 'express'
import auth from '../../middlewares/auth'
import { ENUM_USER_ROLE } from '../../../enums/user'
import { SkillController } from './skill.controller'

const router = express.Router()

router.post(
  '/',

  SkillController.createSkill,
)
router.get('/', SkillController.getAllSkill)
router.get('/:id', SkillController.getSingleSkill)
router.patch('/:id', auth(ENUM_USER_ROLE.ADMIN), SkillController.updateSkill)
router.delete('/:id', auth(ENUM_USER_ROLE.ADMIN), SkillController.deleteSkill)

export const SkillRoutes = {
  router,
}
