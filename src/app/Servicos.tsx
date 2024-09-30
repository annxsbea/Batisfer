'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Corte from '../assents/Corte.png';
import Dobra from '../assents/Dobra.jpg';
import Furacao from '../assents/Furacao.jpg';

// Definindo animações
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// Lista de serviços
const servicos = [
  {
    id: 1,
    nome: "Corte",
    descricao: "Guilhotina CN. Guilhotina: 0,40 mm a 6,35 mm.",
    imagem: Corte,
  },
  {
    id: 2,
    nome: "Dobra",
    descricao: "Dobradeira CNC. Dobradeira: 0,40 mm a 6,35 mm.",
    imagem: Dobra,
  },
  {
    id: 3,
    nome: "Furação",
    descricao: "Metaleira T90. Furos redondos ou oblongos, cortes de cantoneiras, ferro chato e redondos laminador até 3/4”.",
    imagem: Furacao,
  },
];

export default function Servicos() {
  return (
    <div className="mt-[-150px] lg:mt-[-220px]">
      <motion.section
        id="servicos"
        className="min-h-screen flex items-center justify-center px-4"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <div className="container mx-auto text-center text-black mt-12" >
          <h2 className="text-3xl sm:text-4xl font-semibold mb-12 sm:mb-16 lg:mb-8 text-[#6B0808] border-b-2 border-[#6B0808] inline-block">
            Serviços
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {servicos.map(servico => (
              <motion.div 
                key={servico.id} 
                className="flex flex-col items-center bg-white rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-100 p-4"
              >
                <div className="w-full h-48 sm:h-64 lg:h-80 flex items-center justify-center">
                  <Image 
                    src={servico.imagem} 
                    alt={`Imagem do ${servico.nome}`} 
                    width={400} 
                    height={200} 
                    className="w-full h-full object-cover bg-gray-200 rounded-md" 
                  />
                </div>
                <h3 className="text-2xl sm:text-3xl mb-2 font-semibold text-gray-900 mt-6 sm:mt-8">
                  {servico.nome}
                </h3>
                <div className="mt-4 text-center sm:text-justify">
                  <p className="max-w-xs mx-auto text-gray-800">
                    {servico.descricao}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}
