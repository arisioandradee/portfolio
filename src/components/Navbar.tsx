import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useActiveSection } from "@/hooks/useActiveSection";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeSection = useActiveSection();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Início", id: "hero" },
    { label: "Sobre mim", id: "about" },
    { label: "Projetos", id: "projects" },
    { label: "Entre em contato", id: "contact" },
  ];

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 transition-all duration-300 flex flex-col items-center px-4 pointer-events-none">
      <div
        className={`max-w-fit mx-auto px-6 h-14 flex items-center gap-8 transition-all duration-300 pointer-events-auto ${isScrolled
          ? "bg-background/80 backdrop-blur-xl shadow-2xl border border-white/10 rounded-full"
          : "bg-background/40 backdrop-blur-md border border-white/5 rounded-full"
          }`}
      >
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              className={`transition-all duration-300 hover:scale-105 rounded-full px-4 h-9 ${activeSection === item.id
                ? "text-cyan-400 font-bold bg-cyan-500/10"
                : "text-muted-foreground hover:text-foreground"
                }`}
              onClick={() => handleScrollToSection(item.id)}
            >
              {item.label}
            </Button>
          ))}
        </div>

        <div className="flex items-center gap-4 md:border-l md:border-white/10 md:pl-8">
          <Button
            className="bg-cyan-500 hover:bg-cyan-600 text-white rounded-full px-6 h-9 font-medium transition-all hover:scale-105 active:scale-95 shadow-lg shadow-cyan-500/20 border-none"
            onClick={() => handleScrollToSection('contact')}
          >
            Entre em contato
          </Button>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden mt-2 pointer-events-auto min-w-[200px]">
          <div className="bg-background/95 backdrop-blur-md rounded-2xl overflow-hidden animate-in slide-in-from-top-4 border border-border shadow-2xl flex flex-col p-2">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                className={`justify-start transition-colors rounded-xl ${activeSection === item.id
                  ? "text-cyan-400 bg-cyan-500/10 font-bold"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
                onClick={() => handleScrollToSection(item.id)}
              >
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

