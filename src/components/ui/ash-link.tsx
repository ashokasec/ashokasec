import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link, { LinkProps } from "next/link";
import React, { ReactNode } from "react";

// Define the types for the AshLink props
interface AshLinkProps extends LinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  color?: "red" | "blue" | "yellow" | "green";
  rel?: string;
}

const colorClasses = {
  blue: "bg-blue-600/15 hover:border-blue-500/30 text-blue-500",
  red: "bg-red-600/15 hover:border-red-500/30 text-red-500",
  yellow: "bg-yellow-600/15 hover:border-yellow-500/30 text-yellow-500",
  green: "bg-green-600/15 hover:border-green-500/30 text-green-500",
};

const AshLink: React.FC<AshLinkProps> = ({
  href,
  children,
  className,
  target,
  color = "blue",
  rel,
  ...props
}) => {
  const relValue = target === "_blank" ? "noopener noreferrer" : rel;

  return (
    <Link
      href={href}
      {...props}
      className={cn(
        "border border-transparent rounded-[2px] pl-1 pr-0.5 py-0.5 transition-colors items-center gap-x-0.5 inline-flex w-fit font-medium",
        colorClasses[color],
        className
      )}
      target={target}
      rel={relValue}
    >
      <span>{children}</span>
      <span className="select-none">
        <ArrowUpRight size={16} />
      </span>
    </Link>
  );
};

export default AshLink;