import { Resend } from 'resend';
import { EmailTemplate } from '../../componentes/email-templantes';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    // Obtém os dados do formulário
    const formData = await req.formData();
    const name = formData.get('name') as string;
    const company = formData.get('company') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const message = formData.get('message') as string;
    const attachment = formData.get('attachment');

    // Verifica se há anexo
    let attachmentBuffer: Buffer | null = null;
    let attachmentName = '';
    let hasAttachment = false;

    if (attachment && typeof attachment === 'object' && 'arrayBuffer' in attachment) {
      const arrayBuffer = await attachment.arrayBuffer();
      attachmentBuffer = Buffer.from(arrayBuffer);
      attachmentName = attachment.name || 'attachment';
      hasAttachment = true;
    } else {
      console.log('Nenhum anexo válido encontrado ou não recebido.');
    }

    // Envia o e-mail utilizando a API Resend
    const { data, error } = await resend.emails.send({
      from: 'FormContato@batisfer.com.br',
      to: ['annasoares.bb@gmail.com'],
      subject: 'Novo contato do site',
      react: EmailTemplate({ name, company, email, phone, message, hasAttachment }),
      attachments: hasAttachment && attachmentBuffer ? [{
        filename: attachmentName,
        content: attachmentBuffer.toString('base64'),
      }] : [],
    });

    // Verifica erros ao enviar o e-mail
    if (error) {
      console.error('Erro ao enviar e-mail:', error);
      return NextResponse.json(
        { error: error instanceof Error ? error.message : 'Erro desconhecido' },
        { status: 500 }
      );
    }

    // Verifica se há retorno de dados
    if (!data) {
      console.error('Nenhum dado retornado após envio do e-mail');
      return NextResponse.json({ error: 'Nenhum dado retornado' }, { status: 500 });
    }

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error('Erro na requisição POST:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Erro ao processar a solicitação.' },
      { status: 500 }
    );
  }
}
