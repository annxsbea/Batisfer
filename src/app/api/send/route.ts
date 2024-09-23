// import type { NextApiRequest, NextApiResponse } from 'next';
// import { Resend } from 'resend';

// const resend = new Resend(process.env.RESEND_API_KEY); // Certifique-se de que a chave API está configurada

// const send = async (req: NextApiRequest, res: NextApiResponse) => {
//   const { method } = req;

//   switch (method) {
//     case 'POST': {
//       const { name, email, company, cnpj, phone, message, attachment } = req.body;

//       // Verifique se o arquivo de anexo está presente
//       const attachments = attachment
//         ? [{
//             filename: attachment.name,
//             content: Buffer.from(attachment.data, 'base64'), // Converta de base64 para Buffer
//           }]
//         : [];

//       // Enviando o e-mail
//       try {
//         const data = await resend.emails.send({
//           from: 'Acme <onboarding@resend.dev>',
//           to: ['annxsbea@gmail.com'], // Troque pelo seu endereço
//           subject: 'Novo contato do formulário',
//           html: `
//             <p><strong>Nome:</strong> ${name}</p>
//             <p><strong>Email:</strong> ${email}</p>
//             <p><strong>Empresa:</strong> ${company}</p>
//             <p><strong>CNPJ:</strong> ${cnpj}</p>
//             <p><strong>Telefone:</strong> ${phone}</p>
//             <p><strong>Mensagem:</strong> ${message}</p>
//           `,
//           attachments,
//         });

//         return res.status(200).send({ success: true, data: data.data?.id });
//       } catch (error) {
//         console.error('Erro ao enviar e-mail:', error);
//         return res.status(500).send({ success: false, error: 'Erro ao enviar e-mail' });
//       }
//     }
//     default:
//       res.setHeader('Allow', ['POST']);
//       return res.status(405).end(`Method ${method} Not Allowed`);
//   }
// };

// export default send;
