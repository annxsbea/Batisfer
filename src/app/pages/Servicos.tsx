"use client";

import { motion } from 'framer-motion';

// Definindo animações
const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Contato() {
    return (
        <div>
         
         <motion.section
        id="servicos"
        className="min-h-screen bg-gray-100 flex items-center justify-center"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <div className="container mx-auto text-center px-4 text-black">
          <h2 className="text-4xl font-semibold mb-4">Serviços</h2>
          <p className="text-lg text-gray-700">
            Resuma os tipos de serviços oferecidos e destaque benefícios ou recursos especiais.
          </p>
        </div>
      </motion.section>
        </div>
    );
}
