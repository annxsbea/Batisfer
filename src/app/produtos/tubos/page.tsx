'use client';
import Navbar2 from "@/app/componentes/NavBar2/page";
import Footer from "@/app/componentes/Rodape/page";
import Image from "next/image";
import { useRouter } from 'next/navigation'; // Importando de next/navigation

const produtosTubos = [
  {
    id: 1,
    nome: "Tubo de Aço 1",
    descricao: "Descrição do produto 1",
    imagem: "/imagens/tubo1.jpg",
  },
  {
    id: 2,
    nome: "Tubo de Aço 2",
    descricao: "Descrição do produto 2",
    imagem: "/imagens/tubo2.jpg",
  },
];

export default function Tubos() {
  const router = useRouter();

  const navigateToProduto = (produtoId: number) => {
    router.push(`/produto/${produtoId}`);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar2 />
      <main className="flex-grow">
        <div className="container mx-auto py-12 mt-32 max-w-screen-lg">
          <div className="text-center mb-16">
            <h1 className="text-3xl font-bold mb-4 text-black">Tubos</h1>
            <p className="text-lg text-gray-700">Nossos tubos atendem a diversos requisitos de qualidade.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {produtosTubos.map((produto) => (
              <div 
                key={produto.id} 
                className="bg-white shadow-lg rounded-lg p-6 transform transition-transform duration-300 hover:scale-105"
                onClick={() => navigateToProduto(produto.id)} // Navegação ao clicar no card
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
