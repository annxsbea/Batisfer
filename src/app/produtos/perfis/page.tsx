'use client';
import Navbar2 from "@/app/componentes/NavBar2/page";
import Footer from "@/app/componentes/Rodape/page";
import Image from "next/image";

const produtosPerfis = [
  {
    id: 1,
    nome: "Perfil de Aço 1",
    descricao: "Perfil de aço resistente e durável, ideal para construção civil.",
    imagem: "/imagens/perfil1.jpg",
  },
  {
    id: 2,
    nome: "Perfil de Aço 2",
    descricao: "Perfil de aço leve, perfeito para estruturas metálicas.",
    imagem: "/imagens/perfil2.jpg",
  },
];

export default function Perfis() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar2 />
      <main className="flex-grow">
        <div className="container mx-auto py-12 mt-32 max-w-screen-lg">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4 text-[#6B0808]">Perfis de Aço</h1>
            <p className="text-lg text-gray-700">
              Descubra os diferentes tipos de perfis disponíveis e como podem atender às suas necessidades.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {produtosPerfis.map((produto) => (
              <div key={produto.id} className="bg-white shadow-lg rounded-lg p-6 transform transition-transform duration-300 hover:scale-105">
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
     {/* Rodapé */}
     <Footer />
    </div>
  );
}
