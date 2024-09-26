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
import Image from "next/image";
import { motion } from "framer-motion"; // Importando o Framer Motion

// Lista de produtos
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
    imagem: "/assents/bobinas.jpg",
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
    imagem: "/assents/chapas.jpg",
    link: "/produtos/chapas",
  },
];

export function ProdutosCarousel() {
  return (
    <motion.section
      initial={{ opacity: 0, y: -20 }} // Animação inicial
      animate={{ opacity: 1, y: 0 }} // Animação ao entrar
      exit={{ opacity: 0, y: -20 }} // Animação ao sair
      transition={{ duration: 0.5 }} // Duração da transição
    >
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl mb-16 text-[#6B0808]">Produtos</h2>
        </div>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-5xl mx-auto" // Aumentando a largura máxima do carrossel
        >
          <CarouselContent>
            {produtos.map((produto) => (
              <CarouselItem key={produto.id} className="transition-transform duration-300 ease-in-out transform hover:scale-105 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                <div className="p-1">
                  <Card className="bg-[#F9F9F9]"> {/* Troque o fundo do Card se desejar */}
                    <CardContent className="flex flex-col items-center justify-center p-6">
                      <div className="w-44 h-44 flex items-center justify-center mb-4 bg-slate-500">
                        {/* <Image
                          src={produto.imagem}
                          alt={`Imagem do ${produto.nome}`}
                          width={256}
                          height={256}
                          className="w-full h-full object-cover rounded-md"
                        /> */}
                      </div>
                      <a href={produto.link} className="text-lg font-semibold text-[#000] hover:underline"> {/* Mudança de cor no texto */}
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
