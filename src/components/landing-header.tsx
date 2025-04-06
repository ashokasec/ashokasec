import { geistSans, spectral } from "@/lib/fonts/fonts";
import { Github, X } from "@/lib/logo";
import { cn } from "@/lib/utils";
import { Mail } from "lucide-react";
import Link from "next/link";
import React from "react";

function HighlighDescription({ children }: { children: React.ReactNode }) {
  return (
    <strong
      className="text-black text-[15px] md:text-[17px] font-medium md:font-normal"
      style={spectral.style}
    >
      {children}
    </strong>
  );
}

const SocialLink = ({
  href,
  icon,
  className,
}: {
  href: string;
  className?: string;
  icon: React.ReactNode;
}) => {
  return (
    <li>
      <Link
        href={href}
        target="_blank"
        className={cn(
          "size-9 grid place-items-center cursor-pointer border border-transparent hover:border-border transition-all rounded-md bg-white/[0.025] hover:bg-black/[0.05]",
          className
        )}
      >
        {icon}
      </Link>
    </li>
  );
};

const LandingHeader = () => {
  return (
    <div className="max-w-3xl mx-auto py-28">
      <h1
        style={spectral.style}
        className="text-2xl sm:text-3xl md:text-4xl w-fit mx-auto"
      >
        Hey there, I&apos;m Shivam!
      </h1>
      <p
        className="text-gray-500 sm:text-gray-600 text-sm md:text-base text-center mt-6 leading-relaxed px-4"
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
          href="mailto:work.shivam@proton.me"
          icon={<Mail size={20} />}
        />
      </ul>
    </div>
  );
};

export default LandingHeader;
