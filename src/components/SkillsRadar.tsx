import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    ResponsiveContainer,
} from "recharts";

const data = [
    { subject: "Back-end", A: 75, fullMark: 100 },
    { subject: "Front-end", A: 90, fullMark: 100 },
    { subject: "Dados", A: 95, fullMark: 100 },
    { subject: "Automação", A: 70, fullMark: 100 },
    { subject: "IA", A: 95, fullMark: 100 },
    { subject: "DevOps", A: 65, fullMark: 100 },
];

export function SkillsRadar({ dark = false }: { dark?: boolean }) {
    const gridColor = dark ? "hsla(var(--border))" : "rgba(15, 23, 42, 0.2)";
    const labelColor = dark ? "hsla(var(--muted-foreground))" : "rgb(30, 41, 59)";

    return (
        <div className="w-full h-[400px] flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
                    <PolarGrid stroke={gridColor} />
                    <PolarAngleAxis
                        dataKey="subject"
                        tick={{ fill: labelColor, fontSize: 13, fontWeight: 600 }}
                    />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                    <Radar
                        name="Nível"
                        dataKey="A"
                        stroke="#06b6d4"
                        fill="#3b82f6"
                        fillOpacity={0.5}
                    />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
}
