import express from 'express'
import auth from '../../middlewares/auth'
import { ENUM_USER_ROLE } from '../../../enums/user'
import { ProjectController } from './project.controller'

const router = express.Router()

router.post(
  '/',

  ProjectController.createProject,
)
router.get('/', ProjectController.getAllProject)
router.get('/:id', ProjectController.getSingleProject)
router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  ProjectController.updateProject,
)
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  ProjectController.deleteProject,
)

export const ProjectRoutes = {
  router,
}
