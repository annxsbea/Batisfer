'use client';
import { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "../../../assents/Logo.png";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { FaWhatsapp } from "react-icons/fa"; // Importando ícone do WhatsApp

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "quem-somos", "servicos", "produtos", "contato"];
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleProductsClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  
    // Abre ou fecha o dropdown
    setIsDropdownOpen(!isDropdownOpen);
  
    // Rola suavemente até a seção "Produtos"
    const section = document.getElementById("produtos");
    if (section) {
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: sectionTop, behavior: "smooth" });
    }
  };
  
  

  return (
    <header className="bg-white text-black fixed top-0 w-full z-10 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-0">
        <Link href="/">
          <Image
            src={Logo}
            alt="Logo"
            width={250}
            height={250}
            className="w-48 h-auto sm:w-52 md:w-48 lg:w-48"
            priority
          />
        </Link>

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
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        <nav className="hidden md:flex space-x-14 text-lg font-bold">
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
            Quem Somos
          </a>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                onClick={handleProductsClick}
                
                className={  ` mt-[-16px] hover:text-gray-400 ${activeSection === "produtos" ? "border-b-4 border-red-500" : ""}`}
              >
                Produtos
              </button>
            </DropdownMenuTrigger>

            {isDropdownOpen && (
              <DropdownMenuContent className="bg-white shadow-md rounded-md">
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
            href="#servicos" 
            className={`hover:text-gray-400 ${activeSection === "servicos" ? "border-b-4 border-red-500" : ""}`}
          >
            Serviços
          </a>
          <a
            href="#contato"
            className={`hover:text-gray-400 ${activeSection === "contato" ? "border-b-4 border-red-500" : ""}`}
          >
            Contato
          </a>

          <a
            href="https://wa.me/5511999999999" // Coloque seu número aqui
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600"
          >
            <FaWhatsapp className="w-5 h-5" />
            <span>Enviar Cotação</span>
          </a>
        </nav>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden flex flex-col space-y-3 mt-4  ">
          <a
            href="#home"
            onClick={toggleMenu}
            className={`hover:text-gray-400 ${activeSection === "home" ? "" : ""}`}
          >
            Home
          </a>
          <a
            href="#quem-somos"
            onClick={toggleMenu}
            className={`hover:text-gray-400 ${activeSection === "quem-somos" ? "" : ""}`}
          >
            Quem Somos
          </a>
          <a
            href="#servicos"
            onClick={toggleMenu}
            className={`hover:text-gray-400 ${activeSection === "servicos" ? "" : ""}`}
          >
            Serviços
          </a>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                onClick={handleProductsClick}
                className={` hover:text-gray-400 ${activeSection === "produtos" ? "" : ""}`}
              >
                Produtos
              </button>
            </DropdownMenuTrigger>

            {isDropdownOpen && (
              <DropdownMenuContent className="bg-white shadow-md rounded-md">
               
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
            onClick={toggleMenu}
            className={`hover:text-gray-400 ${activeSection === "contato" ? "" : ""}`}
          >
            Contato
          </a>

          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600"
          >
            <FaWhatsapp className="w-5 h-5" />
            <span>Enviar Cotação</span>
          </a>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
