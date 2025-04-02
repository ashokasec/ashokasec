// Static Site Generated Page
import React from "react";
import { getAllDocuments, getDocumentContent } from "./util";
import Markdown from "markdown-to-jsx";
import { Heading } from "@/components/markdown-components";
import { geistSans, spectral } from "@/lib/fonts/fonts";

export async function generateStaticParams() {
  const projects = getAllDocuments("projects");
  return projects.map((project) => ({ app_slug: project.key }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ app_slug: string }>;
}) {
  const { app_slug } = await params;
  const paper = await getDocumentContent({
    documentType: "projects",
    slug: app_slug,
  });

  return {
    title: paper?.metadata?.title || "Project",
    description: paper?.metadata?.description || "",
  };
}

async function Page({ params }: { params: Promise<{ app_slug: string }> }) {
  const { app_slug: slug } = await params;
  const paper = await getDocumentContent({ documentType: "projects", slug });

  return (
    <main className="py-10">
      <div className="leading-none grid place-items-center pt-2 pb-8">
        <span
          style={geistSans.style}
          className="text-sm font-medium text-[#595959] tracking-wide mx-auto w-fit hover:-translate-y-1 transition-all duration-300 cursor-pointer rounded-t-md border px-4 pt-1.5 pb-1 border-b-0 border-transparent hover:border-border"
        >
          Project
        </span>
      </div>
      {paper?.content ? (
        <article
          className="paper max-w-5xl mx-auto text-[17px] sm:text-lg md:text-[19px]"
          style={spectral.style}
        >
          <Heading level={1} className="text-center">
            {paper.metadata.title}
          </Heading>
          <div className="leading-none grid place-items-center py-4">
            <time
              style={geistSans.style}
              className="text-sm tracking-wide mx-auto w-fit"
            >
              {paper.metadata.timeline}
            </time>
          </div>
          <p className="text-[#282829] text-center mt-6" style={spectral.style}>
            {paper.metadata.description}
          </p>
          <img
            src={`/images/projects/${slug}/cover.png`}
            alt={paper.metadata.title}
          />
          <Markdown
            options={{
              overrides: {
                h1: {
                  component: ({ children }) => (
                    <Heading level={1}>{children}</Heading>
                  ),
                },
                h2: {
                  component: ({ children }) => (
                    <Heading level={2}>{children}</Heading>
                  ),
                },
                h3: {
                  component: ({ children }) => (
                    <Heading level={3}>{children}</Heading>
                  ),
                },
                h4: {
                  component: ({ children }) => (
                    <Heading level={4}>{children}</Heading>
                  ),
                },
              },
            }}
          >
            {paper.content}
          </Markdown>
        </article>
      ) : (
        <p>No content available</p>
      )}
    </main>
  );
}

// This enables static generation
export const dynamic = "force-static";

export default Page;
