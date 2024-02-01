import { Request, Response } from 'express'

import { user } from '../../services'
import { sign } from './token'

const register = async (req: Request, res: Response) => {
    const { name, password, email, roleId } = req.body

    await user.postUser({ name, password, email, roleId })

    return res.status(201).json({ message: 'Usuário criado com sucesso' })
}

export const login = async (req: Request, res: Response) => {
    const { email } = req.body

    const login = await user.getUser({ email })

    if (login) {
        const token = sign({ 
            email,
            name: login.name,
            id: login.id,
            
        })
        
        const response = { 
            email,
            token,
            name: login.name, 
            role: login.roleId
        }

        return res.status(200).json(response)
    }
}

export default {
    login,
    register
}