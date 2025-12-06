import { Button } from "@/components/ui/button";
import { Linkedin, Download, Instagram, Github } from "lucide-react";
import fotoPrincipal from "@/assets/fotoPrincipal.png";
import curriculo from "@/assets/curriculo.pdf";

export function Hero() {
  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = curriculo;
    link.download = "curriculo.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#1a1a1a]"
    >
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen py-20 lg:py-0">
          {/* Seção Esquerda - Texto e Conteúdo */}
          <div className="flex flex-col justify-center space-y-6 text-left">
            <div className="space-y-3">
              <h2 className="text-base md:text-lg text-gray-400 font-normal">
                Olá, eu sou
              </h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Arisio Andrade
              </h1>
            </div>

            {/* Ícones sociais */}
            <div className="flex items-center gap-5 pt-2">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-orange-500 transition-colors flex items-center justify-center"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/arisioandrade"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-orange-500 transition-colors flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/arisioandradee"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-orange-500 transition-colors flex items-center justify-center"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
            </div>

            {/* Botões principais */}
            <div className="flex flex-wrap items-center gap-4 pt-6">
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg font-medium rounded-md"
                onClick={() => handleScrollToSection("contact")}
              >
                Entre em contato
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg font-medium rounded-md"
                onClick={handleDownloadCV}
              >
                <Download className="mr-2 h-5 w-5" />
                Baixar CV
              </Button>
            </div>
          </div>

          {/* Seção Direita - Foto */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-3xl lg:max-w-5xl">
              <div className="relative w-full aspect-square flex items-center justify-center">
                <img
                  src={fotoPrincipal}
                  alt="Arisio Andrade"
                  className="w-full h-full object-contain object-center"
                  style={{ filter: 'grayscale(100%)' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
