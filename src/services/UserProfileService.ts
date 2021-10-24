import { prismaClient } from "../prisma";

export class UserProfileService {
    async execute(user_id: number) {
        return await prismaClient.user.findFirst({
            where: {
                id: user_id
            }
        })
    }
}