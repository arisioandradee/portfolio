import { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";

export function Skills() {
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

  const skillCategories = [
    {
      title: "Frontend",
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"],
    },
    {
      title: "Backend",
      skills: ["Python", "Django", "PostgreSQL", "MySQL"],
    },
    {
      title: "Ferramentas & Outros",
      skills: ["Git", "GitHub", "Linux", "Docker", "Figma", "PowerBI"],
    },
  ];

  return (
    <section ref={sectionRef} id="skills" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="container px-4 relative z-10">
        <div
          className={`max-w-6xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">
              Tecnologias
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ferramentas e linguagens que utilizo para transformar ideias em
              soluções reais
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className={`glass-card p-8 rounded-2xl space-y-6 hover:shadow-glow transition-all duration-300 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                }`}
                style={{ transitionDelay: `${categoryIndex * 150}ms` }}
              >
                <h3 className="text-2xl font-semibold text-primary">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="text-sm px-4 py-2 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
