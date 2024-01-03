import express from 'express'
// import { RequestValidation } from '../../middlewares/validateRequest'
import { JobsController } from './jobs.controller'
// import { JobValidaion } from './jobs.validation'

const router = express.Router()

router.post(
  '/',

  // RequestValidation.ValidateRequest(SubServicesValidation.createSubServices),

  // RequestValidation.ValidateRequest(JobValidaion.jobSchema),

  // auth(ENUM_USER_ROLE.ADMIN),
  JobsController.createJobs,
)
router.get('/company/:companyMail', JobsController.getJobsByCompany)
router.get('/:id', JobsController.getSingleJobs)
router.get('/', JobsController.getAllJobs)



router.patch(
  '/:id',
  // auth(ENUM_USER_ROLE.ADMIN),
  JobsController.updateJobs,
)
router.delete(
  '/:id',
  // auth(ENUM_USER_ROLE.ADMIN),
  JobsController.deleteJobs,
)

export const JobRoutes = {
  router,
}
