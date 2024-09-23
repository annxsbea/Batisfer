import Image from 'next/image';

export default function Logo() {
  return (
    <div className="flex justify-center">
      <Image
        src="/assents/Logo.png"
        alt="Logo"
        width={100}
        height={100}
        className="w-24 h-auto sm:w-32 md:w-64 lg:w-64" // Ajuste os tamanhos conforme necessário
      />
    </div>
  );
}
