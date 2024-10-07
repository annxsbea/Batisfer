'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../../assents/Logo.png';
import Text from '@/assents/Text.png';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem
} from "@/components/ui/dropdown-menu";
import { FaWhatsapp } from 'react-icons/fa';

const NavbarProdutos = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleProductsClick = () => {
    setIsDropdownOpen(!isDropdownOpen); // Alterna a visibilidade do dropdown
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Alterna a visibilidade do menu mobile
  };

  return (
    <header className="bg-white text-black fixed top-0 w-full z-10 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div>
          <Link href="/">
            <Image src={Logo} alt="Logo" width={250} height={250} className="w-32 h-auto" priority />
            <Image src={Text} alt="Text" width={250} height={250} className="w-32 h-auto" priority />
          </Link>
        </div>

        <button
          className="mr-10 lg:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Abrir menu de navegação"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

        <nav className="hidden lg:flex space-x-10 text-lg font-bold">
          <Link href="/" className={`hover:text-gray-400 ${activeSection === 'home' ? 'border-b-4 border-red-500' : ''}`}>
            Home
          </Link>
          <Link href="/" className={`hover:text-gray-400 ${activeSection === 'empresa' ? 'border-b-4 border-red-500' : ''}`}>
            Quem Somos
          </Link>
          <Link href="/" className={`hover:text-gray-400 ${activeSection === 'servicos' ? 'border-b-4 border-red-500' : ''}`}>
            Serviços
          </Link>

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

          <Link href="/" className={`hover:text-gray-400 ${activeSection === 'contato' ? 'border-b-4 border-red-500' : ''}`}>
            Contato
          </Link>
          <Link href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 px-4 text-black rounded-full hover:bg-green-600 hover:text-white">
            <FaWhatsapp className="w-5 h-5" />
            <span>Enviar Cotação</span>
          </Link>
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
              <Link href="/" onClick={toggleMenu} className="hover:text-gray-400">
                Home
              </Link>
              <Link href="/" onClick={toggleMenu} className="hover:text-gray-400">
                Empresa
              </Link>
              <Link href="/" onClick={toggleMenu} className="hover:text-gray-400">
                Serviços
              </Link>

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

              <Link href="/" onClick={toggleMenu} className="hover:text-gray-400">
                Contato
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavbarProdutos;
