import { db } from '../../db'
import { IPostTask, IPutTaskStatus, IPutTaskOrder, IPutTask, IDeleteTask, IPostMassTask, IDeleteAllTask } from '../../interfaces'

const getTasks = async (authorId: string) => {
    return await db.$transaction([
        db.task.findMany({ where: { authorId } }),
        db.finishedTask.findMany({ where: { authorId } })
    ])
}

const postTask = async (data: IPostTask) => {
    return await db.task.create({ data, select: { id: true, authorId: true, order: true, title: true } })
}

const postMassTask = async ({ finishedTask, tasks }: IPostMassTask) => {
    return await db.$transaction([
        db.task.createMany({ data: tasks }),
        db.finishedTask.createMany({ data: finishedTask })
    ])
}

const putTask = async ({ title, id, authorId, done }: IPutTask) => {
    const data = { 
        where: { id, authorId }, 
        data: { title }
    }

    if (done) {
        return await db.finishedTask.update(data)
    }
    
    return await db.task.update(data)
}

const putTaskStatus = async ({ id, authorId, title, done, order }: IPutTaskStatus) => {

    return await db.$transaction(
        done
        ? [
            db.task.create({ data: { title, authorId, order, id } }),
            db.finishedTask.delete({ where: { id, authorId } })
        ]
        : [
            db.finishedTask.create({ data: { title, authorId, order, id } }),
            db.task.delete({ where: { id, authorId } })
        ]
    )
}

const putTaskOrder = async ({ data, authorId, done }: IPutTaskOrder) => {
    return await db.$transaction(async () => data.map(async ({ id, order }) => {
        if (done) {
            return await db.finishedTask.update({
                where: { id, authorId },
                data: { order }
            })
        }
        
        return await db.task.update({
            where: { id, authorId },
            data: { order }
        })
    }))
}

const deleteTask = async ({ id, authorId, done }: IDeleteTask) => {
    if (done) {
        return await db.finishedTask.delete({ where: { id, authorId } })
    }

    return await db.task.delete({ where: { id, authorId } })
}

const deleteAllTask = async ({ authorId, done }: IDeleteAllTask) => {
    if (done) {
        return await db.finishedTask.deleteMany({ where: { authorId } })
    }

    return await db.task.deleteMany({ where: { authorId } })
}

export default {
    getTasks,
    postTask,
    postMassTask,
    putTask,
    putTaskStatus,
    putTaskOrder,
    deleteTask,
    deleteAllTask
}