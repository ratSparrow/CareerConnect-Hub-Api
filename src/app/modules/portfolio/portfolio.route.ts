import express from 'express'
import auth from '../../middlewares/auth'
import { ENUM_USER_ROLE } from '../../../enums/user'
import { PortfolioController } from './portfolio.controller'

const router = express.Router()

router.post(
  '/',

  PortfolioController.createPortfolio,
)
router.get('/', PortfolioController.getAllPortfolio)
router.get('/:id', PortfolioController.getSinglePortfolio)
router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  PortfolioController.updatePortfolio,
)
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  PortfolioController.deletePortfolio,
)

export const PortfolioRoutes = {
  router,
}
