"use server";

import prisma from "../utils/db";

export default async function getHeroData() {
    return await prisma.hero.findFirst();
}

export async function getHeaderData() {
    return await prisma.hero.findFirst({
        select:{
            avatarImage: true,
            headerDescription: true
        }
    });
}