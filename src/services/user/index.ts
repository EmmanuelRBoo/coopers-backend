import { db } from '../../db'
import { IGetUser, IPostUser, IPutUser } from '../../interfaces'

const postUser = async (data: IPostUser) => {

    return await db.user.create({ data })
}

const getUser = async ({ name }: IGetUser) => {

    return await db.user.findUnique({ where: { name }})
}

export default {
    getUser,
    postUser,
}