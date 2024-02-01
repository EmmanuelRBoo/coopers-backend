import { db } from '../../db'
import { IGetUser, IPostUser } from '../../interfaces'

const postUser = async (data: IPostUser) => {

    return await db.user.create({ data })
}

const getUser = async ({ email }: IGetUser) => {

    return await db.user.findUnique({ where: { email }})
}


export default {
    getUser,
    postUser
}