import { ContentType, getContentOfOnePost } from "@/lib/content-info";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "",
  authors: [
    {
      name: "ashokasec",
      url: "https://ashokasec.com",
    },
  ],
};

interface PageProps {
  params: { slug: string };
}

const isProjectContent = (metadata: any): metadata is { liveDemo: string; title: string } => {
  return metadata && metadata.liveDemo !== undefined && metadata.title !== undefined;
};

const Page = async ({ params }: PageProps) => {
  const { slug } = await params;

  const project = getContentOfOnePost(
    "/src/app/projects/(all-projects)",
    slug,
    ContentType.Project
  );

  if (!project.content) return notFound();

  // Check for errors in the metadata
  if ('error' in project.metadata) {
    return notFound(); // or handle the error appropriately
  }

  // Now you can safely access project.metadata
  if (isProjectContent(project.metadata)) {
    metadata.title = `${project.metadata.title} | Project by @ashokasec`;

    return (
      <div style={{ height: "100vh", width: "100%" }}>
        {project.metadata.liveDemo && (
          <iframe
            src={project.metadata.liveDemo}
            style={{ border: "none", height: "100%", width: "100%" }}
            allowFullScreen
          />
        )}
      </div>
    );
  }

  return notFound();
};

export default Page;
