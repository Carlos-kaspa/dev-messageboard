import { AuthUserService } from "../services/AuthUserService";
import { Request, Response } from 'express'

export class AuthUserController {
    async handle(req: Request,res:Response) {
        const { code } = req.body

        try {
            const service = new AuthUserService()
            return res.json(await service.execute(code))
        } catch(err) {
            return res.status(err.response.status).json({ error: err.message})
        }
        
    }
}