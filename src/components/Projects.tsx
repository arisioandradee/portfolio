import { useEffect, useRef, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import nutrIA from "@/assets/nutrIA.gif";
import helpDesk from "@/assets/helpDesk.gif";
import centralDibai from "@/assets/centralDibai.gif";
import finderDibai from "@/assets/finderDibai.gif";
import dibaiPA from "@/assets/dibaiPA.gif";

export function Projects() {
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

  const projects = [
    {
      title: "Sistema de Aprendizagem",
      description:
        "Plataforma desenvolvida com o propósito de oferecer uma forma mais interativa e eficiente para estudantes e professores explorarem e aplicarem seus cursos de forma prática.",
      tags: ["Python", "PostgreSQL", "Jupyter"],
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1532",
      demo: "https://github.com/arisioandradee/sistema-aprendizagem",
      isPrivate: false,
    },
    {
      title: "Nutr.IA",
      description:
        "Aplicação web que gera planos alimentares personalizados utilizando inteligência artificial. A NutrIA cria sugestões equilibradas de refeições para café da manhã, almoço, lanche da tarde e jantar, de segunda a domingo.",
      tags: ["HTML", "CSS", "JavaScript", "Gemini"],
      image: nutrIA,
      demo: "https://github.com/arisioandradee/nutria-diet-planner",
      isPrivate: false,
    },
    {
      title: "HelpDesk",
      description:
        "O HelpDesk é uma aplicação web em desenvolvimento para gerenciamento de chamados de suporte técnico. A plataforma permite que técnicos e clientes interajam de forma eficiente, possibilitando a abertura, atualização e resolução de chamados.",
      tags: ["Java", "Angular", "MySQL"],
      image: helpDesk,
      demo: "https://github.com/arisioandradee/helpdesk-project",
      isPrivate: false,
    },
    {
      title: "Central Dibai Sales",
      description:
        "Plataforma centralizada que inclui validador de WhatsApp, validador de email, conversor de planilhas para formato CRM e Salesforce e agente de ligações virtual, oferecendo um ambiente completo para gestão e automação comercial.",
      tags: ["Python", "FastAPI", "PostgreSQL", "React"],
      image: centralDibai,
      isPrivate: true,
    },
    {
      title: "Dibai Finder",
      description:
        "Sistema voltado para busca e verificação de leads utilizando dados oficiais da Receita Federal. Permite consultas confiáveis, ajudando a equipe a identificar oportunidades com maior precisão e segurança.",
      tags: ["Python", "FastAPI", "PostgreSQL", "React"],
      image: finderDibai,
      isPrivate: true,
    },
    {
      title: "Dibai P.A.",
      description:
        "Plataforma desenvolvida para gerenciamento e acompanhamento de PAs operacionais, permitindo registrar atividades, organizar métricas e visualizar a performance das equipes de forma clara e integrada.",
      tags: ["Python", "FastAPI", "PostgreSQL", "React"],
      image: dibaiPA,
      isPrivate: true,
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-24 md:py-32 relative overflow-hidden bg-[#1a1a1a]"
    >
      <div className="container px-4 relative z-10">
        <div
          className={`max-w-7xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Projetos
            </h2>
          </div>

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
                {projects.map((project, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3"
                  >
                    <Card className="h-full bg-gray-900/30 border-gray-800 hover:border-gray-700 transition-all duration-300 flex flex-col overflow-hidden group">
                      <div className="relative overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <CardHeader className="flex-grow">
                        <CardTitle className="text-xl md:text-2xl text-white mb-2">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-gray-400 text-sm md:text-base leading-relaxed">
                          {project.description}
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="flex-grow-0">
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, i) => (
                            <Badge
                              key={i}
                              variant="secondary"
                              className="text-xs bg-gray-800 text-gray-300 border-gray-700"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>

                      <CardFooter>
                        {project.isPrivate ? (
                          <Button
                            disabled
                            className="w-full bg-gray-700 text-gray-400 cursor-not-allowed hover:bg-gray-700"
                          >
                            Projeto Empresarial Privado
                          </Button>
                        ) : (
                          <Button
                            asChild
                            className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                          >
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Ver Projeto
                            </a>
                          </Button>
                        )}
                      </CardFooter>
                    </Card>
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
