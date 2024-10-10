"use client";

import { motion } from "framer-motion";
import Image from "next/image";
// import Image from 'next/image'; // Importando o componente Image do Next.js
import imagemSobreNos from "../assents/logo1.png"; // Altere o caminho da imagem conforme necessário

// Definindo animações
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function QuemSomos() {
  return (
    <div className="mt-[-100px] sm:mt-[-150px]">
      <motion.section
        id="quem-somos"
        className="min-h-screen flex items-center justify-center px-4 sm:px-10"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <div className="container mx-auto flex flex-col  md:items-center  md:px-32">
          <div className="text-center md:mb-6 ">
            <h2 className="text-3xl text-center sm:text-4xl  font-semibold mb-12 sm:mb-16 lg:mb-8 text-[#6B0808] border-b-2 border-[#6B0808] inline-block">
              Empresa
            </h2>
            <p className="text-base sm:text-lg text-gray-700 ">
              A Batisfer iniciou suas atividades em 2009 atuando na
              representação dos principais distribuidores de ferro e aço do
              país. No decorrer dos anos, percebeu a necessidade do mercado em
              produtos e serviços de corte, dobra e furação de chapas e vigas
              laminadas sob medida. Com o compromisso de atender com excelência
              e investindo em maquinários novos, a Batisfer preza pela
              qualidade, segurança e o melhor prazo de entrega do mercado. 
              Consulte-nos!
            </p>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
