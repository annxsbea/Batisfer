'use client';
import Image from "next/image";
import HomeImage from "../assents/Designer.jpeg";
import { motion } from "framer-motion";
import Contato from "./Contato";
import QuemSomos from "./QuemSomos";
import Servicos from "./Servicos";
import Navbar from "./componentes/NavBar/page";
import Footer from "./componentes/Rodape/page";
import { Produtos } from "./Produtos";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Home() {
  return (
    <div>
      <Navbar />

      {/* Seção de Home com imagem de fundo */}
      <motion.section
        id="home"
        className="h-[50vh] md:h-[60vh] lg:h-[70vh] mb-10 bg-black flex items-center justify-center relative"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src={HomeImage}
            alt="Designer"
            layout="fill"
            objectFit="cover"
            className="opacity-45"
            priority
          />
        </div>
      </motion.section>

      {/* Seções da página com altura mínima padronizada */}
      <motion.section
        id="produtos"
        className="min-h-[50vh] md:min-h-[60vh] lg:min-h-[75vh] mb-[-80px] lg:mb-[20px]  items-center justify-center"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <Produtos />
      </motion.section>

      <motion.section
        id="servicos"
        className="min-h-[50vh] mb-[50px] md:min-h-[60vh] lg:min-h-[80vh]  md:mb-[20px] lg:mb-[50px] flex items-center justify-center"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <Servicos />
      </motion.section>

      <motion.section
        id="contato"
        className="min-h-[50vh] mb-[50px] md:min-h-[60vh] lg:min-h-[80vh] md:mb-[20px] lg:mb-[50px] flex items-center justify-center"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <Contato />
      </motion.section>

      <motion.section
        id="quem-somos"
        className="min-h-[50vh] mb-[50px] md:min-h-[60vh] lg:min-h-[80vh]  md:mb-[20px] lg:mb-[50px]  flex items-center justify-center"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <QuemSomos />
      </motion.section>

      <a
        href="https://api.whatsapp.com/send?phone=5511980976575" 
        className="fixed bottom-10 right-16 lg:right-8"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
      >
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
          width={100}
          height={100}
        />
      </a>

      {/* Rodapé */}
      <Footer />
    </div>
  );
}
