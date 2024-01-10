import express from 'express'
import auth from '../../middlewares/auth'
import { ENUM_USER_ROLE } from '../../../enums/user'
import { AppliedJobController } from './appliedJob.controller'

const router = express.Router()

router.post('/', AppliedJobController.createAppliedJob)
router.get('/', AppliedJobController.getAllAppliedJob)
// by company email
router.get(
  '/company/:companyEmail',
  AppliedJobController.getAppliedJobByCompany,
)
// by applicant email
router.get(
  '/applicant/:applicantEmail',
  AppliedJobController.getAppliedJobByApplicant,
)
router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  AppliedJobController.updateAppliedJob,
)
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  AppliedJobController.deleteAppliedJob,
)

export const AppliedJobRoutes = {
  router,
}
