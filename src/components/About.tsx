import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  SiReact,
  SiPython,
  SiJavascript,
  SiDjango,
  SiPostgresql,
  SiHtml5,
  SiCss3,
  SiGit,
  SiFigma,
  SiDocker,
} from "react-icons/si";
import { SkillsRadar } from "./SkillsRadar";
import { DetailedExperience } from "./DetailedExperience";
import { DetailedEducation } from "./DetailedEducation";
import { useActiveSection } from "@/hooks/useActiveSection";

// Componente de ícones das tecnologias
const TechIcon = ({ name }: { name: string }) => {
  const iconSize = 32;

  const icons: Record<string, JSX.Element> = {
    React: <SiReact size={iconSize} color="#61DAFB" />,
    Python: <SiPython size={iconSize} color="#3776AB" />,
    JavaScript: <SiJavascript size={iconSize} color="#F7DF1E" />,
    Django: <SiDjango size={iconSize} color="#092E20" />,
    PostgreSQL: <SiPostgresql size={iconSize} color="#336791" />,
    HTML5: <SiHtml5 size={iconSize} color="#E34F26" />,
    CSS3: <SiCss3 size={iconSize} color="#1572B6" />,
    Git: <SiGit size={iconSize} color="#F05032" />,
    Figma: <SiFigma size={iconSize} color="#F24E1E" />,
    Docker: <SiDocker size={iconSize} color="#2496ED" />,
  };

  return icons[name] || <span className="text-xl font-bold text-foreground">{name.slice(0, 2)}</span>;
};

export function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const technologies = [
    { name: "HTML5" },
    { name: "CSS3" },
    { name: "JavaScript" },
    { name: "React" },
    { name: "Figma" },
    { name: "Python" },
    { name: "Django" },
    { name: "PostgreSQL" },
    { name: "Git" },
    { name: "Docker" },
  ];

  const activeSection = useActiveSection();
  const isOffWhite = activeSection === "about";

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-24 md:py-32 relative overflow-hidden bg-off-white-premium"
    >
      <div className="container px-4 relative z-10 text-slate-900">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex flex-col items-center text-center mb-16 space-y-4">
            <span className="text-xs md:text-sm text-cyan-500 font-bold tracking-[0.3em] uppercase block opacity-80">
              Sobre mim
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight">
              Minha <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Jornada</span>
            </h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
          {/* Coluna Esquerda: Texto e Stacks */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-6 text-lg leading-relaxed text-slate-700">
              <p>
                Sou técnico em <span className="font-semibold text-slate-900">Redes de Computadores</span> e atualmente curso <span className="font-semibold text-slate-900">Sistemas de Informação</span>. Desenvolvi uma forte afinidade com o back-end, focando em arquitetura de dados e automação de processos.
              </p>
              <p>
                Acredito que a disciplina e o aprendizado contínuo são as chaves para a excelência na tecnologia. Meu objetivo é criar soluções práticas que não apenas funcionem, mas que sejam <span className="font-semibold text-slate-900">escaláveis e eficientes</span>.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Stack de Tecnologias</h3>
              <div className="relative px-8">
                <Carousel
                  opts={{ align: "start", loop: true, slidesToScroll: 2 }}
                  className="w-full"
                >
                  <CarouselContent className="-ml-2 md:-ml-4">
                    {technologies.map((tech, index) => (
                      <CarouselItem
                        key={index}
                        className="pl-2 md:pl-4 basis-1/3 md:basis-1/4"
                      >
                        <motion.div
                          whileHover={{ scale: 1.1, y: -5 }}
                          className="flex flex-col items-center gap-3 p-4 rounded-2xl border transition-colors bg-white border-slate-200 shadow-sm"
                        >
                          <TechIcon name={tech.name} />
                          <span className="text-xs font-medium text-slate-600">{tech.name}</span>
                        </motion.div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="-left-12 bg-white border-cyan-500/20 text-cyan-500 shadow-md hover:bg-cyan-50 hover:text-cyan-600 transition-all" />
                  <CarouselNext className="-right-12 bg-white border-cyan-500/20 text-cyan-500 shadow-md hover:bg-cyan-50 hover:text-cyan-600 transition-all" />
                </Carousel>
              </div>
            </div>
          </motion.div>

          {/* Coluna Direita: Expertise (Radar) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="p-6 md:p-10 rounded-3xl border bg-white border-slate-200 text-slate-900 shadow-2xl shadow-slate-300"
          >
            <h3 className="text-2xl font-bold mb-8 text-center text-inherit">Expertise Técnica</h3>
            <div className="w-full flex justify-center">
              <SkillsRadar dark={false} />
            </div>
          </motion.div>
        </div>

        {/* Experiência e Formação */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start pt-12 border-t border-slate-200">
          <DetailedExperience isDark={false} />
          <DetailedEducation isDark={false} />
        </div>
      </div>
    </section >
  );
}

