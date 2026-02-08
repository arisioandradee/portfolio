import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 bg-background border-t border-border">
      <div className="container px-4 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex flex-col md:flex-row items-center gap-6 md:gap-12"
          >
            <a href="mailto:arisiosaf@gmail.com" className="text-sm text-muted-foreground hover:text-cyan-500 transition-colors">
              arisiosaf@gmail.com
            </a>
            <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-border" />
            <a href="tel:+558899876936" className="text-sm text-muted-foreground hover:text-cyan-500 transition-colors">
              +55 88 9 9987-6936
            </a>
          </motion.div>

          <div className="w-full max-w-sm border-t border-border" />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-sm text-muted-foreground">
              © {currentYear} Arisio Andrade. Desenvolvido com <span className="text-cyan-500">foco</span> e <span className="text-cyan-500">disciplina</span>.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}

