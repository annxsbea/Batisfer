'use client';

import { useRouter } from "next/router";
import Navbar2 from "@/app/componentes/NavBar2/page";
import Footer from "@/app/componentes/Rodape/page";
import Image, { StaticImageData } from "next/image";

import chapafinaquente from "@/assents/FotosProdutos/Chapas/chapafinaquente.jpg";
import chapagalvanizada from "@/assents/FotosProdutos/Chapas/chapagalvanizada.jpg";
import chapagrossa from "@/assents/FotosProdutos/Chapas/chapagrossa.jpg";
import chapaxadrez from "@/assents/FotosProdutos/Chapas/chapaxadrez.jpg";
import Perfili from "../../../assents/FotosProdutos/Vigas/perfili.jpg";
import Perfillu from "@/assents/FotosProdutos/Perfis/perfilu.jpg";
import Cantoneira from "@/assents/FotosProdutos/Laminados/cantoneira.jpg";
import FerroChato from "@/assents/FotosProdutos/Laminados/ferrochato.jpg";
import BarraRedonda from "@/assents/FotosProdutos/Laminados/barraredonda.jpg";
import BarraQuadrada from "@/assents/FotosProdutos/Laminados/barraquadrada.jpg";
import perfilte from "@/assents/FotosProdutos/Laminados/perfilt.jpg";
import blanks from "@/assents/FotosProdutos/Blanks/blanks.jpg";
import bobinas from "@/assents/FotosProdutos/Bobinas/bobinas.jpg";
import perfildobradoespecial from "@/assents/FotosProdutos/Perfis/perfildobradoespecial.jpg";
import perfiluenrijecido from "@/assents/FotosProdutos/Perfis/perfiluenrijecido.jpg";
import slitter from "@/assents/FotosProdutos/Slitter/slitter.jpg";
import onduladas from "@/assents/FotosProdutos/Telhas/onduladas.jpg";
import trapezio25 from "@/assents/FotosProdutos/Telhas/trapezio25.png";
import trapezio40 from "@/assents/FotosProdutos/Telhas/trapezio40.jpg";
import tubosquadrados from "@/assents/FotosProdutos/Tubos/tubosquadrados.jpg";
import tubosredondos from "@/assents/FotosProdutos/Tubos/tubosredondos.jpg";
import tubosretangulares from "@/assents/FotosProdutos/Tubos/tubosretangulares.jpg";
import vigau from "@/assents/FotosProdutos/Vigas/vigau.jpg";
import vigah from "@/assents/FotosProdutos/Vigas/vigaw.jpg";
import chapafinafrio from "@/assents/FotosProdutos/Chapas/chapafinafrio.jpg";
interface Produto {
    id: number;
    nome: string;
    descricao: string;
    imagem: StaticImageData | string;
}

interface ProdutosCategoria {
    [key: string]: Produto[];
}

const produtos: ProdutosCategoria = {
    chapas: [
        {
            id: 1,
            nome: "Chapa Fina a Quente",
            descricao: "",
            imagem: chapafinaquente,
        },
        {
            id: 2,
            nome: "Chapa Fina a Frio",
            descricao: "",
            imagem: chapafinafrio,
          },
        
        {
            id: 3,
            nome: "Chapa Galvanizada",
            descricao: "",
            imagem: chapagalvanizada,
        },
        {
            id: 4,
            nome: "Chapa Grossa",
            descricao: "",
            imagem: chapagrossa,
        },
        {
            id: 4,
            nome: "Chapa Xadrez",
            descricao: "",
            imagem: chapaxadrez,
        },
    ],
    vigas: [
        {
            id: 1,
            nome: "Perfil I",
            descricao: "",
            imagem: Perfili,
        },

        {
            id: 2,
            nome: "Viga U",
            descricao: "",
            imagem: vigau,
        },

        {
            id: 3,
            nome: "Viga W",
            descricao: "",
            imagem: vigah,
        },

    ],
    tubos: [
        {
          id: 1,
          nome: "Tubo Redondo",
          descricao: "",
          imagem: tubosredondos,
        },
      
        {
          id: 2,
          nome: "Tubo Quadrado",
          descricao: "",
          imagem: tubosquadrados,
        },
      
      {
          id: 3,
          nome: "Tubo Retangular",
          descricao: "",
          imagem:tubosretangulares,
        },
      
      ],
      
    perfis: [
        {
            id: 1,
            nome: "Perfil U",
            descricao: "",
            imagem: Perfillu,
        },

        {
            id: 2,
            nome: "Perfil U Enrijecido",
            descricao: "",
            imagem: perfiluenrijecido,
        },

        {
            id: 3,
            nome: "Perfil Dobrado Especial",
            descricao: "",
            imagem: perfildobradoespecial,
        },

    ],
    laminados: [
        {
            id: 1,
            nome: "Cantoneira",
            descricao: "",
            imagem: Cantoneira,
        },

        {
            id: 2,
            nome: "Ferro Chato",
            descricao: "",
            imagem: FerroChato,
        },

        {
            id: 3,
            nome: "Barra Redonda",
            descricao: "",
            imagem: BarraRedonda,
        },

        {
            id: 3,
            nome: "Barra Quadrada",
            descricao: "",
            imagem: BarraQuadrada,
        },

        {
            id: 4,
            nome: "Perfil T",
            descricao: "",
            imagem: perfilte,
        },

    ],
    bobinas: [
        {
            id: 1,
            nome: "Bobinas",
            descricao: "",
            imagem: bobinas,
        }
        
    ],
    telhas: [
        {
            id: 1,
            nome: "Trapézio 25",
            descricao: "",
            imagem: trapezio25,
        },
        {
            id: 2,
            nome: "Trapézio 40",
            descricao: "",
            imagem: trapezio40,
        },
        {
            id: 3,
            nome: "Onduladas",
            descricao: "",
            imagem: onduladas,
        },
        
    ],

    blanks: [
        {
            id: 1,
            nome: "Blanks",
            descricao: "",
            imagem: blanks,

        },
  
    ],
    slitter: [
        {
            id: 1,
            nome: "Slitter",
            descricao: "",
            imagem: slitter,
        },
 
    ],

};
export default function ProdutoPage({ params }: { params: { produto: string } }) {
    const { produto } = params;

    const produtosCategoria = produtos[produto];

    if (!produtosCategoria) {
        return <p>Produto não encontrado</p>;
    }

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar2 />

            <main className="flex-grow ">
                <div className="container mx-auto py-12 mt-32 max-w-screen-lg">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl font-bold mb-4 text-[#6B0808] border-b-2 border-[#6B0808] inline-block">
                            {produto.charAt(0).toUpperCase() + produto.slice(1)}
                        </h1>
                 
                    </div>

                    {/* Produtos */}
                    <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {produtosCategoria.map((produtoItem) => (
                            <div
                                key={produtoItem.id}
                                className="bg-white shadow-lg rounded-lg items-center flex flex-col justify-center p-6 transform hover:scale-105 transition duration-300 ease-in-out"
                            >
                                <Image
                                    src={produtoItem.imagem}
                                    alt={produtoItem.nome}
                                    width={300}
                                    height={200}
                                    className="w-full h-48 object-cover bg-slate-500 rounded-md"
                                />
                                <h2 className="text-2xl font-semibold mt-4 text-black">
                                    {produtoItem.nome}
                                </h2>
                                <p className="mt-3 text-gray-600 ">{produtoItem.descricao}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

