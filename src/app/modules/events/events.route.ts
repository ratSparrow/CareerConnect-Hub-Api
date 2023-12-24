import express from 'express'
import auth from '../../middlewares/auth'
import { ENUM_USER_ROLE } from '../../../enums/user'
import { AllEventsController } from './events.controller'

const router = express.Router()

router.post(
  '/',

  AllEventsController.createEvents,
)
router.get('/', AllEventsController.getAllEvents)
router.get('/:id', AllEventsController.getSingleEvent)
router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  AllEventsController.updateEvent,
)
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  AllEventsController.deleteEvent,
)

export const AllEventsRoutes = {
  router,
}
