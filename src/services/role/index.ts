import { db } from '../../db'

const postRole = async (role: string) => {
    return await db.role.create({ data: { role }})
}

const getRole = async () => {
    return await db.role.findMany()
}

export default {
    postRole,
    getRole
}