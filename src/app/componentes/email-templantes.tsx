import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
  hasAttachment: boolean; // Nova prop para indicar se há um anexo
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  company,
  email,
  phone,
  message,
  hasAttachment,
}) => (
  <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
    <h1 style={{ color: '#6B0808' }}>Novo contato do site</h1>
    <p><strong>Nome:</strong> {name}</p>
    <p><strong>Empresa:</strong> {company || 'N/A'}</p>
    <p><strong>Email:</strong> {email}</p>
    <p><strong>Telefone:</strong> {phone}</p>
    <p><strong>Mensagem:</strong></p>
    <p>{message}</p>

    {hasAttachment && (
      <p style={{ marginTop: '20px', color: '#6B0808' }}>
        <strong>Este contato contém um anexo.</strong>
      </p>
    )}

    <footer style={{ marginTop: '20px', color: '#999' }}>
      <p>Este e-mail foi gerado automaticamente a partir do formulário de contato do site.</p>
    </footer>
  </div>
);
