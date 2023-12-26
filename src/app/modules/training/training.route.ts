import express from 'express'
import auth from '../../middlewares/auth'
import { ENUM_USER_ROLE } from '../../../enums/user'
import { TrainingController } from './training.controller'

const router = express.Router()

router.post(
  '/',

  TrainingController.createTraining,
)
router.get('/', TrainingController.getAllTraining)
router.get('/:id', TrainingController.getSingleTraining)
router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  TrainingController.updateTraining,
)
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  TrainingController.deleteTraining,
)

export const TrainingRoutes = {
  router,
}
