import { Request, Response, NextFunction } from 'express'

import { user } from '../../services'
import { verify } from '../../controllers/auth/token'

const verifyAccountExist = async (req: Request, res: Response, next: NextFunction) => {
    const { email } = req.body

    const verify = await user.getUser({ email })

    if (verify) {
        const message =  'Usuário já cadastrado'

        return res.status(401).json(message)
    }

    return next()
}

const verifyAccountNotExist = async (req: Request, res: Response, next: NextFunction) => {
    const { email } = req.body

    const verify = await user.getUser({ email })

    if (!verify) {
        const message = 'Usuário não cadastrado'

        return res.status(404).json(message)
    }

    return next()
}

const verifyAccountPassword = async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body

    const verify = await user.getUser({ email })

    if (verify?.password !== password) {
        const message =  'Senha inválida'

        return res.status(401).json(message)
    }

    return next()
}

const verifyRole = async (req: Request, res: Response, next: NextFunction) => {
    const { email, roleId } = req.body

    const verify = await user.getUser({ email })

    if (verify?.roleId != roleId) {
        const message = 'Houve um erro na permissão, você será redirecionado para a tela de login'

        return res.status(401).json(message)
    }

    return next()
}

const verifyAuth = async (req: Request, res: Response, next: NextFunction) => {
    const { authorization } = req.headers

    const token = verify(String(authorization)) as any

    if (token) {
        const userValidation = await user.getUser({ email: token?.email })

        if (!userValidation) {
            const message = 'Você não tem autorização para isso'
    
            return res.status(401).json(message)
        }
    } else {
        const message = 'Você não tem um token'

        return res.status(401).json(message)
    }

    return next()
}

export default {
    verifyAccountExist,
    verifyAccountNotExist,
    verifyAccountPassword,
    verifyRole,
    verifyAuth
}