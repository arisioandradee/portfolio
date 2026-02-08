import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ProjectDialog } from "./ProjectDialog";
import nutrIA from "@/assets/nutrIA.gif";
import helpDesk from "@/assets/helpDesk.gif";
import centralDibai from "@/assets/centralDibai.gif";
import finderDibai from "@/assets/finderDibai.gif";
import dibaiPA from "@/assets/dibaiPA.gif";

const categories = ["Todos", "Back-end/IA", "Web App", "Automação"];

const projects = [
  {
    title: "Central Dibai Sales",
    category: "Automação",
    description: "Plataforma centralizada para gestão e automação comercial com validadores e IA.",
    tags: ["Python", "FastAPI", "React", "AI"],
    image: centralDibai,
    isPrivate: true,
    challenge: "Integrar múltiplas ferramentas de validação e automação em uma interface única e rápida.",
    solution: "Arquitetura baseada em microserviços com FastAPI e processamento assíncrono para validações em tempo real."
  },
  {
    title: "Nutr.IA",
    category: "Back-end/IA",
    description: "Gerador de planos alimentares personalizados utilizando inteligência artificial (Gemini).",
    tags: ["JavaScript", "Gemini AI", "Node.js"],
    image: nutrIA,
    demo: "https://github.com/arisioandradee/nutria-diet-planner",
    isPrivate: false,
    challenge: "Criar planos alimentares coerentes e nutricionalmente balanceados usando LLMs.",
    solution: "Engenharia de prompt avançada e validação de dados nutricionais via API."
  },
  {
    title: "Dibai Finder",
    category: "Automação",
    description: "Sistema de busca e verificação de leads utilizando dados oficiais da Receita Federal.",
    tags: ["Python", "PostgreSQL", "React"],
    image: finderDibai,
    isPrivate: true,
    challenge: "Processar grandes volumes de dados da Receita Federal com baixa latência.",
    solution: "Indexação avançada em PostgreSQL e cache inteligente no Redis."
  },
  {
    title: "HelpDesk",
    category: "Web App",
    description: "Aplicação full-stack para gerenciamento de chamados de suporte técnico.",
    tags: ["Java", "Angular", "MySQL"],
    image: helpDesk,
    demo: "https://github.com/arisioandradee/helpdesk-project",
    isPrivate: false,
    challenge: "Gerenciar estados complexos de chamados e notificações em tempo real.",
    solution: "Utilização de Spring Boot para o back-end e Angular Signals para gestão de estado reativa."
  },
  {
    title: "Sistema de Aprendizagem",
    category: "Web App",
    description: "Plataforma interativa para estudantes e professores explorarem cursos práticos.",
    tags: ["Python", "PostgreSQL", "Jupyter"],
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1532",
    demo: "https://github.com/arisioandradee/sistema-aprendizagem",
    isPrivate: false,
  },
  {
    title: "Dibai P.A.",
    category: "Automação",
    description: "Gerenciamento de PAs operacionais com métricas e performance em tempo real.",
    tags: ["Python", "FastAPI", "React"],
    image: dibaiPA,
    isPrivate: true,
  },
];

export function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <section id="projects" className="py-24 md:py-32 bg-navy-premium relative">
      <div className="container px-4 overflow-visible">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex flex-col items-center text-center mb-8 space-y-4">
            <span className="text-xs md:text-sm text-cyan-400 font-bold tracking-[0.3em] uppercase block opacity-90">
              Projetos
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight">
              Meus <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Projetos</span>
            </h2>
          </div>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg leading-relaxed">
            Uma seleção de trabalhos que demonstram meu foco em resolver problemas através de código eficiente e IA.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative h-[700px] w-full flex items-center justify-center overflow-visible">
          <div className="relative w-full max-w-6xl h-full flex items-center justify-center overflow-visible">
            <AnimatePresence initial={false} mode="popLayout">
              {[-1, 0, 1].map((offset) => {
                const index = (activeIndex + offset + projects.length) % projects.length;
                const project = projects[index];

                return (
                  <motion.div
                    key={`${project.title}-${index}`}
                    initial={{ opacity: 0, scale: 0.8, x: offset * 500 }}
                    animate={{
                      opacity: offset === 0 ? 1 : 0.3,
                      scale: offset === 0 ? 1 : 0.8,
                      x: offset * 450,
                      zIndex: offset === 0 ? 10 : 0,
                      filter: offset === 0 ? "blur(0px)" : "blur(6px)",
                    }}
                    exit={{ opacity: 0, scale: 0.8, x: offset * 500 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="absolute w-full max-w-[550px] cursor-pointer"
                    onClick={() => {
                      if (offset === 0) setSelectedProject(project);
                      else setActiveIndex(index);
                    }}
                  >
                    <Card className="h-full flex flex-col bg-slate-900/60 backdrop-blur-2xl border-white/10 overflow-hidden hover:border-cyan-500/30 transition-all duration-500 rounded-[2.5rem] shadow-2xl">
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />
                        <div className="absolute top-6 right-6">
                          <Badge className="bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 backdrop-blur-md px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest">
                            {project.category}
                          </Badge>
                        </div>
                      </div>
                      <CardHeader className="p-8 space-y-4 flex-1 text-left">
                        <CardTitle className="text-3xl font-extrabold text-white group-hover:text-cyan-400 transition-colors">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-slate-400 text-base leading-relaxed line-clamp-2 italic">
                          "{project.description}"
                        </CardDescription>
                      </CardHeader>
                      <div className="px-8 pb-10 flex flex-wrap gap-2 pt-6 border-t border-white/5">
                        {project.tags.slice(0, 3).map((tag, i) => (
                          <span key={i} className="text-[11px] uppercase font-black tracking-[0.2em] text-cyan-500">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 md:px-12 pointer-events-none z-20">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length)}
              className="w-14 h-14 rounded-full border-white/20 bg-white/5 backdrop-blur-md text-white hover:bg-cyan-500 hover:text-white hover:border-cyan-500 transition-all shadow-xl pointer-events-auto"
            >
              <ArrowLeft className="w-6 h-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setActiveIndex((prev) => (prev + 1) % projects.length)}
              className="w-14 h-14 rounded-full border-white/20 bg-white/5 backdrop-blur-md text-white hover:bg-cyan-500 hover:text-white hover:border-cyan-500 transition-all shadow-xl pointer-events-auto"
            >
              <ArrowRight className="w-6 h-6" />
            </Button>
          </div>

          {/* Pagination Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
            {projects.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-all duration-500 ${i === activeIndex ? 'bg-cyan-500 w-8' : 'bg-white/20'}`}
              />
            ))}
          </div>
        </div>
      </div>

      <ProjectDialog
        project={selectedProject}
        isOpen={!!selectedProject}
        onOpenChange={(open) => !open && setSelectedProject(null)}
      />
    </section >
  );
}

