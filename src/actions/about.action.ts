"use server"

import prisma from "../utils/db"

export async function getAboutData() {
    return await prisma.about.findFirst({
        include: {
            skills: {
                select: {
                    name: true,
                }
            }
        }
    })
}