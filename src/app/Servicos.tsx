'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Corte from '../assents/Corte.png';
import Dobra from '../assents/Dobra.jpg';
import Furacao from '../assents/Furacao.jpg';
import { desc } from 'framer-motion/client';

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
    descricao: "- Guilhotina CN.",
    descricao2: "- Medidas: 0,40 mm a 6,35 mm",
    imagem: Corte,
  },
  {
    id: 2,
    nome: "Dobra",
    descricao: "- Dobradeira CNC.",
    descricao2: "- Medidas: 0,40 mm a 6,35 mm.",
    imagem: Dobra,
  },
  {
    id: 3,
    nome: "Furação",
    descricao: "- Metaleira T90.",
    descricao2: "- Furos redondos ou oblongos.",
    descricao3: "- Cortes de cantoneiras, ferro chato  e redondos laminados até 3/4”. ",
 
    imagem: Furacao,
  },
];

export default function Servicos() {
  return (
    <div className="mt-[50px] lg:mt-[-170px]">
      <motion.section
        id="servicos"
        className="min-h-screen flex items-center justify-center px-4"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <div className="container mx-auto text-center text-black " >
          <h2 className="text-3xl sm:text-4xl font-semibold mb-12 sm:mb-16 lg:mb-8 text-[#6B0808] border-b-2 border-[#6B0808] inline-block">
            Serviços
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {servicos.map(servico => (
              <motion.div 
                key={servico.id} 
                className="flex flex-col items-center bg-white rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-100 p-4"
              >
                <div className="w-full h-48 sm:h-64 lg:h-80 flex items-center justify-center  ">
                  <Image 
                    src={servico.imagem} 
                    alt={`Imagem do ${servico.nome}`} 
                    width={400} 
                    height={200} 
                    className="w-full h-full object-cover bg-gray-200 rounded-md" 
                  />
                </div>
                <h3 className="text-2xl sm:text-3xl mb-2 font-semibold  text-gray-900 mt-6 sm:mt-8 " >
                  {servico.nome}
                </h3>
                <div className="mt-5 text-start w-full ">
                  <p className="max-w-xs  text-gray-800">
                    {servico.descricao}
                  </p>
                  <p className="max-w-xs  text-gray-800">
                    {servico.descricao2}
                  </p>
                  <p className="text-[15px] text-gray-800">
                    {servico.descricao3}
                  </p>
                  <div className="">
               
                  {/* <p className="max-w-xs text-gray-800 ml-2">
                    {servico.descricao4}
                  </p> */}
                  </div>
                 
                
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}
