'use client';
import Navbar2 from "@/app/componentes/NavBar2/page";
import Footer from "@/app/componentes/Rodape/page";
import { div } from "framer-motion/client";
import Image from "next/image";
import chapafinaquente from "@/assents/FotosProdutos/Chapas/chapafinaquente.jpg";
// import chapafinafrio from "@/assents/FotosProdutos/Chapas/chapafinafrio.jpg";
import chapagalvanizada from "@/assents/FotosProdutos/Chapas/chapagalvanizada.jpg";
import chapagrossa from "@/assents/FotosProdutos/Chapas/chapagrossa.jpg";
import chapaxadrez from "@/assents/FotosProdutos/Chapas/chapaxadrez.jpg";
// import chapaoxicortada from "@/assents/FotosProdutos/Chapas/chapaoxicortada.jpg";

const produtosChapas = [
  {
    id: 1,
    nome: "Chapa Fina a Quente",
    descricao: "Tabela de peso",
    imagem: chapafinaquente,
  },

  {
    id: 2,
    nome: "Chapa Fina a Frio",
    descricao: "Tabela de peso",
    imagem: '/',
  },

{
    id: 3,
    nome: "Chapa Galvanizada",
    descricao: "Tabela de peso",
    imagem: chapagalvanizada,
  },

  {
    id: 4,
    nome: "Chapa Grossa",
    descricao: "Tabela de peso",
    imagem: chapagrossa,
  },

{
    id: 5,
    nome: "Chapa Xadrez",
    descricao: "Tabela de peso",
    imagem: chapaxadrez,
  },

  {
    id: 6,
    nome: "Chapa Oxicortada",
    descricao: "Tabela de peso",
    imagem: '/',
  },

];


export default function ChapasPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar2 />
      
      {/* Conteúdo principal */}
      <main className="flex-grow">
        <div className="container mx-auto py-12 mt-32 max-w-screen-lg">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4 text-[#6B0808]">Chapas de Aço</h1>
            <p className="text-lg text-gray-700">
              Confira nossa seleção de chapas de aço de alta qualidade. Escolha a que melhor atende às suas necessidades.
            </p>
          </div>
          
          {/* Produtos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {produtosChapas.map((produto) => (
              <div key={produto.id} className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition duration-300 ease-in-out">
                <Image
                  src={produto.imagem}
                  alt={produto.nome}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover bg-slate-500 rounded-md"
                />
                <h2 className="text-2xl font-semibold mt-4 text-black">{produto.nome}</h2>
                <p className="mt-3 text-gray-600">{produto.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Rodapé */}
      <Footer />
    </div>
  );
}
