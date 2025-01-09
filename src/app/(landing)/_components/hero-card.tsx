import { ADMIN } from "@/lib/config";
import { space_grotesk } from "@/lib/fonts";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="border border-blue-600/15 rounded-md bg-white/[0.025] backdrop-blur-md">
      <div className="flex flex-col sm:flex-row items-start sm:items-center p-4 sm:space-x-4">
        <figure className="aspect-square min-w-[55px] min-h-[55px] max-w-[75px] max-h-[75px] rounded-full overflow-clip">
          <Image
            src="https://pbs.twimg.com/profile_images/1877222065260081154/KXNK62uu_400x400.jpg"
            alt="image"
            width={100}
            height={100}
          />
        </figure>
        <div className="space-y-1 mt-3 sm:mt-0">
          <p
            style={space_grotesk.style}
            className="text-2xl font-medium opacity-80"
          >
            {ADMIN.name}
            <span className="opacity-[0.02] cursor-default hidden sm:inline">
              {" "}
              : {ADMIN.username}
            </span>
          </p>
          <h1 className="text-sm sm:text-[15px] text-[#a1a1a1]">
            I develop apps to{" "}
            <span className="text-[#6f8cff]">
              fill <span style={space_grotesk.style}>gap_s</span>
            </span>{" "}
            in existing solutions based on personal needs.
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
