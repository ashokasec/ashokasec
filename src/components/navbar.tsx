import { spectral } from "@/lib/fonts/fonts";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="w-full flex items-center h-16 sm:h-20 top-0 bg-white z-[1000] sticky border-b border-border/50">
      <nav className="max-w-4xl w-full mx-auto flex items-center justify-between px-3">
        <Link href="/">
          <img className="rounded-full size-10 sm:size-12" src="/images/avatar.png" />
        </Link>
        <ul className="flex text-[15px] sm:text-[17px] space-x-3 sm:space-x-4" style={spectral.style}>
          <li>
            <Link href="https://cdn.ashokasec.com/resume.pdf">Resume</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/blogs">Blogs</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
