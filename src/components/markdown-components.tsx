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
          "text-2xl sm:text-3xl md:text-4xl": level === 1,
          "text-xl sm:text-2xl": level === 2,
          "text-lg sm:text-xl": level === 3,
          "text-base sm:text-lg": level === 4,
        },
        className
      ),
    },
    children
  );
}
