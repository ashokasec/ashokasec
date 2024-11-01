import React from "react";
import "highlight.js/styles/github-dark.css";
import Markdown from "markdown-to-jsx";
import { H1, H2, Link as CustomLink } from "@/components/article-components";
import { notFound } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { ContentType, getContentOfOnePost } from "@/lib/content-info";

export const metadata = {
  title: "",
  authors: [
    {
      name: "ashokasec",
      url: "https://ashokasec.com",
    },
  ],
};

const isProjectContent = (metadata: any): metadata is { liveDemo: string; title: string } => {
    return metadata && metadata.liveDemo !== undefined && metadata.title !== undefined;
  };

const Page = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;

  const project = getContentOfOnePost(
    "/src/app/projects/(all-projects)",
    slug,
    ContentType.Project
  );

  if (!project.content) return notFound();

  if ("error" in project.metadata) {
    return notFound(); // or handle the error appropriately
  }

  // Now you can safely access project.metadata
  if (isProjectContent(project.metadata)) {
    metadata.title = `${project.metadata.title} | Project by @ashokasec`;

    return (
        <div className="md:mb-12 max-w-4xl mx-auto px-3 md:px-0 overflow-x-hidden">
          <Link href="/products">
            <div className="my-6 text-xs sm:text-sm bg-gray-200/5 pr-4 pl-2 py-1 sm:pr-3 sm:pl-2 sm:py-1.5 leading-none w-fit rounded-lg flex items-center">
              <ChevronLeft className="w-4 mr-1" /> Back
            </div>
          </Link>
          <article className="builds-article">
            <Markdown
              options={{
                overrides: {
                  h1: {
                    component: H1,
                  },
                  h2: {
                    component: H2,
                  },
                  a: {
                    component: CustomLink,
                  },
                },
              }}
            >
              {project.content}
            </Markdown>
          </article>
        </div>
      );
  }

  return notFound();
};

export default Page;
