'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import * as React from 'react';
import { MdOutlineMail } from 'react-icons/md';
import InputMask from 'react-input-mask';
import { toast } from 'react-toastify';
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster"; 

interface FormValues {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
  attachment: File | null;
}

export default function Contato() {
  const [formValues, setFormValues] = React.useState<FormValues>({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
    attachment: null,
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues(prevValues => ({ ...prevValues, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files) {
      setFormValues(prevValues => ({ ...prevValues, [name]: files[0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
  
    const formData = new FormData();
    formData.append('name', formValues.name);
    formData.append('company', formValues.company);
    formData.append('email', formValues.email);
    formData.append('phone', formValues.phone);
    formData.append('message', formValues.message);
    if (formValues.attachment) {
      formData.append('attachment', formValues.attachment);
    }
  
    console.log('FormData enviado:', Array.from(formData.entries())); 
  
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        body: formData,
      });
  
      if (response.ok) {
        toast({ title: "Sucesso!", description: "Email enviado com sucesso.", variant: "default" });
        setFormValues({ name: '', company: '', email: '', phone: '', message: '', attachment: null });
      } else {
        toast({
          title: "Erro ao enviar email!",
          description: "Ocorreu um erro ao enviar o email. Tente novamente.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({ title: "Erro!", description: "Erro desconhecido. " + error, variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className=' '>
      <motion.section id="contato" className=" flex items-center justify-center" initial="hidden" animate="visible">
        <div className="mx-auto text-center px-4  text-black">
          <h2 className="text-4xl font-semibold mb-5 text-[#6B0808] border-b-2 border-[#6B0808] inline-block">Contato</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-1 rounded-lg shadow-lg lg:p-16">
              <div className="mt-4 lg:flex justify-between">
                <h2 className="text-2xl text-center font-semibold mb-8 lg:text-start text-[#6B0808]">Entre em Contato</h2>
                <div className="flex flex-col items-center md:flex-row md:items-start md:mt-2">
                  <MdOutlineMail size={30} className="text-gray-800 hover:text-[#6B0808]" />
                  <p className="text-lg ml-2">
                    <a href="mailto:vendas@batisfer.com.br" className="underline text-gray-800">vendas@batisfer.com.br</a>
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-lg shadow-lg">
                <form encType="multipart/form-data" className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="block text-left text-black">Nome*</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formValues.name}
                      onChange={handleInputChange}
                      className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-red-700"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-left text-black">Empresa</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formValues.company}
                      onChange={handleInputChange}
                      className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-red-700"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-left text-black">E-mail*</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formValues.email}
                        onChange={handleInputChange}
                        className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-red-700"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-left text-black">Telefone*</label>
                      <InputMask
                        mask="(99) 99999-9999"
                        id="phone"
                        name="phone"
                        required
                        value={formValues.phone}
                        onChange={handleInputChange}
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
                      value={formValues.message}
                      onChange={handleInputChange}
                      maxLength={600}
                      rows={6}
                      className="w-full p-2 border-2 rounded-sm border-gray-300 focus:outline-none focus:border-red-700"
                    />
                  </div>

                  <div>
                    <label htmlFor="attachment" className="block text-left text-black">Anexo</label>
                    <input
                      type="file"
                      id="attachment"
                      name="attachment"
                      onChange={handleFileChange}
                      accept=".jpg,.jpeg,.png,.doc,.xls,.pdf"
                      className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-red-700"
                    />
                  </div>

                  <button type="submit" className="bg-[#460413] text-white py-2 px-4 hover:bg-red-900 cursor-pointer" disabled={isLoading}>
                    {isLoading ? 'Enviando...' : 'Enviar'}
                  </button>
                </form>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.9875198709863!2d-46.56357288502028!3d-23.584601084665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5e9927b8dd9b%3A0xaedc5af732c37789!2sR.%20Almirante%20Alexandrino%2C%20440%20-%20Vila%20Invernada%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003350-010%2C%20Brasil!5e0!3m2!1spt-BR!2sbr!4v1695234219198!5m2!1spt-BR!2sbr"
                width="100%"
                height="700"
                className="border-0"
                loading="lazy"
                title="Mapa"
              />
              <div className="text-gray-800 mt-8">
                <p className="">
                  <a
                    href="https://www.google.com/maps?q=Rua+Almirante+Alexandrino+440+-+Vila+Invernada,+São+Paulo+-+SP,+03350-010,+Brasil"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-lg "
                  >
                    Rua Almirante Alexandrino, 440 - CEP: 03350-010 - São Paulo - SP
                  </a>

                </p>


              </div>
            </div>
       

          </div>
        </div>
      </motion.section>
      <Toaster />
    </div>
  );
}
