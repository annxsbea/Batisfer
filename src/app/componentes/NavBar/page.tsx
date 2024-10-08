'use client';
import { useState, useEffect } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import Image from 'next/image';
import Logo from '../../../assents/Logo.png';
import Text from '@/assents/Text.png'
import Link from "next/link";
import { FaAngleDown, FaAngleUp, FaWhatsapp } from 'react-icons/fa';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navbarHeight = 78;
  const navbarHeightMobile = 180;

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'quem-somos', 'servicos', 'produtos', 'contato'];
      let currentSection = 'home';

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - navbarHeight - 150) {
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProducts = () => {
    setIsProductsOpen(!isProductsOpen);
  };
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: sectionTop - 120, behavior: "smooth" });
    }
  };

  const handleProductsClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsDropdownOpen(!isDropdownOpen);
    scrollToSection("produtos");
  };

  return (
    <header className="bg-white text-black fixed top-0 w-full z-10 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4 ">
        <ScrollLink to="home" smooth={true} duration={500} className='mt-[-25px]'>
          <Image src={Logo} alt="Logo" width={250} height={250} className="w-40 h-auto" priority />
          <Image src={Text} alt="Text" width={150} height={250} className=" h-auto" priority />
        </ScrollLink>

        <button
          className="mr-10 lg:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Abrir menu de navegação"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

        <nav className="hidden lg:flex space-x-10 text-[20px] font-bold">
          <ScrollLink to="home" smooth={true} duration={500} offset={-navbarHeight} className={`hover:text-gray-400   cursor-pointer ${activeSection === 'home' ? 'border-b-4 border-red-500' : ''}`}>
            Home
          </ScrollLink>
          <ScrollLink to="quem-somos" smooth={true} duration={500} offset={-navbarHeight} className={`hover:text-gray-400  cursor-pointer ${activeSection === 'quem-somos' ? 'border-b-4 border-red-500' : ''}`}>
            Empresa
          </ScrollLink>
          <ScrollLink to="servicos" smooth={true} duration={500} offset={-navbarHeight} className={`hover:text-gray-400  cursor-pointer ${activeSection === 'servicos' ? 'border-b-4 border-red-500' : ''}`}>
            Serviços
          </ScrollLink>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                onClick={handleProductsClick}
                className={`hover:text-gray-400 ${activeSection === "produtos" ? "border-b-4 border-red-500" : ""}`}
              >
                Produtos
              </button>
            </DropdownMenuTrigger>

            {isDropdownOpen && (
              <DropdownMenuContent className="bg-white shadow-md rounded-md">
                {/* Lista de produtos */}
                {[
                  "chapas",
                  "blanks",
                  "perfis",
                  "vigas",
                  "laminados",
                  "tubos",
                  "telhas",
                  "bobinas",                 
                  "slitter",
                  
                ].map((produto) => (
                  <DropdownMenuItem asChild key={produto}>
                    <Link href={`/produtos/${produto}`}>
                      {produto.charAt(0).toUpperCase() + produto.slice(1)}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            )}

          </DropdownMenu>

          <ScrollLink to="contato" smooth={true} duration={500} offset={-navbarHeight} className={`hover:text-gray-400  cursor-pointer ${activeSection === 'contato' ? 'border-b-4 border-red-500' : ''}`}>
            Contato
          </ScrollLink>

          <a
            href="https://wa.me/5511980976575"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-4 text-black rounded-full hover:bg-green-600 hover:text-white"
          >
            <FaWhatsapp className="w-5 h-5" />
            <span>Enviar Cotação</span>
          </a>
        </nav>
      </div>

      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-20 transition-opacity duration-300">
          <div className="bg-white w-64 h-full shadow-lg fixed top-0 right-0 p-4 z-30 transition-transform transform translate-x-0 duration-300">
            <button className="text-gray-700 focus:outline-none" onClick={toggleMenu} aria-label="Fechar menu de navegação">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>

            <nav className="flex flex-col space-y-3 mt-8 text-[22px]">
              <ScrollLink to="home" smooth={true} duration={500} onClick={toggleMenu} offset={-navbarHeight} className="hover:text-gray-400">
                Home
              </ScrollLink>
              <ScrollLink to="quem-somos" smooth={true} duration={500} onClick={toggleMenu} offset={-navbarHeight} className="hover:text-gray-400">
                Empresa
              </ScrollLink>
              <ScrollLink to="servicos" smooth={true} duration={500} onClick={toggleMenu} offset={-navbarHeightMobile} className="hover:text-gray-400">
                Serviços
              </ScrollLink>

              <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                onClick={handleProductsClick}
                className={`mr-52 hover:text-gray-400 ${activeSection === "produtos" ? "border-b-4 border-red-500" : ""}`}
              >
                Produtos
              </button>
            </DropdownMenuTrigger>

            {isDropdownOpen && (
              <DropdownMenuContent className="bg-white shadow-md rounded-md">
                {/* Lista de produtos */}
                {[
                   "chapas",
                   "blanks",
                   "perfis",
                   "vigas",
                   "laminados",
                   "tubos",
                   "telhas",
                   "bobinas",                 
                   "slitter",
                ].map((produto) => (
                  <DropdownMenuItem asChild key={produto}>
                    <Link href={`/produtos/${produto}`}>
                      {produto.charAt(0).toUpperCase() + produto.slice(1)}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            )}

          </DropdownMenu>
              <ScrollLink to="contato" smooth={true} duration={500} onClick={toggleMenu} offset={-navbarHeight} className="hover:text-gray-400">
                Contato
              </ScrollLink>  
          <a
            href="https://wa.me/5511980976575"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-4 text-black rounded-full hover:bg-green-600 hover:text-white"
          >
            <FaWhatsapp className="w-5 h-5" />
            <span>Enviar Cotação</span>
          </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
