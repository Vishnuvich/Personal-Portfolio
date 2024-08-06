"use server";

import prisma from "../utils/db";


export async function getProjects() {
    const projects = await prisma.project.findMany({ 
        include: {
            technologies: {
                select: {
                    name: true
                }
            }
        }
    });
    return projects;
};

export async function getProjectBySlug(slug: string) {
    const project = await prisma.project.findFirst({
        where: {
            slug: slug
        },
        include: {
            technologies: {
                select: {
                    name: true
                }
            }
        }
    })
    if (!project) {
        throw new Error(`No project found with slug ${slug}`);
    }
    return project;
}