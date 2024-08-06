interface SanityBase {
    _createdAt: string,
    _id: any,
    _rv: string,
    _updatedAt: string,
}

export interface HeroData {
    id: string
    title: string,
    designation: string,
    organization: string,
    companyUrl: string,
    resume: string
    content: string,
    headerDescription: string,
    avatarImage: string,
    createdAt: Date,
    updatedAt: Date,
}

export interface HeaderData {
    avatarImage: string,
    headerDescription: string,
}

export interface AboutData {
    id: string,
    createdAt: Date,
    updatedAt: Date,
    aboutContent: string,
    skills: { name: string }[],
}

export interface ExperienceData {
    id: string
    companyName: string
    companyUrl: string
    location: string
    position: string
    startDate: Date
    endDate: Date
    present: boolean
    description: string
    technologies: { name: string }[]
    createdAt: Date
    updatedAt: Date
}

export interface ProjectData {
    id: string
    title: string
    slug: string
    category: string
    image: string
    description: string
    technologies: { name: string }[]
    githubUrl: string
    liveUrl: string
    createdAt: Date
    updatedAt: Date
}