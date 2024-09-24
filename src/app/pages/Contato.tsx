// "use client";

import { motion } from 'framer-motion';
// import { useState } from 'react';

// // interface ContactFormData {
// //     name: string;
// //     email: string;
// //     company: string;
// //     cnpj: string;
// //     phone: string;
// //     message: string;
// //     attachment: File | null;
// // }
// export default function Contato() {
// //     const [formData, setFormData] = useState<ContactFormData>({
// //         name: '',
// //         email: '',
// //         company: '',
// //         cnpj: '',
// //         phone: '',
// //         message: '',
// //         attachment: null,
// //     });

//     const [isLoading, setIsLoading] = useState(false);
//     const [status, setStatus] = useState<string | null>(null);

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
// //         const { name, value } = e.target;

// //         // Para arquivos, especialmente o anexo
// //         if (e.target.type === "file") {
// //             setFormData({
// //                 ...formData,
// //                 [name]: (e.target as HTMLInputElement).files ? (e.target as HTMLInputElement).files![0] : null,
// //             });
// //         } else {
// //             setFormData({
// //                 ...formData,
// //                 [name]: value,
// //             });
// //         }
//     };


//     const handleSubmit = async (e: React.FormEvent) => {
//     //     e.preventDefault();
//     //     setIsLoading(true); 

//     //     if (formData.attachment) {
//     //         const reader = new FileReader();

//     //         reader.onloadend = async () => {
//     //             const base64data = reader.result?.toString().split(',')[1]; 
//     //             const response = await fetch('/api/send', {
//     //                 method: 'POST', // Certifique-se de que é POST
//     //                 headers: {
//     //                     'Content-Type': 'application/json',
//     //                 },
//     //                 body: JSON.stringify({
//     //                     name: formData.name,
//     //                     email: formData.email,
//     //                     company: formData.company,
//     //                     cnpj: formData.cnpj,
//     //                     phone: formData.phone,
//     //                     message: formData.message,

//     //                 }),
//     //             });


//     //             const result = await response.json();
//     //             setStatus(result.success ? 'Mensagem enviada com sucesso!' : 'Erro ao enviar mensagem');
//     //             setIsLoading(false); 
//     //         };

//     //         reader.readAsDataURL(formData.attachment);
//     //     } else {
//     //         const response = await fetch('/api/send', {
//     //             method: 'POST',
//     //             headers: {
//     //                 'Content-Type': 'application/json',
//     //             },
//     //             body: JSON.stringify({
//     //                 name: formData.name,
//     //                 email: formData.email,
//     //                 company: formData.company,
//     //                 cnpj: formData.cnpj,
//     //                 phone: formData.phone,
//     //                 message: formData.message,
//     //                 attachment: null, 
//     //             }),
//     //         });

//     //         const result = await response.json();
//     //         setStatus(result.success ? 'Mensagem enviada com sucesso!' : 'Erro ao enviar mensagem');
//     //         setIsLoading(false);
//     //     }
//     };


//     return (
//         <div>
//             <motion.section
//                 id="contato"
//                 className="min-h-screen bg-gray-100 flex items-center justify-center"
//                 initial="hidden"
//                 animate="visible"
//             >
//                 <div className="container mx-auto px-4">
//                     <h2 className="text-4xl font-semibold mb-8 text-center">Entre em Contato</h2>

//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                         <div className="bg-white p-6 rounded-lg shadow-lg">
//                             <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-4">
//                                 {/* Nome */}
//                                 <div>
//                                     <label htmlFor="name" className="block text-left text-black">Nome*</label>
//                                     <input
//                                         type="text"
//                                         id="name"
//                                         name="name"
//                                         required
//                                         className="w-full p-2 border border-gray-300 rounded text-black"
//                                         // value={formData.name}
//                                         onChange={handleChange}
//                                     />
//                                 </div>

//                                 {/* E-mail */}
//                                 <div>
//                                     <label htmlFor="email" className="block text-left text-black">E-mail*</label>
//                                     <input
//                                         type="email"
//                                         id="email"
//                                         name="email"
//                                         required
//                                         className="w-full p-2 border border-gray-300 rounded text-black"
//                                         // value={formData.email}
//                                         onChange={handleChange}
//                                     />
//                                 </div>

//                                 {/* Empresa */}
//                                 <div>
//                                     <label htmlFor="company" className="block text-left text-black">Empresa</label>
//                                     <input
//                                         type="text"
//                                         id="company"
//                                         name="company"
//                                         className="w-full p-2 border border-gray-300 rounded text-black"
//                                         // value={formData.company}
//                                         onChange={handleChange}
//                                     />
//                                 </div>

//                                 {/* CNPJ */}
//                                 <div>
//                                     <label htmlFor="cnpj" className="block text-left text-black">CNPJ</label>
//                                     <input
//                                         type="text"
//                                         id="cnpj"
//                                         name="cnpj"
//                                         className="w-full p-2 border border-gray-300 rounded text-black"
//                                         // value={formData.cnpj}
//                                         onChange={handleChange}
//                                     />
//                                 </div>

//                                 {/* Telefone */}
//                                 <div>
//                                     <label htmlFor="phone" className="block text-left text-black">Telefone*</label>
//                                     <input
//                                         type="tel"
//                                         id="phone"
//                                         name="phone"
//                                         required
//                                         className="w-full p-2 border border-gray-300 rounded text-black"
//                                         // value={formData.phone}
//                                         onChange={handleChange}
//                                     />
//                                 </div>

//                                 {/* Mensagem */}
//                                 <div>
//                                     <label htmlFor="message" className="block text-left text-black">Mensagem*</label>
//                                     <textarea
//                                         id="message"
//                                         name="message"
//                                         required
//                                         className="w-full p-2 border border-gray-300 rounded text-black"
//                                         // value={formData.message}
//                                         onChange={handleChange}
//                                     />
//                                 </div>

//                                 {/* Anexo */}
//                                 <div>
//                                     <label htmlFor="attachment" className="block text-left text-black">Anexo</label>
//                                     <input
//                                         type="file"
//                                         id="attachment"
//                                         name="attachment"
//                                         className="w-full p-2 border border-gray-300 rounded text-black"
//                                         onChange={handleChange}
//                                     />
//                                 </div>

//                                 {/* Botão de Enviar */}
//                                 <button type="submit" disabled={isLoading} className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600">
//                                     {isLoading ? 'Enviando...' : 'Enviar'}
//                                 </button>
//                             </form>
//                             {status && <p className="mt-4 text-center text-lg">{status}</p>}
//                         </div>

//                         <div className="bg-white p-6 rounded-lg shadow-lg">
//                             <iframe
//                                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.287970276451!2d-43.19743898549548!3d-22.938030185271572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997fca91ae1ff4%3A0xe16dc6e89903bb13!2sAvenida%20Presidente%20Wilson%2C%20444%20-%20Centro%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%20201%2C%20Brasil!5e0!3m2!1spt-BR!2sus!4v1695233899266!5m2!1spt-BR!2sus"
//                                 width="100%"
//                                 height="300"
//                                 className="border-0"
//                                 loading="lazy"
//                                 title="Mapa"
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </motion.section>
//         </div>
//     );
// }

export default function Contato() {

    return (
        <div className='mt-16'>
            <motion.section
                id="contato"
                className="min-h-screen bg-gray-100 flex items-center justify-center"
                initial="hidden"
                animate="visible"
            >
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-semibold mb-8 text-center">Entre em Contato</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-16 rounded-lg shadow-lg">
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <form encType="multipart/form-data" className="space-y-4">

                                    <div className="">
                                        <div>
                                            <label htmlFor="name" className="block text-left text-black">Nome*</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-red-700"
                                            />
                                        </div>

                                      
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="company" className="block text-left text-black">Empresa</label>
                                            <input
                                                type="text"
                                                id="company"
                                                name="company"
                                                className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-red-700"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="cnpj" className="block text-left text-black">CNPJ</label>
                                            <input
                                                type="text"
                                                id="cnpj"
                                                name="cnpj"
                                                className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-red-700"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                    <div>
                                            <label htmlFor="email" className="block text-left text-black">E-mail*</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-red-700"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="phone" className="block text-left text-black">Telefone*</label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                required
                                                className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-red-700"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-left text-black">Mensagem*</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            className="w-full p-2 border-2 rounded-sm border-gray-300 focus:outline-none focus:border-red-700"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="attachment" className="block text-left text-black">Anexo</label>
                                        <input
                                            type="file"
                                            id="attachment"
                                            name="attachment"
                                            className="w-full p-2  border-gray-300 focus:outline-none focus:border-red-700"
                                        />
                                    </div>
                                    <div className="flex justify-end">
                                    <button type="submit" className="bg-[#460413] text-white py-2 px-4 hover:bg-red-900">
                                        Enviar
                                    </button>

                                    </div>
                                </form>
                            </div>

                        </div>


                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.9875198709863!2d-46.56357288502028!3d-23.584601084665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5e9927b8dd9b%3A0xaedc5af732c37789!2sR.%20Almirante%20Alexandrino%2C%20440%20-%20Vila%20Invernada%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003350-010%2C%20Brasil!5e0!3m2!1spt-BR!2sbr!4v1695234219198!5m2!1spt-BR!2sbr"
                                width="100%"
                                height="500"
                                className="border-0"
                                loading="lazy"
                                title="Mapa"
                            />


                            <p className="mt-4 text-center text-lg">Rua Almirante Alexandrino 440 - Vila Invernada- São Paulo - SP 03350-010, Brasil</p>

                        </div>
                    </div>
                </div>
            </motion.section>
        </div>

    )
}
