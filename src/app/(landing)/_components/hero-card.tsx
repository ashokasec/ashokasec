import { ADMIN } from "@/lib/config";
import { space_grotesk } from "@/lib/fonts";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <>
    <div className="h-0">
      <div className="w-full h-10 relative">
        <Image
          src="/images/banner.jpeg"
          className="absolute left-0 top-0 translate-y-10 -z-10 h-full w-full object-cover blur-3xl saturate-200 brightness-125 scale-105"
          alt=""
          layout="fill"
          />
      </div>
          </div>
      <section className="bg-gradient-to-b from-blue-600/40 to-[#0f0f11] rounded-md overflow-clip p-px">
        <div
          className=" bg-white/[0.025] backdrop-blur-md pt-20 !bg-cover !bg-no-repeat !bg-center rounded-md"
          style={{
            background: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(15, 15, 17, 0.85), rgb(15, 15, 17)), url("/images/banner.jpeg")`,
          }}
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center p-4 sm:space-x-4 z-10">
            <figure className="aspect-square min-w-[55px] min-h-[55px] max-w-[65px] max-h-[65px] rounded-full border overflow-clip">
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
                <span className="text-[#6583fe]">
                  fill <span style={space_grotesk.style}>gap_s</span>
                </span>{" "}
                in existing solutions based on personal needs.
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
