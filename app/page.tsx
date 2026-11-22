// This page component assembles the developer portfolio sections in sequential order.
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StarfieldCanvas from "@/components/StarfieldCanvas";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

// This home page renders the reddish-pink studio hero, animated starfield, and dark space sections.
export default function Home() {
  // Main page layout with reddish-pink selection highlight styling.
  return (
    <main className="relative min-h-screen bg-[#050507] text-white selection:bg-[#FA2A55] selection:text-white">
      {/* Floating glass pill navbar anchored at the top center */}
      <Navbar />

      {/* Hero section with vibrant reddish-pink studio backdrop */}
      <Hero />

      {/* Deep space middle container with continuous starfield canvas */}
      <div className="relative bg-[#050507]">
        <StarfieldCanvas />
        <About />
        <Skills />
        <Projects />
      </div>

      {/* Contact section with matte charcoal background */}
      <Contact />
    </main>
  );
}
