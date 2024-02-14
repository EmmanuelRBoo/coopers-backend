import { Router } from 'express'

import { task } from '../../controllers'

const taskRouter = Router()

taskRouter.get('/', task.getTasks)

taskRouter.post('/', task.postTask)

taskRouter.post('/mass', task.postMassTask)

taskRouter.put('/', task.putTask)

taskRouter.put('/status', task.putTaskStatus)

taskRouter.put('/order', task.putTaskOrder)

taskRouter.delete('/', task.deleteTask)

taskRouter.delete('/all', task.deleteAllTask)

export default taskRouter