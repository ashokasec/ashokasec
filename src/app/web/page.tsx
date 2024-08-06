import Link from "next/link";
import React from "react";

const ProjectWebOne = ({
  name,
  link,
  title,
  description,
  note,
}: {
  name: string;
  link: string;
  title?: string;
  description: string;
  note?: string;
}) => {
  return (
    <div>
      <h2 className="text-[17px] font-semibold">
        <Link href={link} target="_blank">
          {name}
        </Link>
        {title && <> - {title}</>}
      </h2>
      <p className="">{description}</p>
      {note && (
        <p className="text-sm mt-1 font-medium text-gray-600">Note: {note}</p>
      )}
    </div>
  );
};

const page = () => {
  return (
    <article className="web1 p-4">
      <h1 className="text-3xl md:text-4xl font-bold">Shivam Gupta</h1>
      <p className="username">@ashokasec</p>
      <div className="my-6">
        <p>
          I develop apps to fill gaps in existing solutions based on personal
          needs. If they don&#39;t exist in the market, I create them from scratch.
        </p>
        <p>
          Additionaly, I write code for{" "}
          <Link
            href="https://twitter.com/osintambition"
            className="font-semibold"
          >
            Osint Ambition
          </Link>{" "}
          and{" "}
          <Link
            href="https://chakravyu.com/"
            className="font-semibold"
          >
            Chakravyu
          </Link>{" "}
          on freelance basis.
        </p>
      </div>

      <div className="my-6">
        <h3 className="text-2xl font-bold my-2">Projects</h3>
        <div className="space-y-2">
          <ProjectWebOne
            name="Likhavat"
            link="https://github.com/ashokasec/likhavat"
            title="Centralized Form Management System (Under Development)"
            description="Likhavat simplifies form management, freeing users from complex
          backend setups to focus on designing, managing, and analyzing forms
          effortlessly."
            note="Some of my connections visited this repo and saw potential for it to become a good SaaS. They suggested making it private and working more on it, so the repo is no longer public."
          />
          <ProjectWebOne
            name="Ketu"
            link="https://github.com/ashokasec/ketu"
            title="Remote Control and Surveillance Tool"
            description="Ketu is a tool designed to facilitate remote control and
          surveillance. It establishes a seamless connection between a server
          and a client, enabling the exchange of key logs, WIFI passwords,
          screenshots, clipboard content, and system information."
          />
          <ProjectWebOne
            name="Express-Auth"
            link="https://github.com/ashokasec/ketu"
            title="Remote Control and Surveillance Tool"
            description=" I am writing my own authentication for the API from the scratch to understand the nature of authentication deeper. This includes learning more on the CSRF tokens, access and the refresh tokens as well as the general security measures."
          />
          <ProjectWebOne
            name="Nayan"
            link="https://github.com/ashokasec/nayan"
            title="Personal collection of UI components"
            description="I created this library for myself and for anyone else who might find it useful. Every time I make a new component for one of my projects, I'll add it here. I only include components that I've made and used in real-world projects and websites. This way, I can easily reuse my work, and you can benefit from it too."
          />
        </div>
      </div>

      <div className="my-6">
        <h3 className="text-2xl font-bold my-2">Work Projects</h3>
        <div className="space-y-2">
          <ProjectWebOne
            name="Osint Ambition's Newsletter"
            link="https://newsletter.osintambition.org"
            description="The frontend is all done by me, and I've used some apis by a fix/hack, so that it reduces the effort for us to create a new api for accepting emails for newsletter."
          />
        </div>
      </div>

      <div className="my-6">
        <h3 className="text-2xl font-bold my-2">Social</h3>
        <ul>
          <li>
            Twitter:{" "}
            <Link href="https://twitter.com/ashokasec" target="_blank">
              ashokasec
            </Link>
          </li>
          <li>
            Github:{" "}
            <Link href="https://github.com/ashokasec" target="_blank">
              ashokasec
            </Link>
          </li>
          <li>
            Telegram:{" "}
            <Link href="https://telegram.me/ashokasec" target="_blank">
              ashokasec
            </Link>{" "}
            (for quick reply)
          </li>
          <li>
            Instagram:{" "}
            <Link href="https://instagram.com/ashokasec" target="_blank">
              ashokasec
            </Link>
          </li>
        </ul>
      </div>

      <p className="font-semibold">Thank You 💖</p>
      <p>I&#39;m open to new opportunities and would love to connect with you.</p>
    </article>
  );
};

export default page;
