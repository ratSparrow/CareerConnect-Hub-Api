import express from 'express'
import auth from '../../middlewares/auth'
import { ENUM_USER_ROLE } from '../../../enums/user'
import { EducationController } from './education.controller'

const router = express.Router()

router.post('/', EducationController.createEducation)
router.get('/', EducationController.getAllEducation)
router.get('/:id', EducationController.getSingleEducation)
router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  EducationController.updateEducation,
)
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  EducationController.deleteEducation,
)

export const EducationRoutes = {
  router,
}
