'use client';

import Image from "next/image";
import HomeImage from "../assents/Designer.jpeg";
import { motion } from "framer-motion";
import Contato from "./Contato";
import QuemSomos from "./QuemSomos";
import Servicos from "./Servicos";
import Navbar from "./componentes/NavBar/page";
import Footer from "./componentes/Rodape/page";
import { Produtos} from "./Produtos";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Home() {
  return (
    <div>
      <Navbar />
      <motion.section
        id="home"
        className="h-[55vh] bg-black flex items-center justify-center relative "
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <Image
          src={HomeImage}
          alt="Home"
          layout="fill"
          objectFit="cover"
          className=" opacity-45"
        />
        <div className="absolute inset-0 flex items-center justify-center ">
        </div>
      </motion.section>
      <QuemSomos />
      <Servicos />
      <Produtos/>
      <Contato />

      <a
        href="https://api.whatsapp.com/send?phone=5511980976575" 
        className="fixed bottom-10 right-6"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
      >
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-12 h-12"
          width={100}
          height={100}
        />
      </a>
      
      <Footer />
    </div>
  );
}
