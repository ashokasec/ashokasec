import { ADMIN_SOCIALS } from "@/lib/config";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <section className="w-fit mx-auto">
        <ul className="flex items-center space-x-2">
          {[
            {
              href: ADMIN_SOCIALS.github,
              icon: "/icons/github-mark-white.svg",
              alt: "Github Logo",
              width: 25,
              height: 25,
            },
            {
              href: ADMIN_SOCIALS.x,
              icon: "/icons/x-logo.svg",
              alt: "X Logo",
              width: 14,
              height: 14,
            },
            {
              href: ADMIN_SOCIALS.telegram,
              icon: "/icons/telegram.svg",
              alt: "Telegram Logo",
              width: 20,
              height: 20,
            },
          ].map((link, index) => (
            <li key={index}>
              <Link href={link.href} target="_blank">
                <div className="bg-[#111113] border border-transparent hover:border-blue-600/25 size-11 grid place-items-center rounded-full">
                  <Image
                    src={link.icon}
                    width={link.width}
                    height={link.height}
                    alt={link.alt}
                    className="opacity-50"
                  />
                </div>
              </Link>
            </li>
          ))}
        </ul>
    </section>
  );
};

export default Contact;
