import GridBackground from "@/components/other-ui/grid-background";
import Hero from "./_components/hero-card";
import Contact from "./_components/contact";
import FavContribs from "./_components/fav-contributions";

export default function Home() {
  return (
    <div className="min-h-screen h-full">
      <GridBackground />
      <main className="max-w-3xl p-4 sm:p-8 md:p-16 lg:py-16 lg:px-0 mx-auto space-y-6">
        <Hero />
        <FavContribs />
        <Contact />
      </main>
    </div>
  );
}
