import { Request, Response } from 'express'
import { LatestMessagesService } from '../services/LatestMessagesService'

export class LatestMessagesController {
    async handle(req: Request,res:Response) {
        const { amount } = req.query
       const service = new LatestMessagesService()
       return res.json(await service.execute(Number(amount)))
    }
}