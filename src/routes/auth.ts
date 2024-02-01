import { Router } from 'express'

import { auth } from '../controllers'
import { authMiddleware } from '../middlewares'

const authRouter = Router()

authRouter.post('/login', 
    authMiddleware.verifyAccountNotExist,
    authMiddleware.verifyAccountPassword,
    auth.login
)

authRouter.post('/register',
    authMiddleware.verifyAccountExist,
    auth.register
)

export default authRouter