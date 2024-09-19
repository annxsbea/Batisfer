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
         
            {/* Seção Contato */}
            <motion.section
                id="contato"
                className="min-h-screen bg-gray-100 flex items-center justify-center"
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
            >
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-semibold mb-8 text-center">Entre em Contato</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        {/* Formulário de contato */}
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <form action="https://formspree.io/f/mqazvedj" method="POST" className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-left text-black">Nome*</label>
                                    <input type="text" id="name" name="name" required className="w-full p-2 border border-gray-300 rounded text-black" />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-left text-black">E-mail*</label>
                                    <input type="email" id="email" name="email" required className="w-full p-2 border border-gray-300 rounded text-black" />
                                </div>

                                <div>
                                    <label htmlFor="company" className="block text-left text-black">Empresa</label>
                                    <input type="text" id="company" name="company" className="w-full p-2 border border-gray-300 rounded text-black" />
                                </div>

                                <div>
                                    <label htmlFor="cnpj" className="block text-left text-black">CNPJ</label>
                                    <input type="text" id="cnpj" name="cnpj" className="w-full p-2 border border-gray-300 rounded text-black" />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-left text-black">Telefone*</label>
                                    <input type="tel" id="phone" name="phone" required className="w-full p-2 border border-gray-300 rounded text-black" />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-left text-black">Mensagem*</label>
                                    <textarea id="message" name="message" required className="w-full p-2 border border-gray-300 rounded text-black"></textarea>
                                </div>

                                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600">
                                    Enviar
                                </button>
                            </form>


                            {/* Informações de contato */}
                            <div className="mt-8">
                                <p className="text-lg">Rua Cesário Alvim, 416 - Belenzinho, São Paulo - SP, Brasil</p>
                                <p className="text-lg">(11) 91062-3744</p>
                                <a href="mailto:vendas@acosg20.com.br" className="text-blue-500 hover:underline">
                                    vendas@acosg20.com.br
                                </a>
                                <div className="mt-4">
                                    <a
                                        href="https://api.whatsapp.com/send?1=pt_BR&phone=5511910623744"
                                        className="bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600"
                                    >
                                        Fale conosco pelo WhatsApp
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Adicionar Google Maps */}
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.95373631550423!3d-37.81627974202145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f64e09%3A0xc3381d971f7f2ff2!2sBelenzinho!5e0!3m2!1sen!2sbr!4v1630382895875!5m2!1sen!2sbr"
                                width="100%"
                                height="100%"
                                loading="lazy"
                                title="Google Maps"
                                className="w-full h-[450px] rounded-lg"
                            ></iframe>
                        </div>

                    </div>
                </div>
            </motion.section>
        </div>
    );
}
