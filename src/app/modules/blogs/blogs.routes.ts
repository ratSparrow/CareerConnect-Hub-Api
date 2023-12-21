import { ENUM_USER_ROLE } from '../../../enums/user'
import auth from '../../middlewares/auth'

import express from 'express'
import { BlogController } from './blogs.controller'

const router = express.Router()

router.post(
  '/',
  // RequestValidation.ValidateRequest(SubServicesValidation.createSubServices),
  // auth(ENUM_USER_ROLE.ADMIN),
  BlogController.createBlogs,
)
router.get('/', BlogController.getAllBlogs)
router.get('/:id', BlogController.getSingleBlog)

router.patch('/:id', auth(ENUM_USER_ROLE.ADMIN), BlogController.updateBlog)
router.delete('/:id', auth(ENUM_USER_ROLE.ADMIN), BlogController.deleteBlog)

export const BlogRoutes = {
  router,
}
