"use client";

import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import HomeImage from "../assents/Home.png";
import Logo from "../assents/Logo.png";
import { motion } from "framer-motion";
import Contato from "./pages/Contato";
import Materiais from "./pages/Materiais";
import QuemSomos from "./pages/QuemSomos";
import Servicos from "./pages/Servicos";
import Navbar from "./componentes/NavBar/page";
import Footer from "./componentes/Rodape/page";
// Definindo animações
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "quem-somos",
        "servicos",
        "produtos",
        "contato",
      ];
      let currentSection = "home";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 100) {
          currentSection = section;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Alterna o menu aberto/fechado
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
  
      <Navbar/>
     
      {/* Seção Home */}
      <motion.section
        id="home"
        className="h-screen bg-black flex items-center justify-center relative"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <Image
          src={HomeImage}
          alt="Home"
          layout="fill"
          objectFit="cover"
          className="opacity-30"
        />
      </motion.section>

      <QuemSomos />
      <Servicos />
      <Contato />
      <a
        href="https://api.whatsapp.com/send?phone=5511980976575" // Substitua pelo seu número do WhatsApp
        className="fixed bottom-10 right-6"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
    >
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            className="w-12 h-12"
        />
    </a>
     <Footer/>
    </div>
  );
}
