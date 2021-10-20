import { Request, Response } from 'express'
import { LatestMessagesService } from '../services/LatestMessagesService'
import { UserProfileService } from '../services/UserProfileService'

export class UserProfileController {
    async handle(req: Request,res:Response) {
        const { user_id } = req
       const service = new UserProfileService()
       return res.json(await service.execute(user_id))
    }
}