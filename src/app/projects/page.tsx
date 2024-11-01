import { ContentType, getAllPosts, Project } from "@/lib/content-info";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const page = async () => {
  const posts: Project[] = await getAllPosts(
    "/src/app/projects/(all-projects)",
    ContentType.Project
  );

  return (
    <div>
      {posts.map((project) => (
        <div key={project.title}>
          <div
            style={{
              border: "1px solid #ddd",
              padding: "16px",
              margin: "16px 0",
              cursor: "pointer",
            }}
          >
            <h2>{project.title}</h2>
            <p>
              <strong>Date:</strong> {project.date}
            </p>
            <p>
              <strong>Author:</strong> {project.author}
            </p>
            <p>
              <strong>Project Type:</strong> {project.projectType}
            </p>
            <p>
              <strong>Use Case:</strong> {project.useCase}
            </p>
            <p>
              <strong>Technologies Used:</strong> {project.techUsed.join(", ")}
            </p>
            <p>
              <strong>Status:</strong> {project.status}
            </p>
            <div className="flex space-x-2">
              <Link
                href={project.repository}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>Repository</Button>
              </Link>
              <Link
                href={`/projects/${project.slug}/live`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>Live Demo</Button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default page;
