import { existsSync, readdirSync, readFileSync } from 'fs';
import path from 'path';
import matter from 'gray-matter';

export enum ContentType {
    Project = 'Project',
    Blog = 'Blog',
}

// Define separate interfaces for each content type
export interface Project {
    title: string;
    date: string;
    author: string;
    projectType: 'Freelance' | 'Personal' | 'Open Source' | 'Commercial';
    useCase: string;
    techUsed: string[];
    status: 'Active' | 'In Development' | 'Client-Taken-Down' | 'Completed' | 'Archived';
    repository: string;
    liveDemo: string;
    slug: string;
}

interface Blog {
    title: string;
    date: string;
    author: string;
    description: string;
    tags: string[];
    slug: string;
}

// Define a union type for all content types
type Content = Project | Blog;

// Define an error type for content not found
type ContentWithError<T> = T | { error: string };

// Generic function for fetching all posts based on ContentType
export const getAllPosts = <T extends Content>(folder: string, type: ContentType): T[] => {
    const fileNames = readdirSync(path.join(process.cwd(), folder));
    return fileNames
        .filter((file) => file.endsWith('.mdx'))
        .map((file) => {
            const slug = file.replace('.mdx', '');
            const filePath = path.join(process.cwd(), folder, file);
            const content = readFileSync(filePath, 'utf-8');
            const { data } = matter(content);

            if (type === ContentType.Project) {
                return {
                    title: data.title,
                    date: data.date,
                    author: data.author,
                    projectType: data.projectType,
                    useCase: data.useCase,
                    techUsed: data.techUsed,
                    status: data.status,
                    repository: data.repository,
                    liveDemo: data.liveDemo,
                    slug,
                } as T;
            } else if (type === ContentType.Blog) {
                return {
                    title: data.title,
                    date: data.date,
                    author: data.author,
                    description: data.description,
                    tags: data.tags,
                    slug,
                } as T;
            }
            throw new Error("Unsupported content type");
        });
};

// Generic function for fetching a single post based on ContentType
export const getContentOfOnePost = <T extends Content>(folder: string, slug: string, type: ContentType): { content: string | null; metadata: ContentWithError<T> } => {
    const filePath = path.join(process.cwd(), folder, `${slug}.mdx`);

    if (!existsSync(filePath)) {
        return {
            content: null,
            metadata: { error: 'File not found' } as ContentWithError<T>,
        };
    }

    const file_content = readFileSync(filePath, 'utf-8');
    const matter_result = matter(file_content);

    const metadata = type === ContentType.Project ? {
        title: matter_result.data.title,
        date: matter_result.data.date,
        author: matter_result.data.author,
        projectType: matter_result.data.projectType,
        useCase: matter_result.data.useCase,
        techUsed: matter_result.data.techUsed,
        status: matter_result.data.status,
        repository: matter_result.data.repository,
        liveDemo: matter_result.data.liveDemo,
        slug,
    } as T : {
        title: matter_result.data.title,
        date: matter_result.data.date,
        author: matter_result.data.author,
        description: matter_result.data.description,
        tags: matter_result.data.tags,
        slug,
    } as T;

    return {
        content: matter_result.content,
        metadata,
    };
};
