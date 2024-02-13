import { db } from '../../db'

const postRole = async (role: string) => {
    await db.role.create({ data: { role }})
}

export default {
    postRole
}