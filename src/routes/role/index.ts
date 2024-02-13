import { Router } from 'express'

import { role } from '../../controllers'

const roleRouter = Router()

roleRouter.post('/', role.postRole)

export default roleRouter