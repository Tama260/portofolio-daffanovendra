import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FeaturedSystems from "@/components/FeaturedSystems";
import Metrics from "@/components/Metrics";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import CurrentFocus from "@/components/CurrentFocus";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Daffa Novendra Aditama — AI Content Automation Specialist" },
      {
        name: "description",
        content:
          "AI Content Automation Specialist building scalable AI-powered content systems, workflow automation, and serverless production pipelines.",
      },
      {
        property: "og:title",
        content: "Daffa Novendra Aditama — AI Content Automation Specialist",
      },
      {
        property: "og:description",
        content:
          "Portfolio of Daffa Novendra Aditama — AI content automation, workflow systems, and scalable creative pipelines.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-[#1a1a2e]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <FeaturedSystems />
        <Metrics />
        <Projects />
        <Skills />
        <CurrentFocus />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
