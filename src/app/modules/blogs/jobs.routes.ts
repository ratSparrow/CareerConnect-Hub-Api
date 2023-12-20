import { ENUM_USER_ROLE } from '../../../enums/user'
import auth from '../../middlewares/auth'

import express from 'express'
import { JobsController } from './jobs.controller'

const router = express.Router()

router.post(
  '/',
  // RequestValidation.ValidateRequest(SubServicesValidation.createSubServices),
  auth(ENUM_USER_ROLE.ADMIN),
  JobsController.createJobs,
)
router.get('/', JobsController.getAllJobs)
router.get('/:id', JobsController.getSingleJobs)

router.patch('/:id', auth(ENUM_USER_ROLE.ADMIN), JobsController.updateJobs)
router.delete('/:id', auth(ENUM_USER_ROLE.ADMIN), JobsController.deleteJobs)

export const JobRoutes = {
  router,
}
