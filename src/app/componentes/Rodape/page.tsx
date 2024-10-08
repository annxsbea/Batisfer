'use client';
import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa"; // Ícones do WhatsApp, Instagram e Facebook
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../assents/Logo.png";
import { MdOutlineMail } from "react-icons/md";
import { PiHouseBold } from "react-icons/pi";
import { BsTelephone } from "react-icons/bs";
import logo1 from "../../../assents/logo1.png";
const Footer = () => {
  return (
    <footer className="text-[#201E1E] font-semibold w-full  bg-gray-100">
      <div className="flex flex-col md:flex-row justify-between items-start bg-gray-200 py-8 px-4 space-y-8 md:space-y-0">
        
        {/* Logo */}
        <div className="flex flex-col justify-center items-center lg:items-start">
          <Link href="/">
            <Image
              src={logo1}
              alt="Logo"
              width={350}
              height={350}
              className="w-32 h-auto sm:w-48 md:w-40"
              priority
            />
          </Link>
        </div>

        {/* Redes sociais */}
        <div className="flex flex-col text-[#1a1919de] items-start md:w-1/4">
          {/* <h3 className="text-[#6B0808] text-xl mb-2">Redes Sociais</h3>
          <p className="mb-4 text-left">Acompanhe as novidades da Batisfer em todas as nossas redes.</p>
          <div className="flex space-x-4">
            <Link href="https://wa.me/5511980976575" target="_blank" aria-label="WhatsApp">
              <FaWhatsapp size={30} className="text-black-600 hover:text-red-800" />
            </Link>
            <Link href="https://www.instagram.com/seuusuario" target="_blank" aria-label="Instagram">
              <FaInstagram size={30} className="text-black-600 hover:text-red-800" />
            </Link>
            <Link href="https://www.facebook.com/seuusuario" target="_blank" aria-label="Facebook">
              <FaFacebookF size={30} className="text-black-600 hover:text-red-800" />
            </Link>
          </div> */}
        </div>

        {/* Endereço */}
        <div className="flex text-[#1a1919de] flex-col items-start text-left md:w-1/4">
          <h3 className="font-semibold text-[#6B0808] text-xl mb-2">Endereço</h3>
          <div className="flex items-center">
            <PiHouseBold className="mr-2  hover:text-[#6B0808]" size={32} />
            <p className="flex flex-col">
              <a
                href="https://www.google.com/maps?q=Rua+Almirante+Alexandrino+440+-+Vila+Invernada,+São+Paulo+-+SP,+03350-010,+Brasil"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-lg "
              >
                Rua Almirante Alexandrino, 440   
              </a>
          
            </p>
          </div>
          <a
           href="https://www.google.com/maps?q=Rua+Almirante+Alexandrino+440+-+Vila+Invernada,+São+Paulo+-+SP,+03350-010,+Brasil"
           target="_blank"
           rel="noopener noreferrer"
           className="text-lg ml-10  underline">CEP: 03350-010 - São Paulo - SP</a>
        </div>

        {/* Contato */}
        <div className="flex flex-col text-[#1a1919de] items-start md:w-1/4">
          <h3 className="font-semibold text-[#6B0808] text-xl mb-2">Contato</h3>
          <Link href="https://wa.me/5511980976575" target="_blank" aria-label="WhatsApp" className="flex items-center">
            <FaWhatsapp size={30} className=" hover:text-[#6B0808]" />
            <p className="text-lg ml-3 underline">(11) 98097-6575</p>
          </Link>
          <div className="mt-4 flex items-center">
            <BsTelephone size={30} className=" hover:text-[#6B0808]" />
            <p className="text-lg ml-2">(11) 2966-6200</p>
          </div>
          <div className="mt-4 flex items-center">
            <MdOutlineMail size={30}  className=" hover:text-[#6B0808]"/>
            <p className="text-lg ml-2">
              <a href="mailto:vendas@batisfer.com.br" className="underline">vendas@batisfer.com.br</a>
            </p>
          </div>
        </div>
      </div>

      {/* Direitos reservados */}
      <div className="text-left text-[#1a1919de] bg-gray-200 py-4 px-4 md:text-center lg:text-center">
        <p>&copy; 2024 <a href="https://www.batisfer.com.br" className="underline">BATISFER</a>. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
