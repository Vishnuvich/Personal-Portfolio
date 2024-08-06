"use server"

import prisma from "../utils/db"

export async function getExperienceData() {
    return await prisma.experience.findMany({
        include: {
            technologies: {
                select: {
                    name: true,
                }
            }
        }
    })
}