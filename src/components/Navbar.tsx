import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Detectar seção ativa
      const sections = ["hero", "about", "projects", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#1a1a1a]/90 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center h-16">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                className={`transition-colors ${
                  activeSection === item.id
                    ? "text-orange-500"
                    : "text-gray-400 hover:text-white"
                }`}
                onClick={() => {
                  handleScrollToSection(item.id);
                  setActiveSection(item.id);
                }}
              >
                {item.label}
              </Button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2 absolute right-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#1a1a1a]/95 backdrop-blur-sm mt-2 rounded-lg overflow-hidden animate-scale-in border border-gray-800">
            <div className="flex flex-col space-y-1 p-4">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  className={`justify-start transition-colors ${
                    activeSection === item.id
                      ? "text-orange-500"
                      : "text-gray-400 hover:text-white"
                  }`}
                  onClick={() => {
                    handleScrollToSection(item.id);
                    setActiveSection(item.id);
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
