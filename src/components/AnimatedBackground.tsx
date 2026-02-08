import { motion } from "framer-motion";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

// Cores sólidas e suaves que alternam por seção
const sectionThemes: Record<string, { light: string; dark: string }> = {
    hero: {
        light: "hsla(222, 47%, 12%, 1)", // Premium Navy
        dark: "hsla(222, 47%, 10%, 1)"
    },
    about: {
        light: "hsla(210, 40%, 98%, 1)", // Soft off-white
        dark: "hsla(210, 40%, 98%, 1)"
    },
    projects: {
        light: "hsla(222, 47%, 12%, 1)", // Premium Navy
        dark: "hsla(222, 47%, 10%, 1)"
    },
    contact: {
        light: "hsla(210, 40%, 98%, 1)", // Soft off-white
        dark: "hsla(210, 40%, 98%, 1)"
    },
};

export function AnimatedBackground() {
    const activeSection = useActiveSection();
    const { theme: resolvedTheme, systemTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Evita erros de hidratação (SSR vs Client)
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const currentTheme = resolvedTheme === "system" ? systemTheme : resolvedTheme;
    const colors = sectionThemes[activeSection] || sectionThemes.hero;
    const bgColor = currentTheme === "dark" ? colors.dark : colors.light;

    return (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none transition-colors duration-1000">
            {/* Background Sólido com Transição Suave via Framer Motion */}
            <motion.div
                animate={{
                    backgroundColor: bgColor,
                }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute inset-0"
            />

            {/* Overlay de gradiente extremamente sutil para profundidade */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-cyan-500/[0.04] to-blue-500/[0.04] dark:via-cyan-500/[0.02] dark:to-blue-500/[0.02]" />

            {/* Grainy Noise Overlay suave */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] dark:opacity-[0.05] brightness-100" />
        </div>
    );
}
