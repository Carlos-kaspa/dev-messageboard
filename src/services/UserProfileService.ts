import { prismaClient } from "../prisma";

export class UserProfileService {
    async execute(user_id: any) {
        return await prismaClient.user.findFirst({
            where: {
                id: Number(user_id)
            }
        })
    }
}