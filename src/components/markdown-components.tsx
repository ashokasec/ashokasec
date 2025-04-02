import { spectral } from "@/lib/fonts/fonts";
import { cn } from "@/lib/utils";
import { createElement } from "react";

export function Heading({
  level = 1,
  children,
  className,
}: {
  level?: number;
  children: React.ReactNode;
  className?: string;
}) {
  const HeadingTag = `h${Math.min(Math.max(level, 1), 4)}`;

  return createElement(
    HeadingTag,
    {
      style: spectral.style,
      className: cn(
        "text-[#282829] font-semibold",
        {
          "text-3xl": level === 1,
          "text-2xl": level === 2,
          "text-xl": level === 3,
          "text-lg": level === 4,
        },
        className
      ),
    },
    children
  );
}
