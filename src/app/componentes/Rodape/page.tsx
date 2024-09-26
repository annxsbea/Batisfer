'use client';


import Image from "next/image";
import Link from "next/link";
import Logo from "../../../assents/Logo.png";

const Footer = () => {
    return (
        <footer className="text-[#201E1E] font-semibold w-full mt-10">
        <div className="flex justify-between items-center bg-gray-200 py-4 px-6 ">
          <div className="flex items-center">
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
          </div>
      
          {/* Contato */}
          <div className="text-right">
            <p>Rua Almirante Alexandrino 440 - Vila Invernada - São Paulo - SP, 03350-010, Brasil</p>
            <p className="text-lg">✉ <a href="mailto:vendas@batisfer.com.br" className="underline">vendas@batisfer.com.br</a></p>
            <p className="text-lg">📞 (11) 98097-6575</p>

          </div>
        </div>
      
        {/* Endereço e direitos reservados */}
        <div className=" text-center bg-gray-200 p-4 w-full">
          <p>&copy; 2024 <a href="https://www.batisfer.com.br" className="underline">BATISFER</a>. Todos os direitos reservados.</p>
        </div>
      </footer>
      
    );
  };
  
  export default Footer;
  