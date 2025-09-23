export interface ProjectLink {
    label: string;
    type: 'github' | 'live' | 'demo';
    url: string;
}

export interface ProjectDetails {
    overview: string;
    features: string[];
    techStack: string[];
    challenges: string[];
    role: string[];
}

export interface ProjectData {
    id: string;
    label: string;
    title: string;
    description: string;
    details: ProjectDetails;
    links: ProjectLink[];
    image: string;
    image2?: string;
}

export interface ProjectCardProps {
    project: ProjectData;
}
