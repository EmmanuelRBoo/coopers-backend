export interface IGetTasks {
    id: string
    title: string
    order: number
    authorId: string
}

export interface IPostTask {
    title: string
    authorId: string
    order: number
}

export interface IPostMassTask {
    finishedTask: IPostTask[]
    tasks: IPostTask[]
}

export interface IPutTask {
    id: string
    authorId: string
    title: string
    done: boolean
}

export interface IPutTaskStatus {
    id: string
    authorId: string
    title: string
    done: boolean
    order: number
}

export interface IPutTaskOrder {
    data: Array<{ id: string, order: number }>
    authorId: string
    done: boolean
}

export interface IDeleteTask {
    id: string
    authorId: string
    done: boolean
}

export interface IDeleteAllTask {
    authorId: string
    done: boolean
}