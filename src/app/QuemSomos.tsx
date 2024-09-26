'use client';

import { motion } from 'framer-motion';
// import Image from 'next/image'; // Importando o componente Image do Next.js
// import imagemSobreNos from '../assents/imagem-sobre-nos.jpg'; // Altere o caminho da imagem conforme necessário

// Definindo animações
const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function QuemSomos() {
    return (
        <div>
            <motion.section
                id="quem-somos"
                className="min-h-screen  flex items-center justify-center"
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
            >
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-10 text-black ">
                    <div className="text-center md:text-left mb-4 md:mb-0 md:w-1/2">
                        <h2 className="text-4xl font-semibold mb-4 text-[#6B0808]">Sobre Nós</h2>
                        <p className="text-lg text-gray-700">
                            Este é o espaço para apresentar o negócio ou a marca aos visitantes. Conte sobre a equipe, missão e diferenciais.
                        </p>
                    </div>
                    <div className="md:w-1/2 flex justify-center bg-slate-500 w-[200px] h-[400px] rounded-lg">
                        {/* <Image 
                            src={imagemSobreNos} 
                            alt="Imagem sobre nós" 
                            width={400} 
                            height={400} 
                            className="object-cover rounded-lg" 

                        /> */}

                    </div>
                </div>
            </motion.section>
        </div>
    );
}
