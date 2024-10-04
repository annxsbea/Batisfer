'use client';
import Navbar2 from "@/app/componentes/NavBar2/page";
import Footer from "@/app/componentes/Rodape/page";
import Image from "next/image";

const produtosTelhas = [
  {
    id: 1,
    nome: "Telha de Cerâmica 1",
    descricao: "Telha de cerâmica de alta qualidade, ideal para diversos projetos.",
    imagem: "/imagens/telha1.jpg",
  },
  {
    id: 2,
    nome: "Telha de Cerâmica 2",
    descricao: "Telha resistente, disponível em várias cores e formatos.",
    imagem: "/imagens/telha2.jpg",
  },
];

export default function Telhas() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar2 />
      <main className="flex-grow">
        <div className="container mx-auto py-12 mt-32 max-w-screen-lg">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4 text-black">Telhas</h1>
            <p className="text-lg text-gray-700">
              Conheça nossas telhas e suas aplicações.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {produtosTelhas.map((produto) => (
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
