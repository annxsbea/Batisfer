'use client';
import Navbar2 from "@/app/componentes/NavBar2/page";
import Image from "next/image";

const produtosBobinas = [
  {
    id: 1,
    nome: "Bobina de Aço 1",
    descricao: "Descrição do produto 1",
    imagem: "/imagens/bobina1.jpg",
  },
  {
    id: 2,
    nome: "Bobina de Aço 2",
    descricao: "Descrição do produto 2",
    imagem: "/imagens/bobina2.jpg",
  },
];

export default function Bobinas() {
  return (
    <div>
      <Navbar2 />
      <div className="container mx-auto py-8 mt-48 overflow-auto"> 
        <div className="text-center mb-20">
          <h1 className="text-3xl font-bold mb-4 text-black">Bobinas</h1>
          <p className="text-lg text-gray-700">Nossas bobinas são de alta qualidade e atendem a diversas necessidades.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {produtosBobinas.map((produto) => (
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
