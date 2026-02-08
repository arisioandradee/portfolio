import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const experienceData = [
    {
        role: "Estagiário de TI",
        company: "Dibai Sales",
        period: "out de 2025 - Presente",
        duration: "5 meses",
        type: "Remota",
        skills: ["Microsoft Excel", "Python", "Automação", "Processamento de Dados"],
    },
    {
        role: "Assessor",
        company: "Câmara Municipal de Morada Nova",
        period: "mar de 2025 - Presente",
        duration: "1 ano",
        type: "Presencial",
        skills: ["Power BI", "Microsoft Office", "Análise de Dados"],
    },
    {
        role: "Assistente administrativo",
        company: "Hiper Morada Nova",
        period: "abr de 2024 - mar de 2025",
        duration: "1 ano",
        location: "Morada Nova, Ceará, Brasil",
        type: "Presencial",
        skills: ["Processos administrativos", "Tecnologia da Informação"],
    },
    {
        role: "Estagiário de TI",
        company: "Alvoar Lácteos",
        period: "jun de 2020 - dez de 2020",
        duration: "7 meses",
        location: "Morada Nova, Ceará, Brasil",
        type: "Presencial",
        skills: ["Redes de computadores", "Microsoft Office", "Suporte Técnico"],
    },
];

export function DetailedExperience({ isDark = false }: { isDark?: boolean }) {
    const textColor = isDark ? "text-foreground" : "text-slate-900";
    const mutedColor = isDark ? "text-muted-foreground" : "text-slate-600";
    const borderColor = isDark ? "border-border" : "border-slate-200";

    return (
        <div className="space-y-8">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-600">
                    <Briefcase className="w-6 h-6" />
                </div>
                <h3 className={`text-2xl font-bold ${textColor}`}>Experiência Profissional</h3>
            </div>

            <div className={`relative border-l-2 ml-4 space-y-12 ${borderColor}`}>
                {experienceData.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="relative pl-8 group"
                    >
                        <div className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full transition-colors border-4 ${isDark ? 'bg-border border-background' : 'bg-slate-200 border-white'} group-hover:bg-blue-500`} />

                        <div className="space-y-3">
                            <div className="flex flex-wrap justify-between items-start gap-2">
                                <div>
                                    <h4 className={`text-xl font-bold transition-colors ${textColor} group-hover:text-blue-600`}>
                                        {exp.role}
                                    </h4>
                                    <p className="text-lg font-medium text-blue-600/80">{exp.company}</p>
                                </div>
                                <div className={`flex items-center gap-2 text-sm px-3 py-1 rounded-full ${isDark ? 'bg-secondary/30 text-muted-foreground' : 'bg-slate-100 text-slate-500'}`}>
                                    <Calendar className="w-4 h-4" />
                                    {exp.period}
                                </div>
                            </div>

                            <div className={`flex flex-wrap gap-4 text-sm ${mutedColor}`}>
                                <span className="flex items-center gap-1">
                                    <MapPin className="w-4 h-4" />
                                    {exp.type} {exp.location ? `• ${exp.location}` : ""}
                                </span>
                                <span className="text-blue-600 font-medium">{exp.duration}</span>
                            </div>

                            <div className="flex flex-wrap gap-2 pt-2">
                                {exp.skills.map((skill, i) => (
                                    <span
                                        key={i}
                                        className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${isDark ? 'bg-secondary/50 text-muted-foreground' : 'bg-slate-100 text-slate-600'}`}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
