import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { Send, Phone, Mail, Clock, Github, Linkedin } from "lucide-react";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulation
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Mensagem enviada com sucesso! 🚀");
    }, 1000);
  };

  const contactInfo = [
    { icon: Mail, title: "Email", value: "arisiosaf@gmail.com" },
    { icon: Phone, title: "Telefone", value: "+55 88 9 9987-6936" },
    { icon: Clock, title: "Disponibilidade", value: "Segunda a Sexta, 8h às 18h" },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/arisioandrade/" },
    { icon: Github, href: "https://github.com/arisioandrade" },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 bg-off-white-premium relative overflow-hidden">
      <div className="container px-4 relative z-10 text-slate-900">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <span className="text-xs md:text-sm text-cyan-500 font-bold tracking-[0.3em] uppercase block mb-4">
            Contato
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight mb-6">
            Vamos conversar sobre seu <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Próximo Projeto</span>?
          </h2>
          <p className="text-slate-600 text-lg">
            Estou sempre aberto a novos desafios e oportunidades de colaboração.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Formulário Centralizado */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/80 backdrop-blur-sm border-slate-200 shadow-xl shadow-slate-200/50 p-8 md:p-12 rounded-3xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 ml-1">Nome</label>
                    <Input
                      name="name"
                      placeholder="Como posso te chamar?"
                      required
                      className="bg-slate-50 border-slate-200 focus:border-cyan-500 h-12 rounded-xl text-slate-900"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 ml-1">Email</label>
                    <Input
                      name="email"
                      type="email"
                      placeholder="seu@email.com"
                      required
                      className="bg-slate-50 border-slate-200 focus:border-cyan-500 h-12 rounded-xl text-slate-900"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 ml-1">Assunto</label>
                  <Input
                    name="subject"
                    placeholder="No que posso te ajudar?"
                    required
                    className="bg-slate-50 border-slate-200 focus:border-cyan-500 h-12 rounded-xl text-slate-900"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 ml-1">Mensagem</label>
                  <Textarea
                    name="message"
                    placeholder="Conte-me um pouco mais..."
                    required
                    className="bg-slate-50 border-slate-200 focus:border-cyan-500 min-h-[150px] rounded-xl text-slate-900"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white font-bold transition-all duration-300 shadow-lg shadow-cyan-500/25 gap-2"
                >
                  {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
