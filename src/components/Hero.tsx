import { Button } from "@/components/ui/button";
import { Linkedin, Download, Instagram, Github } from "lucide-react";
import { motion } from "framer-motion";
import foto2 from "/foto2.jpeg";
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-navy-premium"
    >
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen py-20 lg:py-0"
        >
          {/* Seção Esquerda - Texto e Conteúdo */}
          <div className="flex flex-col justify-center space-y-6 text-left">
            <motion.div variants={itemVariants} className="space-y-4">
              <span className="text-xs md:text-sm text-cyan-500 font-bold tracking-[0.3em] uppercase block opacity-80">
                Desenvolvedor Full Stack
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-white leading-none tracking-tight">
                Arisio <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600">
                  Andrade
                </span>
              </h1>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-300 max-w-lg leading-relaxed"
            >
              Desenvolvedor Full Stack especializado em <span className="text-white font-semibold">Back-end, Dados e Automações</span>. Transformando complexidade em soluções eficientes.
            </motion.p>

            {/* Ícones sociais */}
            <motion.div variants={itemVariants} className="flex items-center gap-5 pt-2">
              {[
                { icon: Instagram, href: "https://www.instagram.com", label: "Instagram" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/arisioandrade", label: "LinkedIn" },
                { icon: Github, href: "https://github.com/arisioandradee", label: "GitHub" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-cyan-400 transition-colors p-2 bg-secondary/50 rounded-full border border-border"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </motion.div>

            {/* Botões principais */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-6">
              <Button
                size="lg"
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-6 text-lg font-medium rounded-xl shadow-lg shadow-cyan-500/20 transition-all hover:scale-105 active:scale-95 border-none"
                onClick={() => handleScrollToSection("contact")}
              >
                Entre em contato
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-border text-foreground hover:bg-foreground hover:text-background px-8 py-6 text-lg font-medium rounded-xl transition-all hover:scale-105 active:scale-95"
                onClick={handleDownloadCV}
              >
                <Download className="mr-2 h-5 w-5" />
                Baixar CV
              </Button>
            </motion.div>
          </div>

          {/* Seção Direita - Foto */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex items-center justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-xl aspect-square">
              {/* Círculo de fundo decorativo */}
              <div className="absolute inset-0 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
              <div className="relative w-full h-full flex items-center justify-center">
                <motion.img
                  whileHover={{ scale: 1.02 }}
                  src={foto2}
                  alt="Arisio Andrade"
                  className="w-full h-full object-cover object-top z-10 transition-all duration-700 rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

