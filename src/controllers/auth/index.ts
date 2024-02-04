import { Request, Response } from 'express'

import { user } from '../../services'
import { sign } from './token'

const register = async (req: Request, res: Response) => {
    const { name, password, roleId } = req.body

    await user.postUser({ name, password, roleId })

    return res.status(201).json({ message: 'Usuário criado com sucesso' })
}

const login = async (req: Request, res: Response) => {
    const { name } = req.body

    const login = await user.getUser({ name })

    if (login) {
        const token = sign({
            name,
            id: login.id,
        })
        
        const response = {
            token,
            name, 
            role: login.roleId
        }

        return res.status(200).json(response)
    }
}

export default {
    login,
    register
}