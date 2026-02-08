import { motion } from "framer-motion";
import { Github, BookOpen, Terminal, Cpu } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useActiveSection } from "@/hooks/useActiveSection";

export function TechExpertise() {
    const activeSection = useActiveSection();
    const isOffWhite = activeSection === "techexpertise";

    const insights = [
        {
            title: "Automação com Python",
            description: "Como reduzi o tempo de validação de dados em 80% usando processamento assíncrono.",
            icon: Terminal,
        },
        {
            title: "IA no Mundo Real",
            description: "Implementando o Gemini AI para geração de planos alimentares dinâmicos.",
            icon: Cpu,
        },
    ];

    return (
        <section id="techexpertise" className="py-24 bg-transparent relative overflow-hidden transition-colors duration-1000">
            <div className={`container px-4 transition-colors duration-500 ${isOffWhite ? 'text-slate-900' : 'text-foreground'}`}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* GitHub Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <Github className="w-8 h-8 text-cyan-500" />
                            <h2 className="text-3xl font-bold text-foreground">Open Source</h2>
                        </div>
                        <p className={`${isOffWhite ? 'text-slate-600' : 'text-muted-foreground'} text-lg`}>
                            Acredito na força da comunidade. Meus projetos no GitHub refletem minha busca constante por automação e eficiência.
                        </p>
                        <div className={`glass-card p-4 rounded-2xl border transition-colors ${isOffWhite ? 'bg-white border-slate-200 shadow-sm' : 'bg-card/50 border-border'} overflow-hidden`}>
                            <img
                                src="https://github-readme-stats.vercel.app/api?username=arisioandradee&show_icons=true&theme=dark&bg_color=00000000&title_color=06b6d4&text_color=94a3b8&icon_color=06b6d4&hide_border=true"
                                alt="GitHub Stats"
                                className={`w-full h-auto ${isOffWhite ? 'hidden' : 'block'}`}
                            />
                            <img
                                src="https://github-readme-stats.vercel.app/api?username=arisioandradee&show_icons=true&theme=default&bg_color=00000000&title_color=06b6d4&text_color=475569&icon_color=06b6d4&hide_border=true"
                                alt="GitHub Stats"
                                className={`w-full h-auto ${isOffWhite ? 'block' : 'hidden'}`}
                            />
                        </div>
                    </motion.div>

                    {/* Insights / Blog */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <BookOpen className="w-8 h-8 text-cyan-500" />
                            <h2 className={`text-3xl font-bold ${isOffWhite ? 'text-slate-900' : 'text-foreground'}`}>Insights & Aprendizados</h2>
                        </div>
                        <div className="grid grid-cols-1 gap-4">
                            {insights.map((insight, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ x: 10 }}
                                    className={`p-6 rounded-2xl border cursor-pointer group transition-all ${isOffWhite ? 'bg-white border-slate-200 hover:border-cyan-500 shadow-sm' : 'bg-secondary/30 border-border hover:border-cyan-500/50'}`}
                                >
                                    <div className="flex gap-4">
                                        <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                                            <insight.icon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className={`font-bold text-lg mb-1 ${isOffWhite ? 'text-slate-900' : 'text-foreground'}`}>{insight.title}</h3>
                                            <p className={`${isOffWhite ? 'text-slate-600' : 'text-muted-foreground'} text-sm`}>{insight.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
