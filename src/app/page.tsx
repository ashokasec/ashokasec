import Image from "next/image";
import Person from "@/assets/person-face.jpg";
import Link from "next/link";
import ProjectContainer from "@/components/ProjectContainer";
import TransitUp from "@/components/transition/TransitUp";
import TransitUp2 from "@/components/transition/TransitUp2";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="x-fix py-10 md:py-32">
        <TransitUp>
          <div className="lg:scale-100 flex bg-[#eef4ff] p-3 rounded-md w-fit space-x-3 border border-[#1969ff1f]">
            <figure className="hidden md:block">
              <Image
                src={Person}
                width={75}
                alt="ashokasec in person"
                className="rounded-md"
              />
            </figure>
            <figure className="block !m-0 md:hidden">
              <Image
                src={Person}
                width={50}
                alt="ashokasec in person"
                className="rounded-md"
              />
            </figure>
            <div className="flex flex-col justify-center pr-8">
              <h2 className="font-inter font-semibold text-gray-800 text-xl leading-none">
                Shivam Gupta
              </h2>
              <Link
                href="https://github.com/ashokasec"
                target="_blank"
                className="w-fit"
              >
                <h3 className="font-inter font-medium text-gray-700 text-[15px] leading-none mt-1 mb-1 md:mb-3 hover:text-primary transition">
                  @ashokasec
                </h3>
              </Link>
              <div className="space-x-1 hidden md:block">
                <span className="bg-primary text-white text-[15px] leading-none py-1 rounded-md px-2">
                  Full Stack Developer
                </span>
                <span className="bg-primary text-white text-[15px] leading-none py-1 rounded-md px-2">
                  Product Maker
                </span>
              </div>
            </div>
          </div>
          <div className="space-x-1 mt-4 block md:hidden">
            <span className="bg-primary text-white text-[15px] leading-none py-1 rounded-md px-2">
              Full Stack Developer
            </span>
            <span className="bg-primary text-white text-[15px] leading-none py-1 rounded-md px-2">
              Product Maker
            </span>
          </div>
        </TransitUp>

        <TransitUp2>
          <h1 className="!leading-snug text-3xl md:text-5xl lg:text-7xl font-playfair font-extrabold w-11/12 text-gray-800 my-8">
            I develop apps to{" "}
            <span className="bg-primary/20 text-primary">fill gaps</span> in
            existing solutions based on{" "}
            <span className="bg-primary/20 text-primary">personal needs</span>.{" "}
          </h1>
          <h4 className="w-3/4 text-lg md:text-2xl font-spaceGrotesk">
            If they don&apos;t exists in the market, I create them from{" "}
            <span className="font-medium">scratch</span>.
          </h4>
          <div className="w-fit mt-28 m-auto fade-in-out">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-chevrons-down"
            >
              <path d="m7 6 5 5 5-5" />
              <path d="m7 13 5 5 5-5" />
            </svg>
          </div>
        </TransitUp2>
        <div className="mt-32">
          <ProjectContainer />
        </div>
      </main>
      <TransitUp>
        <Footer />
      </TransitUp>
    </>
  );
}
