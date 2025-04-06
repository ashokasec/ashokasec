import { getAllDocuments } from "@/app/projects/[app_slug]/util";
import { geistSans } from "@/lib/fonts/fonts";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const ProjectCard = ({
  title,
  href,
  imageSrc,
  duration,
  description,
  className,
}: {
  title: string;
  href: string;
  imageSrc: string;
  duration: string;
  description: string;
  className?: string;
}) => {
  return (
    <Link className="group" href={href}>
      <figure
        className={cn(
          "grid place-items-center relative border md:rounded-[4px] overflow-hidden border-transparent transition-all",
          className
        )}
      >
        <img src={imageSrc} className="select-none" />
      </figure>
      <div className="w-full">
        <div className="flex flex-col-reverse md:flex-row md:items-center px-1 pt-3 pb-2 justify-between w-full">
          <h3
            className="tracking-wide font-medium group-hover:underline underline-offset-2"
            style={geistSans.style}
          >
            {title}
          </h3>
          <div className="text-[13px] mb-1.5 md:mb-0">{duration}</div>
        </div>
        <p className="text-sm md:text-[15px] px-1 text-gray-600">
          {description}
        </p>
      </div>
    </Link>
  );
};

const LandingProjects = () => {
  const projects = getAllDocuments("projects");
  return (
    <div className="max-w-[90rem] mx-auto grid md:grid-cols-2 gap-x-6 gap-y-9 md:gap-y-8 pb-6 sm:pb-20 px-2">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          duration={project.timeline}
          href={`/projects/${project.key}`}
          imageSrc={`/images/projects/${project.key}/cover.png`}
        />
      ))}
    </div>
  );
};

export default LandingProjects;
