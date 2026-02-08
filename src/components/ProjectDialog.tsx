import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface ProjectDialogProps {
    project: any;
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
}

export function ProjectDialog({ project, isOpen, onOpenChange }: ProjectDialogProps) {
    if (!project) return null;

    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-background/95 backdrop-blur-xl border-border">
                <DialogHeader>
                    <div className="flex flex-wrap gap-2 mb-2">
                        {project.tags.map((tag: string, i: number) => (
                            <Badge key={i} variant="secondary" className="bg-cyan-500/10 text-cyan-500 border-cyan-500/20">
                                {tag}
                            </Badge>
                        ))}
                    </div>
                    <DialogTitle className="text-3xl font-bold text-foreground">{project.title}</DialogTitle>
                    <DialogDescription className="text-lg text-muted-foreground mt-4">
                        {project.description}
                    </DialogDescription>
                </DialogHeader>

                <div className="space-y-8 mt-6">
                    <div className="aspect-video rounded-2xl overflow-hidden border border-border">
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <h4 className="text-xl font-bold text-foreground">O Desafio</h4>
                            <p className="text-muted-foreground">
                                {project.challenge || "Neste projeto, o principal objetivo foi criar uma solução escalável e eficiente para resolver problemas reais de gestão e processamento de dados."}
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-xl font-bold text-foreground">Solução Técnica</h4>
                            <p className="text-muted-foreground">
                                {project.solution || "Implementamos uma arquitetura modular utilizando as melhores práticas de desenvolvimento, garantindo performance e facilidade de manutenção."}
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-4 pt-4">
                        {project.isPrivate ? (
                            <Button disabled className="bg-secondary text-muted-foreground">
                                Código Privado (Empresarial)
                            </Button>
                        ) : (
                            <Button asChild className="bg-cyan-500 hover:bg-cyan-600">
                                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                    <Github className="mr-2 h-4 w-4" /> Ver no GitHub
                                </a>
                            </Button>
                        )}
                        {project.liveUrl && (
                            <Button variant="outline" asChild>
                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink className="mr-2 h-4 w-4" /> Ver Demo Online
                                </a>
                            </Button>
                        )}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
