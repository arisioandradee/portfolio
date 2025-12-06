import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export function Contact() {
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

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-24 md:py-32 relative overflow-hidden bg-[#1a1a1a]"
    >
      <div className="container px-4 relative z-10">
        <div
          className={`max-w-4xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Cabeçalho */}
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Entre em contato
            </h2>
          </div>

          {/* Formulário */}
          <form
            action="https://formsubmit.co/arisiosaf@gmail.com"
            method="POST"
            className="p-8 md:p-10 space-y-6"
            onSubmit={() => toast.success("Mensagem enviada com sucesso! 🚀")}
          >
            {/* Configurações do FormSubmit */}
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_next"
              value="https://arisioandrade.vercel.app/"
            />
            <input
              type="hidden"
              name="_subject"
              value="Nova mensagem do site!"
            />
            <input type="hidden" name="_template" value="table" />
            <input type="text" name="_honey" style={{ display: "none" }} />

            {/* Grid de campos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Coluna Esquerda */}
              <div className="space-y-6">
                <Input
                  id="name"
                  name="name"
                  placeholder="Nome"
                  required
                  className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-orange-500 focus:ring-orange-500 rounded-md"
                />

                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Telefone"
                  required
                  className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-orange-500 focus:ring-orange-500 rounded-md"
                />

                <Input
                  id="timeline"
                  name="timeline"
                  placeholder="Prazo"
                  className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-orange-500 focus:ring-orange-500 rounded-md"
                />
              </div>

              {/* Coluna Direita */}
              <div className="space-y-6 flex flex-col">
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-orange-500 focus:ring-orange-500 rounded-md"
                />

                <Input
                  id="service"
                  name="service"
                  placeholder="Serviço de Interesse"
                  className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-orange-500 focus:ring-orange-500 rounded-md"
                />

                <Textarea
                  id="message"
                  name="message"
                  placeholder="Detalhes do Projeto..."
                  rows={6}
                  required
                  className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-orange-500 focus:ring-orange-500 rounded-md resize-none min-h-[140px]"
                />
              </div>
            </div>

            {/* Botão Enviar */}
            <div className="flex justify-end mt-6">
              <Button
                type="submit"
                className="bg-transparent border border-gray-600 text-white hover:bg-gray-800 hover:border-orange-500 hover:text-orange-500 px-8 py-6 rounded-md transition-colors"
              >
                Enviar
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
