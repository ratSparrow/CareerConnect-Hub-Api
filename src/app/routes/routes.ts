import { AdminRoutes } from '../modules/admin/admin.route'
import { AppliedJobRoutes } from '../modules/appliedJob/appliedJob.route'

import { AuthRoutes } from '../modules/auth/auth.route'
import { BlogRoutes } from '../modules/blogs/blogs.routes'
import { CompanyRoutes } from '../modules/company/company.routes'
import { EducationRoutes } from '../modules/education/education.route'
import { AllEventsRoutes } from '../modules/events/events.route'
import { ExperienceRoutes } from '../modules/experience/experience.route'
import { JobRoutes } from '../modules/jobs/jobs.routes'
import { PortfolioRoutes } from '../modules/portfolio/portfolio.route'
import { ProjectRoutes } from '../modules/project/project.route'
import { SkillRoutes } from '../modules/skills/skill.route'
import { TrainingRoutes } from '../modules/training/training.route'

import { UserRoutes } from '../modules/users/user.route'
import express from 'express'

const router = express.Router()
const moduleRoutes = [
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
  {
    path: '/jobs',
    route: JobRoutes.router,
  },
  {
    path: '/company',
    route: CompanyRoutes.router,
  },
  {
    path: '/blogs',
    route: BlogRoutes.router,
  },
  {
    path: '/events',
    route: AllEventsRoutes.router,
  },
  {
    path: '/education',
    route: EducationRoutes.router,
  },
  {
    path: '/experience',
    route: ExperienceRoutes.router,
  },
  {
    path: '/training',
    route: TrainingRoutes.router,
  },
  {
    path: '/project',
    route: ProjectRoutes.router,
  },
  {
    path: '/skill',
    route: SkillRoutes.router,
  },
  {
    path: '/portfolio',
    route: PortfolioRoutes.router,
  },
  {
    path: '/applied-job',
    route: AppliedJobRoutes.router,
  },
]

moduleRoutes.forEach(route => router.use(route.path, route.route))
export default router
