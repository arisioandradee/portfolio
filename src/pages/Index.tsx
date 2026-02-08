import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { AnimatedBackground } from "@/components/AnimatedBackground";

const Index = () => {
  useEffect(() => {
    document.title = "Arisio Andrade | Dev Full Stack & Automação";

    // JSON-LD
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Arisio Andrade",
      "jobTitle": "Desenvolvedor Full Stack",
      "url": "https://arisioandrade.vercel.app/",
      "sameAs": [
        "https://github.com/arisioandradee",
        "https://www.linkedin.com/in/arisioandrade"
      ]
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
