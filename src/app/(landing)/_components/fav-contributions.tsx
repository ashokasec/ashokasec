import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Contribution = {
  projectImage: string;
  projectName: string;
  prNum: string;
  projectLink: string;
  prTitle: string;
  prLink: string;
  details: string;
};

const contributions = [
  {
    projectName: "Payload CMS",
    projectImage: "https://avatars.githubusercontent.com/u/62968818?s=200&v=4",
    projectLink: "https://github.com/payloadcms/payload",
    prTitle: "Fixed Open Redirection Vulnerability",
    prNum: "#243",
    prLink: "https://github.com/payloadcms/website/pull/243",
    details:
      "Fixed a login vulnerability that could let attackers redirect users to malicious websites. Added checks to ensure only trusted links are allowed.",
  },
  {
    projectName: "Sanity Esports",
    projectImage:
      "https://raw.githubusercontent.com/dinxsh/sanity/refs/heads/master/public/sanity_esports_logo.jpg",
    projectLink: "https://github.com/dinxsh/sanity",
    prTitle: "add: theme mode toggle",
    prNum: "#219",
    prLink: "https://github.com/dinxsh/sanity/pull/219",
    details:
      "Added a light/dark mode toggle, improved layout efficiency by moving components to a new Provider.jsx, and enhanced the UI for better consistency. Dark mode support was implemented, along with refined gradients and updated dependencies for improved theming.",
  },
];

const ContributionItem: React.FC<Contribution> = ({
  projectImage,
  projectName,
  projectLink,
  prNum,
  prTitle,
  prLink,
  details,
}) => (
  <div className="w-full transition-all duration-300 py-4">
    <div className="flex items-center space-x-3">
      <figure className="max-w-[35px] min-w-[35px] aspect-square overflow-clip border rounded-full">
        <Image
          src={projectImage}
          width={35}
          height={35}
          alt={`${projectName}'s logo`}
        />
      </figure>
      <div className="flex items-center justify-between w-full pr-4">
        <h3 className="text-base font-medium text-gray-300 hover:underline">
          <Link
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            {projectName}
          </Link>
        </h3>
        <p className="text-[13px] text-gray-400 hover:underline underline-offset-2 cursor-pointer">
          <Link
            href={prLink}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="flex items-center"
          >
            Github <ExternalLink className="mb-[3px] ml-0.5" size={14} />
          </Link>
        </p>
      </div>
    </div>
    <div className="pl-[47px]">
      <p className="text-gray-600 text-sm">
        <Link
          href={prLink}
          className="font-medium group"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text-main group-hover:underline">{prTitle}</span>
          <span className="text-gray-400/60 ml-2 group-hover:underline">
            {prNum}
          </span>
        </Link>
      </p>
      <div className="flex space-x-1 my-2.5">
        {Array.from({ length: 3 }).map((_, idx) => (
          <div
            key={idx}
            className="min-w-[3px] max-w-[4px] aspect-square rounded-full bg-gradient-to-b from-main/80 to-transparent"
          ></div>
        ))}
      </div>
      <p className="text-gray-400/70 text-sm">{details}</p>
    </div>
  </div>
);

const FavContribs: React.FC = () => {
  return (
    <section>
      <div className="grid place-items-center w-fit mx-auto">
        <h4 className="text-[15px]">Open-Source Contributions</h4>
        <div className="h-[2px] w-1/2 bg-main mt-1 mb-4"></div>
      </div>
      <div className="flex flex-col items-start sm:items-center px-4 bg-white/[0.025] border border-blue-600/15 rounded-md backdrop-blur-md divide-y">
        {contributions.map((contribution, index) => (
          <ContributionItem key={index} {...contribution} />
        ))}
      </div>
    </section>
  );
};

export default FavContribs;
