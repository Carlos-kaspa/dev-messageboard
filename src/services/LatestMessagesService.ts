import { prismaClient } from "../prisma";

export class LatestMessagesService {
    async execute(amount?: number) {
        try {
            return await prismaClient.message.findMany({
                take: amount ? amount : 3,
                orderBy: {
                    created_at: 'asc'
                },
                include: {
                    user: true
                }
            })
        } catch(err) {
            return []
        }
        
    }
}