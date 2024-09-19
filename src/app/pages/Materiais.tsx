
"use client";

import { motion } from 'framer-motion';
// Definindo animações
const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};
export default function Materiais() {
    return (
        <div>
            <h1>Materiais</h1>
             {/* Seção Materiais */}
      <motion.section
        id="materiais"
        className="min-h-screen bg-white flex items-center justify-center"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <div className="container mx-auto text-center px-4 text-black">
          <h2 className="text-4xl font-semibold mb-4  ">Materiais</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-2xl">Título do produto 1</h3>
              <p>Adicione uma breve descrição que inclua detalhes relevantes.</p>
            </div>
            <div>
              <h3 className="text-2xl">Título do produto 2</h3>
              <p>Adicione uma breve descrição que inclua detalhes relevantes.</p>
            </div>
            <div>
              <h3 className="text-2xl">Título do produto 3</h3>
              <p>Adicione uma breve descrição que inclua detalhes relevantes.</p>
            </div>
          </div>
        </div>
      </motion.section>

        </div>
        
    );
}