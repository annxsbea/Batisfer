'use client';
import Navbar2 from "@/app/componentes/NavBar2/page";
import Image from "next/image";

const produtosBlanks = [
  {
    id: 1,
    nome: "Blank de Aço 1",
    descricao: "Descrição do produto 1",
    imagem: "/imagens/blank1.jpg",
  },
  {
    id: 2,
    nome: "Blank de Aço 2",
    descricao: "Descrição do produto 2",
    imagem: "/imagens/blank2.jpg",
  },
];

export default function Blanks() {
  return (
    <div>
      <Navbar2 />
      <div className="container mx-auto py-8 mt-48 overflow-auto"> 
        <div className="text-center mb-20">
          <h1 className="text-3xl font-bold mb-4 text-black">Blanks</h1>
          <p className="text-lg text-gray-700">Nossos blanks são ideais para diversas aplicações.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {produtosBlanks.map((produto) => (
            <div key={produto.id} className="bg-white shadow-md rounded-md p-4">
              <Image src={produto.imagem} alt={produto.nome} width={300} height={200} className="w-full h-48 object-cover bg-slate-500 rounded-md" />
              <h2 className="text-xl font-bold mt-4 text-black">{produto.nome}</h2>
              <p className="mt-2 text-black">{produto.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
