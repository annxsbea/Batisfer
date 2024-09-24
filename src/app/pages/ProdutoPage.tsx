'use client';
import { useRouter } from 'next/router';

const ProdutoPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // Aqui você pode buscar as informações do produto com base no ID
  // e exibir os detalhes.

  return (
    <div>
      <h1>Detalhes do Produto {id}</h1>
      {/* Adicione o conteúdo dos detalhes do produto aqui */}
    </div>
  );
};

export default ProdutoPage;
