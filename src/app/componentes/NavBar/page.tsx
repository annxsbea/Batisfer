"use client";
import { useState, useEffect, useRef } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import Image from "next/image";
import Logo from "../../../assents/Logo.png";
import Text from "@/assents/Text.png";
import Link from "next/link";
import { FaAngleDown, FaAngleUp, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navbarHeight = 80;
  const navbarHeight2 = 80;
  const navbarHeight3 = 165;
  const navbarHeightservicos = 100;

  const navbarHeightEmpresa = 120;
  const navbarHeightEmpresa2 = 180;

  const navbarHeightEContato = 180;


  const navbarHeightMobile = 200;

  useEffect(() => {
    const querySplit = window.location.href.split("?q=");
    const query = querySplit.length > 1 ? querySplit[1] : "";

    const section = document.getElementById(query);

    if (section) {
      window.scrollTo({
        top: section.offsetTop - navbarHeight,
        behavior: "smooth",
      });
    }
    const handleScroll = () => {
      const sections = [
        "home",
        "produtos",
        "servicos",
        "contato",
        "quem-somos",
      ];

      let currentSection = "home";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (
          element &&
          window.scrollY >= element.offsetTop - navbarHeight - 150
        ) {
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
  };
  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleMouseLeave = () => {
    setTimeout(() => {
      closeDropdown();
    }, 900); // Ajuste o tempo conforme necessário
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };
  return (
    <header className="bg-white text-black fixed top-0 w-full z-10 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4 ">
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          className="mt-[-25px]"
        >
          <Image
            src={Logo}
            alt="Logo"
            width={250}
            height={250}
            className="w-40 h-auto"
            priority
          />
          <Image
            src={Text}
            alt="Text"
            width={150}
            height={250}
            className=" h-auto"
            priority
          />
        </ScrollLink>
        <div className="flex flex-col text-[11px] ml-4 lg: lg:mr-14 items-start space-y-1 md:text-sm text-gray-600">
          <div className="flex items-center space-x-1">
            <FaWhatsapp className="w-4 h-4" />
            <a
              href="https://wa.me/5511980976575"
              target="_blank"
              rel="noopener noreferrer"
            >
              (11) 98097-6575
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <FaPhoneAlt className="w-4 h-4" />
            <a href="tel:+551129668200">(11) 2966-6200</a>
          </div>
          <div className="flex items-center space-x-2">
            <MdOutlineMail className="w-4 h-4" />
            <a href="mailto:vendas@batisfer.com.br">vendas@batisfer.com.br</a>
          </div>
        </div>

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

        <nav className="hidden lg:flex space-x-10 text-[20px] font-bold">
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            offset={-navbarHeight}
            className={`hover:text-gray-400 cursor-pointer ${
              activeSection === "home" ? "border-b-4 border-red-500" : ""
            }`}
          >
            Home
          </ScrollLink>
          <div
            className="relative"
            ref={dropdownRef}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={toggleDropdown}
              className="hover:text-gray-400 flex items-center border-b-4 border-transparent"
              onMouseEnter={handleMouseEnter}
            >
              Produtos
              <IoIosArrowDown className="w-5 h-5 ml-2" />
            </button>

            {/* Dropdown menu */}
            {isDropdownOpen && (
              <ul
                className="absolute text-sm bg-white border border-gray-300 rounded-md mt-2 w-32 z-50"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
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
                  <li key={produto} className="hover:bg-gray-100">
                    <Link
                      href={`/produtos/${produto}`}
                      className="block px-4 py-2 text-gray-700"
                    >
                      {produto.charAt(0).toUpperCase() + produto.slice(1)}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <ScrollLink
            to="servicos"
            smooth={true}
            duration={500}
            offset={-navbarHeightservicos}
            className={`hover:text-gray-400 cursor-pointer ${
              activeSection === "servicos" ? "border-b-4 border-red-500" : ""
            }`}
          >
            Serviços
          </ScrollLink>

          <ScrollLink
            to="contato"
            smooth={true}
            duration={500}
            offset={-navbarHeightEContato}
            className={`hover:text-gray-400 cursor-pointer ${
              activeSection === "contato" ? "border-b-4 border-red-500" : ""
            }`}
          >
            Contato
          </ScrollLink>
          <ScrollLink
            to="quem-somos"
            smooth={true}
            duration={500}
            offset={-navbarHeightEmpresa}
            className={`hover:text-gray-400 cursor-pointer ${
              activeSection === "quem-somos" ? "border-b-4 border-red-500" : ""
            }`}
          >
            Empresa
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
              <ScrollLink
                to="home"
                smooth={true}
                duration={500}
                onClick={toggleMenu}
                offset={-navbarHeight}
                className="hover:text-gray-400"
              >
                Home
              </ScrollLink>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    onClick={handleProductsClick}
                    className={`mr-16 flex hover:text-gray-400 ${
                      activeSection === "produtos"
                        ? "border-b-4 border-red-500"
                        : ""
                    }`}
                  >
                    Produtos
                    <IoIosArrowDown className="w-5 h-5  ml-2 mt-2" />
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

              <ScrollLink
                to="servicos"
                smooth={true}
                duration={500}
                onClick={toggleMenu}
                offset={-navbarHeightMobile}
                className="hover:text-gray-400"
              >
                Serviços
              </ScrollLink>

              <ScrollLink
                to="contato"
                smooth={true}
                duration={500}
                onClick={toggleMenu}
                offset={-navbarHeight3}
                className="hover:text-gray-400"
              >
                Contato
              </ScrollLink>
              <ScrollLink
                to="quem-somos"
                smooth={true}
                duration={500}
                onClick={toggleMenu}
                offset={-navbarHeightEmpresa2}
                className="hover:text-gray-400"
              >
                Empresa
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
