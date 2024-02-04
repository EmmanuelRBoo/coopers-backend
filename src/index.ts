import Express from 'express'
import Cors from 'cors'

import { PORT } from './constants'
import { authRouter, taskRouter } from './routes'

const app = Express()

app.use(Express.json())
app.use(Cors())

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/task', taskRouter)

app.listen(PORT, () => console.log(`Running at ${PORT} port`))