import { spectral } from "@/lib/fonts/fonts";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="w-full flex items-center h-20 top-0 bg-white z-[1000] sticky border-b border-border/50">
      <nav className="max-w-4xl w-full mx-auto flex items-center justify-between">
        <Link href="/">
          <img width={50} className="rounded-full" src="/images/avatar.png" />
        </Link>
        <ul className="flex text-[17px] space-x-4" style={spectral.style}>
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
