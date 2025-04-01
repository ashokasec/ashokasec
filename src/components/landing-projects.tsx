import { projects } from "@/data/projects";
import { geistSans } from "@/lib/fonts/fonts";
import Link from "next/link";
import React from "react";

const ProjectCard = ({
  title,
  href,
  imageSrc,
  duration,
  description,
}: {
  title: string;
  href: string;
  imageSrc: string;
  duration: string;
  description: string;
}) => {
  return (
    <Link className="group" href={href} target="_blank">
      <figure className="grid place-items-center relative">
        <img src={imageSrc} className="rounded-[3px] select-none" />
      </figure>
      <div className="w-full">
        <div className="flex items-center px-1 pt-3 pb-2 justify-between w-full">
          <h3
            className="tracking-wide font-medium group-hover:underline underline-offset-2"
            style={geistSans.style}
          >
            {title}
          </h3>
          <div className="text-[13px]">{duration}</div>
        </div>
        <p className="text-[15px] px-1 text-gray-600">{description}</p>
      </div>
    </Link>
  );
};

const LandingProjects = () => {
  return (
    <div className="max-w-[90rem] mx-auto grid grid-cols-2 gap-x-6 gap-y-8 pb-20">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.name}
          description={project.description}
          duration={project.timeline}
          href={project.link}
          imageSrc={`/images/projects/${project.coverKey}/cover.png`}
        />
      ))}
    </div>
  );
};

export default LandingProjects;
