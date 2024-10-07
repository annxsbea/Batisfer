'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
// import Image from 'next/image'; // Importando o componente Image do Next.js
import imagemSobreNos from '../assents/logo1.png'; // Altere o caminho da imagem conforme necessário

// Definindo animações
const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function QuemSomos() {
    return (
        <div className="mt-[-100px] sm:mt-[-150px]">
            <motion.section
                id="quem-somos"
                className="min-h-screen flex items-center justify-center px-4 sm:px-10"
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
            >
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between md:px-32">
                    <div className="text-center md:text-left mb-6 md:mb-0 md:w-1/2">
                        <h2 className="text-4xl sm:text-5xl font-semibold mb-4 text-[#6B0808]">Empresa</h2>
                        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                            Este é o espaço para apresentar o negócio ou a marca aos visitantes. Conte sobre a equipe, missão e diferenciais.
                        </p>
                    </div>

                    <div className="w-full md:w-3/4 flex justify-center">
                        <div className="w-[300px] h-[300px] sm:w-[300px] sm:h-[200px] md:w-[250px] md:h-[250px] lg:w-[500px] lg:h-[400px]  rounded-lg">
                            <Image 
                                src={imagemSobreNos} 
                                alt="Imagem sobre nós" 
                                width={200} 
                                height={200} 
                                className="w-full h-full object-cover rounded-lg" 
                            />
                        </div>
                    </div>
                </div>
            </motion.section>
        </div>
    );
}
