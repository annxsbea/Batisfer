'use client';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../../assents/Logo.png'; 
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuItem } from "@/components/ui/dropdown-menu"; // Importando os componentes do Shadcn

export default function NavbarProdutos() {
  return (
    <header className="bg-white text-black fixed top-0 w-full z-10 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-0">
        <div>
          <Link href="/">
            <Image
              src={Logo} 
              alt="Logo"
              width={150}
              height={50}
              className="cursor-pointer" 
            />
          </Link>
        </div>

        <nav className="flex space-x-6 text-lg">
          <Link href="/">Home</Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Link href="/" className="hover:text-gray-400">
                Produtos
              </Link>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="bg-white shadow-md rounded-md">
              <DropdownMenuItem asChild>
                <Link href="pages/produtos/chapas">Chapas</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="pages/produtos/perfis">Perfis</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="pages/produtos/vigas">Vigas</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="pages/produtos/laminados">Laminados</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="pages/produtos/bobinas">Bobinas</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="pages/produtos/telhas">Telhas</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="pages/produtos/barras">Barras</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="pages/produtos/blanks">Blanks</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="pages/produtos/slitter">Slitter</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="pages/produtos/tubos">Tubos</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </div>
    </header>
  );
}
