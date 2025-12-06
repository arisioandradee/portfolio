export function Footer() {
  return (
    <footer className="relative py-8 md:py-10 bg-[#1a1a1a] border-t border-gray-800">
      <div className="container px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Informações de contato */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mb-6">
            <span className="text-sm text-gray-300">
              arisiosaf@gmail.com
            </span>
            <span className="text-sm text-gray-300">
              +55 88 9 9987-6936
            </span>
          </div>

          {/* Linha divisória */}
          <div className="border-t border-gray-800 mb-6"></div>

          {/* Créditos */}
          <div className="text-center">
            <p className="text-sm text-gray-400">
              Desenvolvido por Arisio Andrade
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
