"use client";

import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import HomeImage from '../assents/Home.png';
import Logo from '../assents/Logo.png';
import { motion } from 'framer-motion';

// Definindo animações
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Função para monitorar a rolagem e atualizar a seção ativa
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'quem-somos', 'servicos', 'materiais', 'contato'];
      let currentSection = 'home';

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 100) {
          currentSection = section;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Alterna o menu aberto/fechado
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <Head>
        <title>Minha Página</title>
      </Head>

      {/* Navbar fixa */}
      <header className="bg-white text-black fixed top-0 w-full z-10 py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4 md:px-0">
        <Image src={Logo} alt="Logo" width={80} height={80} className="w-auto h-auto" priority />

          {/* Botão de menu para dispositivos móveis */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Abrir menu de navegação"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>

          {/* Menu em dispositivos maiores (desktop) */}
          <nav className="hidden md:flex space-x-6">
            <a
              href="#home"
              className={`hover:text-gray-400 ${activeSection === 'home' ? 'border-b-4 border-red-500' : ''}`}
            >
              Home
            </a>
            <a
              href="#quem-somos"
              className={`hover:text-gray-400 ${activeSection === 'quem-somos' ? 'border-b-1 border-red-500' : ''}`}
            >
              Quem Somos
            </a>
            <a
              href="#servicos"
              className={`hover:text-gray-400 ${activeSection === 'servicos' ? 'border-b-4 border-red-500' : ''}`}
            >
              Serviços
            </a>
            <a
              href="#materiais"
              className={`hover:text-gray-400 ${activeSection === 'materiais' ? 'border-b-4 border-red-500' : ''}`}
            >
              Materiais
            </a>
            <a
              href="#contato"
              className={`hover:text-gray-400 ${activeSection === 'contato' ? 'border-b-4 border-red-500' : ''}`}
            >
              Contato
            </a>
          </nav>
        </div>

        {/* Menu dropdown em dispositivos móveis */}
        {isMenuOpen && (
          <nav className="md:hidden flex flex-col space-y-4 mt-4 px-4">
            <a
              href="#home"
              onClick={toggleMenu} // Fechar menu ao clicar
              className={`hover:text-gray-400 ${activeSection === 'home' ? '' : ''}`}
            >
              Home
            </a>
            <a
              href="#quem-somos"
              onClick={toggleMenu}
              className={`hover:text-gray-400 ${activeSection === 'quem-somos' ? '' : ''}`}
            >
              Quem Somos
            </a>
            <a
              href="#servicos"
              onClick={toggleMenu}
              className={`hover:text-gray-400 ${activeSection === 'servicos' ? '' : ''}`}
            >
              Serviços
            </a>
            <a
              href="#materiais"
              onClick={toggleMenu}
              className={`hover:text-gray-400 ${activeSection === 'materiais' ? '' : ''}`}
            >
              Materiais
            </a>
            <a
              href="#contato"
              onClick={toggleMenu}
              className={`hover:text-gray-400 ${activeSection === 'contato' ? '' : ''}`}
            >
              Contato
            </a>
          </nav>
        )}
      </header>

      {/* Seção Home */}
      <motion.section
        id="home"
        className="h-screen bg-black flex items-center justify-center relative"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <Image src={HomeImage} alt="Home" layout="fill" objectFit="cover" className="opacity-30" />
      </motion.section>

      {/* Seção Quem Somos */}
      <motion.section
        id="quem-somos"
        className="min-h-screen bg-white flex items-center justify-center"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <div className="container mx-auto text-center px-4 text-black" >
          <h2 className="text-4xl font-semibold mb-4">Sobre Nós</h2>
          <p className="text-lg text-gray-700">
            Este é o espaço para apresentar o negócio ou a marca aos visitantes. Conte sobre a equipe, missão e diferenciais.
          </p>
        </div>
      </motion.section>

      {/* Seção Serviços */}
      <motion.section
        id="servicos"
        className="min-h-screen bg-gray-100 flex items-center justify-center"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <div className="container mx-auto text-center px-4 text-black">
          <h2 className="text-4xl font-semibold mb-4">Serviços</h2>
          <p className="text-lg text-gray-700">
            Resuma os tipos de serviços oferecidos e destaque benefícios ou recursos especiais.
          </p>
        </div>
      </motion.section>

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

      {/* Seção Contato */}
      <motion.section
        id="contato"
        className="min-h-screen bg-gray-100 flex items-center justify-center"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <div className="container mx-auto text-center px-4 text-black">
          <h2 className="text-4xl font-semibold mb-4">Entre em Contato</h2>
          <p className="text-lg">Rua Cesário Galeno, 4480 – Centro – São Paulo/SP CEP 01153000</p>
        </div>
      </motion.section>

      <footer className="bg-black text-white py-4 text-center">
        <p>&copy; 2024 Nome da Empresa. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
