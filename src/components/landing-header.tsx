import { geistSans, spectral } from "@/lib/fonts/fonts";
import { Github, X } from "@/lib/logo";
import { Mail } from "lucide-react";
import Link from "next/link";
import React from "react";

function HighlighDescription({ children }: { children: React.ReactNode }) {
  return (
    <strong
      className="text-black text-[17px] font-normal"
      style={spectral.style}
    >
      {children}
    </strong>
  );
}

const SocialLink = ({
  href,
  icon,
}: {
  href: string;
  icon: React.ReactNode;
}) => {
  return (
    <li>
      <Link
        href={href}
        target="_blank"
        className="size-9 grid place-items-center cursor-pointer border border-transparent hover:border-border transition-all rounded-md bg-white/[0.025] hover:bg-black/[0.05]"
      >
        {icon}
      </Link>
    </li>
  );
};

const LandingHeader = () => {
  return (
    <div className="max-w-3xl mx-auto py-28">
      <h1 style={spectral.style} className="text-4xl w-fit mx-auto">
        Hey there, I&apos;m Shivam!
      </h1>
      <p
        className="text-gray-600 text-center mt-6 leading-relaxed"
        style={geistSans.style}
      >
        I am a <HighlighDescription>full-stack developer</HighlighDescription>{" "}
        from <HighlighDescription>India</HighlighDescription>, specializing in{" "}
        <HighlighDescription>improving</HighlighDescription> and{" "}
        <HighlighDescription>refining</HighlighDescription> existing products
        with better UI, UX, and functionality. I build{" "}
        <HighlighDescription>secure</HighlighDescription>,{" "}
        <HighlighDescription>scalable</HighlighDescription>, and{" "}
        <HighlighDescription>efficient</HighlighDescription> platforms using
        modern web technologies like{" "}
        <HighlighDescription>Next.Js</HighlighDescription> and{" "}
        <HighlighDescription>Hono.Js</HighlighDescription>.
      </p>
      <ul className="flex items-center justify-center space-x-2 mt-6">
        <SocialLink
          href="https://github.com/ashokasec"
          icon={<Github size={20} />}
        />
        <SocialLink href="https://x.com/ashokasec" icon={<X size={19} />} />
        <SocialLink
          href="https://github.com/ashokasec"
          icon={<Mail size={20} />}
        />
      </ul>
    </div>
  );
};

export default LandingHeader;
