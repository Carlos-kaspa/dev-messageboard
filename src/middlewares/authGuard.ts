import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'


interface IPayload {
    sub: string
}

export const authGuard = (request: Request, response: Response, next: NextFunction) => {
    const { authorization } = request.headers
    if(!authorization) {
        return response.status(401).json({
            error: "token não informado"
        })
    }
    const token = authorization.split(' ')[1]

    try {
        const { sub } = verify(token, process.env.JWT_SECRET) as IPayload
        request.user_id = sub
        return next()
    } catch(err) {
        return response.status(401).json({
            error: "token expirado"
        })
    }
}