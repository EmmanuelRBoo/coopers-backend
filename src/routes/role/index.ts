import { Router } from 'express'

import { role } from '../../controllers'

const roleRouter = Router()

roleRouter.post('/', role.postRole)

roleRouter.get('/', role.getRole)

export default roleRouter