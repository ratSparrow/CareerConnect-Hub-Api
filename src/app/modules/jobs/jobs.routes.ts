import { ENUM_USER_ROLE } from '../../../enums/user'
import auth from '../../middlewares/auth'

import express from 'express'
import { RequestValidation } from '../../middlewares/validateRequest'
import { JobsController } from './jobs.controller'
import { JobValidaion } from './jobs.validation'

const router = express.Router()

router.post(
  '/',

  // RequestValidation.ValidateRequest(SubServicesValidation.createSubServices),

  RequestValidation.ValidateRequest(JobValidaion.jobSchema),

  // auth(ENUM_USER_ROLE.ADMIN),
  JobsController.createJobs,
)
router.get('/', JobsController.getAllJobs)
router.get('/:id', JobsController.getSingleJobs)

router.patch('/:id', auth(ENUM_USER_ROLE.ADMIN), JobsController.updateJobs)
router.delete('/:id', auth(ENUM_USER_ROLE.ADMIN), JobsController.deleteJobs)

export const JobRoutes = {
  router,
}
