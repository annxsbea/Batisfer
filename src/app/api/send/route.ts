import { Resend } from 'resend';
import { EmailTemplate } from '../../componentes/email-templantes';
import { NextRequest, NextResponse } from 'next/server';
import { Buffer } from 'buffer';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const formData = await req.formData();
    const name = formData.get('name') as string;
    const company = formData.get('company') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const message = formData.get('message') as string;
    const attachment = formData.get('attachment') as File | null;

    if (!name || !company || !email || !phone || !message) {
      return NextResponse.json({ error: 'Todos os campos são obrigatórios.' }, { status: 400 });
    }

    let attachmentBuffer: Buffer | null = null;
    let attachmentName = '';
    let hasAttachment = false;

    if (attachment) {
      if (attachment.size > 5 * 1024 * 1024) {
        return NextResponse.json(
          { error: 'O tamanho do anexo excede o limite permitido de 5MB.' },
          { status: 400 }
        );
      }

      const allowedTypes = ['application/pdf', 'image/jpeg', 'image/png'];
      if (!allowedTypes.includes(attachment.type)) {
        return NextResponse.json(
          { error: 'Tipo de anexo não permitido.' },
          { status: 400 }
        );
      }

      const arrayBuffer = await attachment.arrayBuffer();
      attachmentBuffer = Buffer.from(arrayBuffer);
      attachmentName = attachment.name;
      console.log(`Anexo detectado: ${attachmentName}, Tipo: ${attachment.type}`);

      hasAttachment = true;
    }

    const { data, error } = await resend.emails.send({
      from: 'FormContato@batisfer.com.br',
      to: ['vendas@batisfer.com.br'],
      subject: 'Novo contato do site',
      react: EmailTemplate({ name, company, email, phone, message, hasAttachment }),
      attachments: hasAttachment
        ? [
            {
              filename: attachmentName,
              content: attachmentBuffer!.toString('base64'),
              contentType: attachment?.type || 'application/octet-stream',
            },
          ]
        : [],
    });

    if (error) {
      console.error('Erro ao enviar e-mail:', error);
      return NextResponse.json(
        { error: 'Falha no envio do e-mail. Tente novamente mais tarde.' },
        { status: 500 }
      );
    }

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error('Erro na requisição POST:', error);
    return NextResponse.json(
      { error: 'Erro ao processar a solicitação. Tente novamente.' },
      { status: 500 }
    );
  }
}
