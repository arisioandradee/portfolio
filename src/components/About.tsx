import { useEffect, useRef, useState } from "react";
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

// Componente de círculo de progresso
const ProgressCircle = ({
  percentage,
  children,
  name,
}: {
  percentage: number;
  children: React.ReactNode;
  name: string;
}) => {
  const size = 140;
  const radius = 55;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative" style={{ width: size, height: size }}>
        <svg
          className="transform -rotate-90"
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
        >
          {/* Círculo de fundo */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="10"
          />
          {/* Círculo de progresso */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#ff6b35"
            strokeWidth="10"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        {/* Conteúdo no centro */}
        <div className="absolute inset-0 flex items-center justify-center text-white">
          {children}
        </div>
      </div>
      <div className="text-center">
        <p className="text-4xl font-bold text-orange-500">{percentage}%</p>
        <p className="text-white text-base mt-2">{name}</p>
      </div>
    </div>
  );
};

// Componentes de ícones das tecnologias usando react-icons
const TechIcon = ({ name }: { name: string }) => {
  const iconSize = 48;
  
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

  return icons[name] || <span className="text-2xl font-bold text-white">{name.slice(0, 2)}</span>;
};

export function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Tecnologias com porcentagens
  const technologies = [
    { name: "HTML5", percentage: 90 },
    { name: "CSS3", percentage: 90 },
    { name: "JavaScript", percentage: 40 },
    { name: "React", percentage: 40 },
    { name: "Figma", percentage: 40 },
    { name: "Python", percentage: 70 },
    { name: "Django", percentage: 60 },
    { name: "PostgreSQL", percentage: 80 },
    { name: "Git", percentage: 90 },
    { name: "Docker", percentage: 50 },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-24 md:py-32 relative overflow-hidden bg-[#1a1a1a]"
    >
      <div className="container px-4 relative z-10">
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Sobre mim
          </h2>
        </div>

        {/* Seção Principal - Texto em coluna única */}
        <div
          className={`max-w-4xl mx-auto mb-20 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="space-y-6 text-gray-300 text-justify leading-relaxed">
            <p>
              Sou técnico em Redes de Computadores e atualmente curso Sistemas
              de Informação. Desde cedo, desenvolvi afinidade com o back-end, em
              especial com as áreas de dados e automação. Atualmente, estou
              aprofundando meus conhecimentos em <strong className="text-white">Python</strong>,{" "}
              <strong className="text-white">SQL</strong>, <strong className="text-white">Git</strong> e frameworks como{" "}
              <strong className="text-white">Django</strong>.
            </p>

            <p>
              Também venho estudando tecnologias de <strong className="text-white">front-end</strong>{" "}
              para compreender melhor o funcionamento completo das aplicações
              web e ampliar minha capacidade de desenvolver soluções
              integradas e eficientes.
            </p>

            <p>
              Acredito que <strong className="text-white">disciplina</strong> e{" "}
              <strong className="text-white">aprendizado contínuo</strong> são essenciais para crescer
              na área de tecnologia. Meu objetivo é transformar ideias em{" "}
              <strong className="text-white">soluções práticas, escaláveis</strong> e que gerem{" "}
              <strong className="text-white">impacto real</strong>.
            </p>

            <p>
              Como desenvolvedor full stack, trabalho na criação de aplicações
              web completas, desde a interface do usuário até o backend e banco
              de dados. Minha experiência abrange tanto o desenvolvimento de
              interfaces modernas e responsivas quanto a construção de APIs
              robustas e sistemas escaláveis.
            </p>
          </div>
        </div>

        {/* Seção de Habilidades - Carrossel */}
        <div className="max-w-6xl mx-auto mt-16">
          <div className="relative px-8 md:px-16">
            <Carousel
              opts={{
                align: "start",
                loop: true,
                slidesToScroll: 1,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {technologies.map((tech, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/5"
                  >
                    <div className="flex justify-center py-4">
                      <ProgressCircle
                        percentage={tech.percentage}
                        name={tech.name}
                      >
                        <TechIcon name={tech.name} />
                      </ProgressCircle>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0 md:-left-16 bg-gray-800/80 border-gray-700 text-white hover:bg-gray-700 hover:text-orange-500 hover:border-orange-500" />
              <CarouselNext className="right-0 md:-right-16 bg-gray-800/80 border-gray-700 text-white hover:bg-gray-700 hover:text-orange-500 hover:border-orange-500" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
