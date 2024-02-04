import jwt from 'jsonwebtoken'

import { IToken } from '../../interfaces'
import { SECRET } from '../../constants'

export const sign = ({ name }: IToken) => {
    const config = {
        expiresIn: '7d'
    }

    return jwt.sign({ name }, SECRET, config)
}

export const verify = (token: string) => {
    try {
        return jwt.verify(token, SECRET)
    } catch (error) {
        return null
    }
}