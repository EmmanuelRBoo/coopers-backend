import { Request, Response } from 'express'

import { role } from '../../services'

const postRole = async (req: Request, res: Response) => {
    const { roleName } = req.body

    await role.postRole(roleName)

    return res.status(201).json({ message: 'Role criada com sucesso' })
}

export default {
    postRole
}