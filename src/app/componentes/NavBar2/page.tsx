'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../../assents/Logo.png'; 
import Text from '@/assents/Text.png';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuItem } from "@/components/ui/dropdown-menu"; 
import { FaWhatsapp } from 'react-icons/fa';

const NavbarProdutos = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleProductsClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault(); // Impede o comportamento padrão do botão
    setIsDropdownOpen((prev) => !prev); // Alterna o estado do dropdown
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

        <nav className="hidden lg:flex space-x-10 text-lg font-bold">
          <Link href="/" className={`hover:text-gray-400 ${activeSection === 'home' ? 'border-b-4 border-red-500' : ''}`}>
            Home
          </Link>
          <Link href="/quem-somos" className={`hover:text-gray-400 ${activeSection === 'empresa' ? 'border-b-4 border-red-500' : ''}`}>
            Quem Somos
          </Link>
          <Link href="/servicos" className={`hover:text-gray-400 ${activeSection === 'servicos' ? 'border-b-4 border-red-500' : ''}`}>
            Serviços
          </Link>

          <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
            <DropdownMenuTrigger asChild>
              <button
                onClick={handleProductsClick}
                className={`hover:text-gray-400 ${activeSection === "produtos" ? "border-b-4 border-red-500" : ""}`}
              >
                Produtos
              </button>
            </DropdownMenuTrigger>

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
          </DropdownMenu>

          <Link href="/contato" className={`hover:text-gray-400 ${activeSection === 'contato' ? 'border-b-4 border-red-500' : ''}`}>
            Contato
          </Link>
          <Link href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 px-4 text-black rounded-full hover:bg-green-600 hover:text-white">
            <FaWhatsapp className="w-5 h-5" />
            <span>Enviar Cotação</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default NavbarProdutos;
