import { Request, Response } from 'express'

import { task } from '../../services'

const getTasks = async (req: Request, res: Response) => {
    const { authorId } = req.body

    const response = await task.getTasks(authorId)

    const data = {
        toDo: response[0],
        done: response[1]
    }

    return res.status(200).json({ data })
}

const postTask = async (req: Request, res: Response) => {
    const { authorId, title, order } = req.body

    const data = await task.postTask({ authorId, title, order })

    return res.status(201).json({ data })
} 

const postMassTask = async (req: Request, res: Response) => {
    const { finishedTask, tasks } = req.body

    const data = await task.postMassTask({ finishedTask, tasks })

    return res.status(201).json({ data })
}

const putTask = async (req: Request, res: Response) => {
    const { authorId, done, id, title } = req.body

    await task.putTask({ authorId, done, id, title })

    return res.status(200).json()
}

const putTaskStatus = async (req: Request, res: Response) => {
    const { authorId, done, id, title, order } = req.body

    await task.putTaskStatus({ authorId, done, id, title, order })

    return res.status(200).json()
}

const putTaskOrder = async (req: Request, res: Response) => {
    const { authorId, data } = req.body

    await task.putTaskOrder({ authorId, data })

    return res.status(200).json()
}

const deleteTask = async (req: Request, res: Response) => {
    const { id, authorId, done } = req.body

    await task.deleteTask({ authorId, done, id })

    return res.status(200).json()
}

export default {
    getTasks,
    postTask,
    putTask,
    putTaskStatus,
    putTaskOrder,
    deleteTask,
    postMassTask
}