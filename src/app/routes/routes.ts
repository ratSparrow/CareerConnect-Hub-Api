import { AdminRoutes } from '../modules/admin/admin.route'

import { AuthRoutes } from '../modules/auth/auth.route'

import { UserRoutes } from '../modules/users/user.route'
import express from 'express'

import { PackagesRoutes } from '../modules/packages/packages.routes'

const router = express.Router()
const moduleRoutes = [
  {
    path: '/packages',
    route: PackagesRoutes.router,
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
