'use client';

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion"; 
import Image from "next/image";
import Tubos from "../assents/ProdutosHome/tubos.jpg";
import Slitter from "../assents/ProdutosHome/slitter.jpg";
import Blanks from "../assents/ProdutosHome/blanks.jpg";
import Barras from "../assents/ProdutosHome/barraslaminadas.jpg";
import Telhas from "../assents/ProdutosHome/telhas.jpg";
import Chapas from "../assents/ProdutosHome/chapas.jpg";
import Laminados from "../assents/ProdutosHome/barraslaminadas.jpg";
import Bobinas from "../assents/ProdutosHome/bobinas1.jpg";
import Vigas from "../assents/ProdutosHome/vigas.jpg";
import Perfis from "../assents/ProdutosHome/perfis.jpg";

const produtos = [
  {
    id: 1,
    nome: "Chapas",
    imagem: Chapas,
    link: "/produtos/chapas",
  },
  {
    id: 2,
    nome: "Blanks",
    imagem: Blanks,
    link: "/produtos/blanks",
  },
  {
    id: 3,
    nome: "Perfis",
    imagem: Perfis,
    link: "/produtos/perfis",
  },

  {
    id: 4,
    nome: "Vigas",
    imagem: Vigas,
    link: "/produtos/vigas",
  },

  {
    id: 5,
    nome: "Laminados",
    imagem: Laminados,
    link: "/produtos/laminados",
  },



  {
    id: 6,
    nome: "Tubos",
    imagem:Tubos,
    link: "/produtos/tubos",
  },
  {
    id: 7,
    nome: "Telhas",
    imagem: Telhas,
    link: "/produtos/telhas",
  },
  {
    id: 8,
    nome: "Bobinas",
    imagem: Bobinas,
    link: "/produtos/bobinas",
  },
  {
    id: 9,
    nome: "Slitter",
    imagem: Slitter,
    link: "/produtos/slitter",
  },
  


];  
export function Produtos() {
  return (
    <motion.section
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }} 
      transition={{ duration: 0.5 }} 
    >
      <div className="container mx-auto px-6">
        <div className="container mx-auto text-center px-4 mb-5 text-black ">
          <h2 className="text-4xl font-semibold mb-5 text-[#6B0808] border-b-2 border-[#6B0808] inline-block">
            Produtos
          </h2>
        </div>

        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-7xl mx-auto" 
        >
          <CarouselContent>
            {produtos.map((produto) => (
              <CarouselItem
                key={produto.id}
                className="transition-transform duration-300 ease-in-out transform hover:scale-105 basis-1/2 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <div className="p-1">
                  <Card className="bg-[#F9F9F9]">
                    <CardContent className="flex flex-col items-center justify-center p-6">
                      <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-52 md:h-52 lg:w-64 lg:h-w-64 flex items-center justify-center mb-4 ">
                        <Image
                          src={produto.imagem}
                          alt={`Imagem do ${produto.nome}`}
                          width={220}
                          height={220}
                          className="w-36 h-36 object-cover rounded-md md:w-52 md:h-52 lg:w-56 lg:h-56"
                        />
                      </div>
                      <a href={produto.link} className="text-lg font-semibold text-[#000] hover:underline">
                        {produto.nome}
                      </a>
                 
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

         
          <CarouselPrevious className="absolute top-1/2 transform -translate-y-1/2 text-5xl w-12 h-12 p-2 bg-white rounded-full shadow-md cursor-pointer z-10 text-black hover:bg-[#6B0808] hover:text-white" />
          <CarouselNext className="absolute  top-1/2 transform -translate-y-1/2 text-5xl p-2 w-12 h-12 bg-white rounded-full shadow-md cursor-pointer z-10 text-black hover:bg-[#6B0808] hover:text-white" />
        </Carousel>
      </div>
    </motion.section>
  );
}
