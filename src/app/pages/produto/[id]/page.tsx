// // app/produto/[id]/page.tsx
// import { useRouter } from 'next/router';
// import { useEffect, useState } from 'react';
// import Image from 'next/image';

// const produtosBarras = [
//   {
//     id: 1,
//     nome: "Barra de Aço 1",
//     descricao: "Descrição do produto 1",
//     imagem: "/imagens/barra1.jpg",
//     especificacoes: "Especificações detalhadas da Barra de Aço 1.",
//   },
//   {
//     id: 2,
//     nome: "Barra de Aço 2",
//     descricao: "Descrição do produto 2",
//     imagem: "/imagens/barra2.jpg",
//     especificacoes: "Especificações detalhadas da Barra de Aço 2.",
//   },
// ];

// const ProdutoPage = () => {
//   const router = useRouter();
//   const { id } = router.query;

//   const [produto, setProduto] = useState(null);

//   useEffect(() => {
//     if (id) {
//       const produtoEncontrado = produtosBarras.find(prod => prod.id === parseInt(id));
//       setProduto(produtoEncontrado);
//     }
//   }, [id]);

//   if (!produto) {
//     return <div>Carregando...</div>; // Exibir uma mensagem enquanto o produto é carregado
//   }

//   return (
//     <div className="container mx-auto py-8 mt-48">
//       <h1 className="text-3xl font-bold mb-4">{produto.nome}</h1>
//       <Image 
//         src={produto.imagem} 
//         alt={produto.nome} 
//         width={600} 
//         height={400} 
//         className="w-full h-48 object-cover bg-slate-500 rounded-md" 
//       />
//       <p className="mt-4 text-lg">{produto.descricao}</p>
//       <h2 className="text-2xl font-bold mt-4">Especificações</h2>
//       <p>{produto.especificacoes}</p>
//     </div>
//   );
// };

// export default ProdutoPage;
