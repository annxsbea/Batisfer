"use client";

import { motion } from "framer-motion";
import Image from "next/image"; // Importando o componente Image do Next.js
import imagemSobreNos from "../assents/logo1.png"; // Altere o caminho da imagem conforme necessário
import { FaSquareFull  } from "react-icons/fa"; // Usando um ícone diferente

// Definindo animações
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const InfoItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex items-start mb-6 justify-center max-w-2xl"> {/* Limita a largura */}
    <FaSquareFull  size={22} className="text-[#6B0808] mt-3" /> {/* Ícone ajustado */}
    <p className="text-base ml-3 sm:text-lg mt-2 text-gray-700 text-justify">{children}</p> {/* Alinhamento justificado */}
  </div>
);

export default function QuemSomos() {
  return (
    <div className="mt-[-100px] sm:mt-[-70px]">
      <motion.section
        id="quem-somos"
        className="min-h-screen flex items-center justify-center px-4 sm:px-10"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <div className="container mx-auto flex flex-col items-center md:px-32">
          <div className="md:mb-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-12 sm:mb-16 lg:mb-8 text-[#6B0808] border-b-2 border-[#6B0808] inline-block">
              Empresa
            </h2>
            <InfoItem>
              A Batisfer iniciou suas atividades em 2009 atuando na
              representação dos principais distribuidores de ferro e aço do
              país.
            </InfoItem>
            <InfoItem>
              No decorrer dos anos, percebeu a necessidade do mercado em
              produtos e serviços de corte, dobra e furação de chapas e vigas
              laminadas sob medida.
            </InfoItem>
            <InfoItem>
              Com o compromisso de atender com excelência e investindo em
              maquinários novos, a Batisfer preza pela qualidade, segurança e
              o melhor prazo de entrega do mercado.
            </InfoItem>
            <div className="flex justify-center">
            <p className="text-base sm:text-lg  text-[#6B0808]  px-4 py-2 w-40 hover:bg-[#6B0808] hover:text-white   ">
              Consulte-nos!
            </p>
            </div>
          
          </div>
        </div>
      </motion.section>
    </div>
  );
}
