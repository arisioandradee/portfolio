import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award } from "lucide-react";

const educationData = [
    {
        institution: "Unicatólica - Centro Universitário Católica de Quixadá",
        degree: "Bacharelado em Sistemas de Informação",
        period: "2024 - 2026",
        skills: ["Figma", "Java", "Python", "SQL", "Spring Boot", "Metodologias Ágeis", "Banco de Dados"],
    },
    {
        institution: "Universidade Federal do Ceará (UFC)",
        degree: "Bacharelado em Sistemas de Informação",
        period: "2021 - 2023",
        note: "Transferência de Universidade",
        skills: ["Programação", "Matemática", "Lógica de Programação", "Arquitetura de Info"],
    },
    {
        institution: "EEEP Osmira Eduardo de Castro",
        degree: "Técnico em Redes de Computadores",
        period: "2018 - 2020",
        skills: ["TCP/IP", "Segurança de Rede", "Administração de Redes", "LAN-WAN"],
    },
];

export function DetailedEducation({ isDark = false }: { isDark?: boolean }) {
    const textColor = isDark ? "text-foreground" : "text-slate-900";
    const mutedColor = isDark ? "text-muted-foreground" : "text-slate-600";
    const borderColor = isDark ? "border-border" : "border-slate-200";

    return (
        <div className="space-y-8">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-600">
                    <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className={`text-2xl font-bold ${textColor}`}>Formação Acadêmica</h3>
            </div>

            <div className={`relative border-l-2 ml-4 space-y-12 ${borderColor}`}>
                {educationData.map((edu, index) => (
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
                                        {edu.degree}
                                    </h4>
                                    <p className="text-lg font-medium text-blue-600/80">{edu.institution}</p>
                                </div>
                                <div className={`flex items-center gap-2 text-sm px-3 py-1 rounded-full ${isDark ? 'bg-secondary/30 text-muted-foreground' : 'bg-slate-100 text-slate-500'}`}>
                                    <Calendar className="w-4 h-4" />
                                    {edu.period}
                                </div>
                            </div>

                            {edu.note && (
                                <div className={`flex items-center gap-2 text-sm italic ${mutedColor}`}>
                                    <Award className="w-4 h-4 text-blue-600/60" />
                                    {edu.note}
                                </div>
                            )}

                            <div className="flex flex-wrap gap-2 pt-2">
                                {edu.skills.map((skill, i) => (
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
