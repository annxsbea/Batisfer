'use client';
import Navbar2 from "@/app/componentes/NavBar2/page";
import Footer from "@/app/componentes/Rodape/page";
import Image from "next/image";

import Cantoneira from "@/assents/FotosProdutos/Laminados/cantoneira.jpg";
import FerroChato from "@/assents/FotosProdutos/Laminados/ferrochato.jpg";
import BarraRedonda from "@/assents/FotosProdutos/Laminados/barraredonda.jpg";
import BarraQuadrada from "@/assents/FotosProdutos/Laminados/barraquadrada.jpg";
import perfilte from "@/assents/FotosProdutos/Laminados/perfilt.jpg";
const produtosLaminados = [
  {
      id: 1,
      nome: "Cantoneira",
      descricao: "Tabela de peso",
      imagem:Cantoneira,
    },
  
  {
      id: 2,
      nome: "Ferro Chato",
      descricao: "Tabela de peso",
      imagem: FerroChato,
    },
  
   {
      id: 3,
      nome: "Barra Redonda",
      descricao: "Tabela de peso",
      imagem:BarraRedonda,
    },
  
    {
      id: 3,
      nome: "Barra Quadrada",
      descricao: "Tabela de peso",
      imagem: BarraQuadrada,
    },
  
  {
      id: 4,
      nome: "Perfil T",
      descricao: "Tabela de peso",
      imagem: perfilte,
    },
  
  ];
  
  
  

export default function Laminados() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar2 />
      <main className="flex-grow">
        <div className="container mx-auto py-12 mt-32 max-w-screen-lg">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4 text-[#6B0808]">Laminados</h1>
            <p className="text-lg text-gray-700">
              Explore nossa linha de laminados e suas características.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {produtosLaminados.map((produto) => (
              <div 
                key={produto.id} 
                className="bg-white shadow-lg rounded-lg p-6 transform transition-transform duration-300 hover:scale-105"
              >
                <Image
                  src={produto.imagem}
                  alt={produto.nome}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover bg-slate-500 rounded-md"
                />
                <h2 className="text-2xl font-semibold mt-4 text-black">{produto.nome}</h2>
                <p className="mt-2 text-gray-600">{produto.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
