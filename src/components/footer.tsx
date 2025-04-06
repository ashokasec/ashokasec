import { geistSans } from "@/lib/fonts/fonts";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full flex items-center h-20 border-t border-border/50">
      <div
        className="max-w-4xl w-full mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between px-3 lg:px-0 space-y-1.5 sm:space-y-0"
        style={geistSans.style}
      >
        <span className="text-sm md:text-[15px]">
          Not copyrighted, just{" "}
          <span className="bg-blue-600/20 text-blue-600 font-medium italic px-1 rounded-[2px]">
            emotionally
          </span>{" "}
          attached.
        </span>
        <span className="text-sm md:text-[15px]">Thank You 💙</span>
      </div>
    </footer>
  );
};

export default Footer;
