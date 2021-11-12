import { Request, Response } from 'express'
import { CreateMessageService } from "../services/CreateMessageService";

export class CreateMessageController {
    async handle(req: Request,res:Response) {
        const { message } = req.body
        const { user_id } = req
      
        try {
            const service = new CreateMessageService()
            return res.json(await service.execute(message, Number(user_id)))
        } catch(err) {
            console.log('err', err)
            return res.status(500).json({ error: err.message})
        }
        
    }
}