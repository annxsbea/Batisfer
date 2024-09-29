'use client';
import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa"; // Ícones do WhatsApp, Instagram e Facebook

import Image from "next/image";
import Link from "next/link";
import Logo from "../../../assents/Logo.png";

const Footer = () => {
  return (
    <footer className="text-[#201E1E] font-semibold w-full mt-10 bg-gray-100">
      <div className="flex justify-between items-start bg-gray-200 py-4 px-6">
        
        {/* Logo */}
        <div className="flex items-start">
          <Link href="/">
            <Image
              src={Logo}
              alt="Logo"
              width={100}
              height={100}
              className="w-48 h-auto sm:w-52 md:w-48 lg:w-48"
              priority
            />
          </Link>
        </div>

        {/* Mapa do site */}
        <div className="flex flex-col text-left space-y-2">
          <h3 className="font-semibold">Mapa do site</h3>
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="#quem-somos" className="hover:underline">Quem Somos</Link>
          <Link href="#produtos" className="hover:underline">Produtos</Link>
          <Link href="#servicos" className="hover:underline">Serviços</Link>
          <Link href="#contato" className="hover:underline">Contato</Link>
        </div>

        {/* Contato */}
        <div className="text-right">
          <p>Rua Almirante Alexandrino 440 - Vila Invernada</p>
          <p>São Paulo - SP, 03350-010, Brasil</p>
          <p className="text-lg">✉ <a href="mailto:vendas@batisfer.com.br" className="underline">vendas@batisfer.com.br</a></p>
          <p className="text-lg">📞 (11) 98097-6575</p>
        </div>
      </div>

         {/* Redes sociais */}
         <div className="flex justify-start space-x-4 bg-gray-200 px-16 mt-[-20px]">
        <Link href="https://wa.me/5511980976575" target="_blank">
          <FaWhatsapp size={30} className="text-green-500" />
        </Link>
        <Link href="https://www.instagram.com/seuusuario" target="_blank">
          <FaInstagram size={30} className="text-pink-500" />
        </Link>
        <Link href="https://www.facebook.com/seuusuario" target="_blank">
          <FaFacebookF size={30} className="text-blue-600" />
        </Link>
      </div>
      {/* Endereço e direitos reservados */}
      <div className="text-center bg-gray-200 p-4 w-full">
        <p>&copy; 2024 <a href="https://www.batisfer.com.br" className="underline">BATISFER</a>. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
