import { Router } from 'express'
import { AuthUserController } from './controllers/AuthUserController'
import { CreateMessageController } from './controllers/CreateMessageController'
import { LatestMessagesController } from './controllers/LatestMessagesController'
import { UserProfileController } from './controllers/UserProfileController'
import { authGuard } from './middlewares/authGuard'

const router = Router()
router.get('/messages/latest', new LatestMessagesController().handle)
router.get('/user/profile', authGuard, new UserProfileController().handle)

router.post('/authenticate', new AuthUserController().handle)
router.post('/messages', authGuard, new CreateMessageController().handle)


export { router }