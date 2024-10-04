'use client';
import Navbar2 from "@/app/componentes/NavBar2/page";
import Footer from "@/app/componentes/Rodape/page";
import Image from "next/image";
import Perfili from "../../../assents/FotosProdutos/Vigas/perfili.jpg";
const produtosVigas = [
  {
    id: 1,
    nome: "Perfil I",
    descricao: "Tabela de peso",
    imagem: Perfili,
  },

  {
    id: 2,
    nome: "Viga U",
    descricao: "Tabela de peso",
    imagem: "/imagens/vigau.jpg",
  },

{
    id: 3,
    nome: "Viga W",
    descricao: "Tabela de peso",
    imagem: "/imagens/vigaw.jpg",
  },

];


export default function Vigas() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar2 />
      <main className="flex-grow">
        <div className="container mx-auto py-12 mt-32 max-w-screen-lg">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4 text-[#6B0808]">Vigas de Aço</h1>
            <p className="text-lg text-gray-700">
              Conheça nossas vigas e suas aplicações.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {produtosVigas.map((produto) => (
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
