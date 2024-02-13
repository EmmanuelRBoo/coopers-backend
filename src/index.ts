import Express from 'express'
import cors from 'cors'

import { PORT } from './constants'
import { authRouter, taskRouter, roleRouter } from './routes'

const app = Express()

app.use(Express.json())
app.use(cors({ origin: '*' }))

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/task', taskRouter)
app.use('/api/v1/role', roleRouter)

app.listen(PORT, () => console.log(`Running at ${PORT} port`))