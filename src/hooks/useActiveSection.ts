import { useState, useEffect } from "react";

export function useActiveSection() {
    const [activeSection, setActiveSection] = useState("hero");

    useEffect(() => {
        const sections = ["hero", "about", "projects", "contact"];
        const observers = new Map();

        const callback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(callback, {
            threshold: 0.1,
            rootMargin: "-10% 0px -10% 0px", // More permissive focus strip
        });

        sections.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return activeSection;
}
