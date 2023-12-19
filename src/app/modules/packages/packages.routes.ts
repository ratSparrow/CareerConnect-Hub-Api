import { ENUM_USER_ROLE } from '../../../enums/user'
import auth from '../../middlewares/auth'

import express from 'express'
import { PackagesController } from './packages.controller'

const router = express.Router()

router.post(
  '/',
  // RequestValidation.ValidateRequest(SubServicesValidation.createSubServices),
  auth(ENUM_USER_ROLE.ADMIN),
  PackagesController.createPackages,
)
router.get('/', PackagesController.getAllPackages)
router.get('/:id', PackagesController.getSinglePackages)
router.get('/subServiceId/:id', PackagesController.getPackagesBySubServiceId)
router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  PackagesController.updatePackages,
)
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  PackagesController.deletePackages,
)

export const PackagesRoutes = {
  router,
}
