'use client';
import HomeImage from '../assents/Home.png';
import Image from 'next/image';

import { motion } from 'framer-motion';

// Definindo animações
const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Home() {
    return (
        <div>
         
         <motion.section
        id="home"
        className="h-screen bg-black flex items-center justify-center relative"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <Image src={HomeImage} alt="Home" layout="fill" objectFit="cover" className="opacity-30" />
      </motion.section>

        </div>
    );
}
