'use client';

import { motion } from 'framer-motion';

// Definindo animações
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Contato() {
  return (
    <div>

      <motion.section
        id="servicos"
        className="min-h-screen flex items-center justify-center"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <div className="container mx-auto text-center px-4 text-black">
          <h2 className="text-4xl font-semibold mb-20">Serviços</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center">
              <h3 className="text-2xl mb-2">Corte e Dobra</h3>
              <div className="w-64 h-64 bg-slate-500 flex items-center justify-center">
                <span className="text-white text-lg">Imagem 1</span> {/* Placeholder para imagem */}
              </div>
              <div className="mt-4 text-justify">
                <p className="max-w-xs text-sm">Dobradeira CNC 4 eixos.</p>
                <p className="mt-2 max-w-xs text-sm">Guilhotina: 0,60 mm a 12,7 mm.</p>
                <p className="mt-2 max-w-xs text-sm">Dobradeira: 0,60 mm a 12,7 mm.</p>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="text-2xl mb-2">Guilhotina</h3>
              <div className="w-64 h-64 bg-slate-500 flex items-center justify-center">
                <span className="text-white text-lg">Imagem 2</span> {/* Placeholder para imagem */}
              </div>
              <div className="mt-4 text-justify">
                <p className="max-w-xs text-sm">Corte de chapas em Tiras e Blanks com precisão e eficiência.</p>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="text-2xl mb-2">Metaleira</h3>
              <div className="w-64 h-64 bg-slate-500 flex items-center justify-center">
                <span className="text-white text-lg">Imagem 3</span> {/* Placeholder para imagem */}
              </div>
              <div className="mt-4 text-justify">
                <p className="max-w-xs text-sm">Furos Redondos ou Oblongos em Chapas, Perfis, Barra Chata e Cantoneiras para fixação de componentes. Cantoneiras, Ferro Chato e Redondos cortados sob medida.</p>
              </div>
            </div>
          </div>

        </div>


      </motion.section>
    </div>
  );
}
