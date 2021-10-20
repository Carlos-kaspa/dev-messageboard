import { prismaClient } from "../prisma";

export class LatestMessagesService {
    async execute(amount?: number) {
        return await prismaClient.message.findMany({
            take: amount ? amount : 3,
            orderBy: {
                created_at: 'desc'
            },
            include: {
                user: true
            }
        })
    }
}