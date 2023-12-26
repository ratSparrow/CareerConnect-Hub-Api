import express from 'express'
import auth from '../../middlewares/auth'
import { ENUM_USER_ROLE } from '../../../enums/user'
import { ExperienceController } from './experience.controller'

const router = express.Router()

router.post(
  '/',

  ExperienceController.createExperience,
)
router.get('/', ExperienceController.getAllExperience)
router.get('/:id', ExperienceController.getSingleExperience)
router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  ExperienceController.updateExperience,
)
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  ExperienceController.deleteExperience,
)

export const ExperienceRoutes = {
  router,
}
