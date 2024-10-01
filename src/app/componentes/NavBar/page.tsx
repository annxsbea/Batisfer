'use client';
import { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "../../../assents/Logo.png";
import Link from "next/link";
import { FaAngleDown, FaAngleUp, FaWhatsapp } from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "quem-somos", "servicos", "produtos", "contato"];
      let currentSection = "home";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 50) {
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProducts = () => {
    setIsProductsOpen(!isProductsOpen);
  };

  // Função genérica para rolar até qualquer seção
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: sectionTop - 150, behavior: "smooth" }); // Ajuste o offset conforme necessário
    }
  };

  const handleProductsClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsDropdownOpen(!isDropdownOpen);
    scrollToSection("produtos");
  };

  return (
    <header className="bg-white text-black fixed top-0 w-full z-10 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/">
          <Image
            src={Logo}
            alt="Logo"
            width={250}
            height={250}
            className="w-48 h-auto"
            priority
          />
        </Link>

        {/* Botão para o menu mobile */}
        <button
          className="mr-10 lg:hidden text-gray-700 focus:outline-none"
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
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        {/* Menu desktop */}
        <nav className="hidden lg:flex space-x-10 text-[20px] font-bold">
          <a
            href="#home"
            className={`hover:text-gray-400 ${activeSection === "home" ? "border-b-4 border-red-500" : ""}`}
          >
            Home
          </a>
          <a
            href="#quem-somos"
            className={`hover:text-gray-400 ${activeSection === "quem-somos" ? "border-b-4 border-red-500" : ""}`}
          >
            Empresa

          </a>
          <a
            href="#servicos"
            className={`hover:text-gray-400 ${activeSection === "servicos" ? "border-b-4 border-red-500" : ""}`}
          >
            Serviços
          </a>

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
                <DropdownMenuItem asChild>
                  <Link href="/produtos/chapas">Chapas</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/produtos/perfis">Perfis</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/produtos/vigas">Vigas</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/produtos/laminados">Laminados</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/produtos/bobinas">Bobinas</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/produtos/telhas">Telhas</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/produtos/barras">Barras</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/produtos/blanks">Blanks</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/produtos/slitter">Slitter</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/produtos/tubos">Tubos</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            )}
          </DropdownMenu>

          <a
            href="#contato"
            className={`hover:text-gray-400 ${activeSection === "contato" ? "border-b-4 border-red-500" : ""}`}
          >
            Contato
          </a>

          <a
            href="https://wa.me/5511999999999"
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
            <button
              className="text-gray-700 focus:outline-none"
              onClick={toggleMenu}
              aria-label="Fechar menu de navegação"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>

            <nav className="flex flex-col space-y-3 mt-8 text-[22px]">
              <a href="#home" onClick={toggleMenu} className="hover:text-gray-400">
                Home
              </a>
              <a href="#quem-somos" onClick={toggleMenu} className="hover:text-gray-400">
               Empresa
              </a>
              <a href="#servicos" onClick={toggleMenu} className="hover:text-gray-400">
                Serviços
              </a>

              {/* Produtos com toggle */}
              <div className="flex justify-between items-center">
                <button
                  onClick={toggleProducts}
                  className="hover:text-gray-400 focus:outline-none flex items-center"
                >
                  Produtos {isProductsOpen ? <FaAngleUp /> : <FaAngleDown />}
                </button>
              </div>

              {isProductsOpen && (
                <div className="flex flex-col pl-4 space-y-2">
                  <a href="/produtos/chapas" className="hover:text-gray-400">
                    Chapas
                  </a>
                  <a href="/produtos/perfis" className="hover:text-gray-400">
                    Perfis
                  </a>
                  <a href="/produtos/vigas" className="hover:text-gray-400">
                    Vigas
                  </a>
                  <a href="/produtos/laminados" className="hover:text-gray-400">
                    Laminados
                  </a>
                  <a href="/produtos/bobinas" className="hover:text-gray-400">
                    Bobinas
                  </a>
                  <a href="/produtos/telhas" className="hover:text-gray-400">
                    Telhas
                  </a>
                  <a href="/produtos/barras" className="hover:text-gray-400">
                    Barras
                  </a>
                  <a href="/produtos/blanks" className="hover:text-gray-400">
                    Blanks
                  </a>
                  <a href="/produtos/slitter" className="hover:text-gray-400">
                    Slitter
                  </a>
                  <a href="/produtos/tubos" className="hover:text-gray-400">
                    Tubos
                  </a>
                </div>
              )}

              <a href="#contato" onClick={toggleMenu} className="hover:text-gray-400">
                Contato
              </a>

              <a
                href="https://wa.me/5511999999999"
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
