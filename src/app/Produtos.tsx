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

const produtos = [
  {
    id: 1,
    nome: "Tubos",
    descricao: "Tubos de aço de diversas dimensões.",
    imagem: "/assents/tubos.jpg",
    link: "/produtos/tubos",
  },
  {
    id: 2,
    nome: "Slitter",
    descricao: "Equipamento para corte de bobinas.",
    imagem: "/assents/slitter.jpg",
    link: "/produtos/slitter",
  },
  {
    id: 3,
    nome: "Blanks",
    descricao: "Peças cortadas de acordo com as especificações.",
    imagem: "/assents/blanks.jpg",
    link: "/produtos/blanks",
  },
  {
    id: 4,
    nome: "Barras",
    descricao: "Barras de aço para construção.",
    imagem: "/assents/barras.jpg",
    link: "/produtos/barras",
  },
  {
    id: 5,
    nome: "Telhas",
    descricao: "Telhas de aço e outros materiais.",
    imagem: "/assents/telhas.jpg",
    link: "/produtos/telhas",
  },
  {
    id: 6,
    nome: "Bobinas",
    descricao: "Bobinas de aço para diversos usos.",
    imagem: "/assents/bobinas1.jpg",
    link: "/produtos/bobinas",
  },
  {
    id: 7,
    nome: "Laminados",
    descricao: "Produtos laminados de alta qualidade.",
    imagem: "/assents/laminados.jpg",
    link: "/produtos/laminados",
  },
  {
    id: 8,
    nome: "Vigas",
    descricao: "Vigas de aço para estruturação.",
    imagem: "/assents/vigas.jpg",
    link: "/produtos/vigas",
  },
  {
    id: 9,
    nome: "Perfis",
    descricao: "Perfis de aço para construção e estruturas.",
    imagem: "/assents/perfis.jpg",
    link: "/produtos/perfis",
  },
  {
    id: 10,
    nome: "Chapas",
    descricao: "Chapas de aço de diferentes espessuras.",
    imagem: "/assents/chapas1.jpg",
    link: "/produtos/chapas",
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
      <div className="container mx-auto px-4 ">
        <div className="container mx-auto text-center px-4 text-black ">
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
                    <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-52 md:h-52 lg:w-64 lg:h-w-64 flex items-center justify-center mb-4 bg-slate-500">
                    {/* <Image
                          src={produto.imagem}
                          alt={`Imagem do ${produto.nome}`}
                          width={288}
                          height={288}
                          className="w-full h-full object-cover rounded-md"
                        /> */}
                      </div>
                      <a href={produto.link} className="text-lg font-semibold text-[#000] hover:underline">
                        {produto.nome}
                      </a>
                      <p className="mt-2 text-gray-700 text-sm">{produto.descricao}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-black" />
          <CarouselNext className="text-black" />
        </Carousel>
      </div>
    </motion.section>
  );
}
