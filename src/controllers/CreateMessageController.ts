import { Request, Response } from 'express'
import { CreateMessageService } from "../services/CreateMessageService";

export class CreateMessageController {
    async handle(req: Request,res:Response) {
        const { message } = req.body
        const { user_id } = req
      
        try {
            const service = new CreateMessageService()
            return res.json(await service.execute(message, String(user_id)))
        } catch(err) {
            return res.status(err.response.status).json({ error: err.message})
        }
        
    }
}