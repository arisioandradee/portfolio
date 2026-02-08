import { motion } from "framer-motion";

const timelineData = [
    {
        year: "2024 - Presente",
        title: "Sistemas de Informação",
        description: "Cursando graduação. Foco em engenharia de software e arquitetura de sistemas.",
        icon: "🎓",
    },
    {
        year: "2023 - 2024",
        title: "Desenvolvedor Back-end & Automação",
        description: "Desenvolvimento de APIs robustas e sistemas de captura de dados (Web Scraping).",
        icon: "💻",
    },
    {
        year: "2021 - 2023",
        title: "Técnico em Redes de Computadores",
        description: "Sólida base em infraestrutura, protocolos de comunicação e segurança.",
        icon: "🔌",
    },
];

export function Timeline() {
    return (
        <div className="max-w-4xl mx-auto py-12">
            <div className="relative border-l border-border ml-3 md:ml-6 space-y-12">
                {timelineData.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className="relative pl-8"
                    >
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-cyan-500 border-4 border-background" />
                        <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6">
                            <span className="text-cyan-500 font-bold text-sm whitespace-nowrap">
                                {item.year}
                            </span>
                            <div className="space-y-2">
                                <h3 className="text-xl font-bold text-foreground">
                                    {item.icon} {item.title}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
