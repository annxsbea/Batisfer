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
    <div>
      <motion.section
        id="servicos"
        className="min-h-screen flex items-center justify-center"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <div className="container mx-auto text-center px-4 text-black ">
          <h2 className="text-4xl font-semibold mb-8  text-[#6B0808]">Serviços</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {servicos.map(servico => (
              <motion.div 
                key={servico.id} 
                className="flex flex-col items-center  rounded-lg  transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-100"
              >
                <div className="w-64 h-64 flex items-center justify-center">
                  <Image 
                    src={servico.imagem} 
                    alt={`Imagem do ${servico.nome}`} 
                    width={300} 
                    height={200} 
                    className="w-full h-56 object-cover bg-gray-200 rounded-md" 
                  />
                </div>
                <h3 className="text-3xl mb-2 font-semibold text-gray-900 mt-8">{servico.nome}</h3>
                <div className="mt-4 text-justify">
                  <p className="max-w-xs text-gray-800">{servico.descricao}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}
