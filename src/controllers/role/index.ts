import { Request, Response } from 'express'

import { role } from '../../services'

const postRole = async (req: Request, res: Response) => {
    const { roleName } = req.body

    await role.postRole(roleName)

    return res.status(201).json({ message: 'Role criada com sucesso' })
}

const getRole = async (req: Request, res: Response) => {
    const data = await role.getRole()

    return res.status(200).json({ data })
}

export default {
    postRole,
    getRole
}