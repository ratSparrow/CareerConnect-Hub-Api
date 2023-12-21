import { AdminRoutes } from '../modules/admin/admin.route'

import { AuthRoutes } from '../modules/auth/auth.route'
import { BlogRoutes } from '../modules/blogs/blogs.routes'
import { JobRoutes } from '../modules/jobs/jobs.routes'

import { UserRoutes } from '../modules/users/user.route'
import express from 'express'

const router = express.Router()
const moduleRoutes = [
  {
    path: '/jobs',
    route: JobRoutes.router,
  },
  {
    path: '/blogs',
    route: BlogRoutes.router,
  },
  {
    path: '/users',
    route: UserRoutes.router,
  },
  {
    path: '/admins',
    route: AdminRoutes.router,
  },
  {
    path: '/auth',
    route: AuthRoutes.router,
  },
]

moduleRoutes.forEach(route => router.use(route.path, route.route))
export default router
