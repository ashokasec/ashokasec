import Header from "@/components/landing-header";
import Projects from "@/components/landing-projects";

export default function Home() {
  return (
    <>
      <header></header>
      <main className="text-[#282829]">
        <Header />
        <Projects />
      </main>
    </>
  );
}
