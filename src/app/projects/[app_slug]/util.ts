import { existsSync, readdirSync, readFileSync } from 'fs';
import path from 'path';
import matter from 'gray-matter';

export type DocumentType = "projects" | "blogs" | "research";

function getDocumentsPath(documentType: DocumentType): string {
    return path.join(process.cwd(), 'src', 'data', documentType);
}

export type ProjectMeta = {
    title: string;
    description: string;
    timeline: string;
    key: string;
    link: string;
    github: string | undefined
}

export function getAllDocuments(documentType: DocumentType) {
    try {
        const documentPath = getDocumentsPath(documentType);
        if (!existsSync(documentPath)) {
            throw new Error(`Directory not found: ${documentPath}`);
        }

        const files = readdirSync(documentPath).filter((file) => file.endsWith(".md"));

        return files.map((file) => {
            const filePath = path.join(documentPath, file);
            const content = readFileSync(filePath, 'utf-8');
            const matterResult = matter(content);

            return {
                title: matterResult.data.title || "Untitled Project",
                description: matterResult.data.description || "No description available",
                key: matterResult.data.key || "No description available",
                link: matterResult.data.link,
                github: matterResult.data.github,
                timeline: matterResult.data.timeline
            } as ProjectMeta;
        });
    } catch (error) {
        console.error("Error fetching documents:", error);
        return [];
    }
}

export function getDocumentContent({ documentType, slug }: { documentType: DocumentType; slug: string }) {
    try {
        const documentPath = path.join(process.cwd(), 'src', 'data', documentType, `${slug}.md`);

        if (!existsSync(documentPath)) {
            throw new Error(`File not found: ${documentPath}`);
        }

        const fileContent = readFileSync(documentPath, 'utf-8');
        const matterResult = matter(fileContent);

        switch (documentType) {
            case "projects":
                return {
                    content: matterResult.content,
                    metadata: {
                        title: matterResult.data.title || "Untitled Project",
                        description: matterResult.data.description || "No description available",
                        key: matterResult.data.key || "No description available",
                        link: matterResult.data.link,
                        github: matterResult.data.github,
                        timeline: matterResult.data.timeline
                    } as ProjectMeta,
                }
            default:
                break;
        }
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
        return {
            content: null,
            metadata: {
                title: null,
                description: null,
                slug,
                error: errorMessage,
            },
        };
    }
}
