"use client";

import { useState, ChangeEvent, FormEvent } from 'react';

import Image from 'next/image';

interface FormData {
  nome: string;
  email: string;
  telefone: string;
  assunto: string;
  mensagem: string;
}

interface FormStatus {
  submitted: boolean;
  success: boolean;
  message: string;
}

export default function ContatoPage() {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    email: '',
    telefone: '',
    assunto: 'Informações sobre loteamentos',
    mensagem: ''
  });
  
  const [formStatus, setFormStatus] = useState<FormStatus>({
    submitted: false,
    success: false,
    message: ''
  });
  
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validação básica
    if (!formData.nome || !formData.email || !formData.telefone || !formData.mensagem) {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Por favor, preencha todos os campos obrigatórios.'
      });
      return;
    }
    
    // Simulação de envio bem-sucedido
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.'
    });
    
    // Limpar formulário após envio bem-sucedido
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      assunto: 'Informações sobre loteamentos',
      mensagem: ''
    });
  };
  
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#0F3B7D] text-white py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold">Sobre Nós</h1>
        </div>
      </section>

      {/* About Us Content Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-10">
            {/* Propósito Intro */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">Seu Lugar ao Seu Alcance em Minas Gerais</h2>
              <p className="text-gray-700 text-lg">
                Nosso propósito é claro: colocar o <strong>seu lugar ao seu alcance</strong>, tornando a aquisição da terra própria uma realidade para as famílias mineiras. A Setminas existe para abrir as portas do seu futuro, contribuindo para o desenvolvimento de Minas Gerais com loteamentos de qualidade e oportunidades acessíveis.
              </p>
            </div>

            {/* 27 Anos */}
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-full mt-1 flex-shrink-0">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#0F3B7D]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-3">27 Anos Construindo Confiança no Mercado Mineiro</h2>
                <p className="text-gray-700 text-lg mb-4">
                  Fundada em 29 de março de 2016, a Setminas é o resultado de uma paixão pelo desenvolvimento urbano mineiro que começou muito antes. Nosso fundador, Paulo Souza, consolidou 18 anos de liderança à frente do Núcleo Minas da Setpar, uma referência no setor. Somados aos 9 anos de sucesso da Setminas, são <strong>27 anos de dedicação exclusiva</strong> ao mercado de loteamentos em Minas Gerais.
                </p>
                <p className="text-gray-700 text-lg">
                  Essa trajetória não é apenas um número. São 27 anos de experiência que se traduzem em solidez, profundo conhecimento técnico e um entendimento único das necessidades de quem vive e investe aqui. Cada metro quadrado entregue pela Setminas carrega a segurança e a qualidade que só décadas de expertise podem oferecer.
                </p>
              </div>
            </div>

            {/* Missão */}
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 w-12 h-12 rounded-full mt-1 flex-shrink-0 flex items-center justify-center"> {/* Fixed size container */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 141.73 141.73" width="34" height="34" className="text-[#0F3B7D]">
                  
                  <path fill="currentColor" d="M107.44,56.94c-1.35-3.19-3.08-6.18-5.16-8.91l-2.36-.32-3.74,3.74c2,2.49,3.64,5.23,4.89,8.18,1.8,4.26,2.72,8.79,2.72,13.44s-.91,9.18-2.72,13.44c-1.74,4.11-4.23,7.8-7.4,10.97-3.17,3.17-6.86,5.66-10.97,7.4-4.26,1.8-8.79,2.72-13.44,2.72s-9.18-.91-13.44-2.72c-4.11-1.74-7.8-4.23-10.97-7.4-3.17-3.17-5.66-6.86-7.4-10.97-1.8-4.26-2.72-8.79-2.72-13.44s.91-9.18,2.72-13.44c1.74-4.11,4.23-7.8,7.4-10.97,3.17-3.17,6.86-5.66,10.97-7.4,4.26-1.8,8.79-2.72,13.44-2.72s9.18.91,13.44,2.72c2.96,1.25,5.7,2.89,8.18,4.89l3.74-3.74-.32-2.36c-2.74-2.08-5.72-3.81-8.91-5.16-5.12-2.17-10.55-3.26-16.14-3.26s-11.02,1.1-16.14,3.26c-4.94,2.09-9.37,5.07-13.17,8.87-3.8,3.8-6.79,8.23-8.87,13.17-2.17,5.12-3.26,10.55-3.26,16.14s1.1,11.02,3.26,16.14c2.09,4.94,5.07,9.37,8.87,13.17,3.8,3.8,8.23,6.79,13.17,8.87,5.12,2.17,10.55,3.26,16.14,3.26s11.02-1.1,16.14-3.26c4.94-2.09,9.37-5.07,13.17-8.87,3.8-3.8,6.79-8.23,8.87-13.17,2.17-5.12,3.26-10.55,3.26-16.14s-1.1-11.02-3.26-16.14h0Z"/>
                  <path fill="currentColor" d="M94.9,62.24c-.91-2.16-2.08-4.17-3.49-6.02l-4.94,4.94c2.41,3.47,3.71,7.59,3.71,11.91,0,5.59-2.17,10.84-6.13,14.79-3.95,3.95-9.2,6.13-14.79,6.13s-10.84-2.18-14.79-6.13c-3.95-3.95-6.13-9.2-6.13-14.79s2.17-10.84,6.13-14.79c3.95-3.95,9.2-6.13,14.79-6.13,4.32,0,8.44,1.3,11.91,3.71l4.94-4.94c-1.85-1.41-3.86-2.58-6.02-3.49-3.43-1.45-7.08-2.19-10.83-2.19s-7.4.74-10.83,2.19c-3.31,1.4-6.29,3.41-8.84,5.96-2.55,2.55-4.56,5.53-5.96,8.84-1.45,3.43-2.19,7.08-2.19,10.83s.74,7.4,2.19,10.83c1.4,3.31,3.41,6.29,5.96,8.84,2.55,2.55,5.53,4.56,8.84,5.96,3.43,1.45,7.08,2.19,10.83,2.19s7.4-.74,10.83-2.19c3.31-1.4,6.29-3.41,8.84-5.96,2.55-2.55,4.56-5.53,5.96-8.84,1.45-3.43,2.19-7.08,2.19-10.83s-.74-7.4-2.19-10.83h0Z"/>
                  <path fill="currentColor" d="M81.61,66.02l-5.26,5.26c.14.58.22,1.18.22,1.79,0,1.95-.76,3.78-2.14,5.16-1.38,1.38-3.21,2.14-5.16,2.14s-3.78-.76-5.16-2.14c-1.38-1.38-2.14-3.21-2.14-5.16s.76-3.78,2.14-5.16c1.38-1.38,3.21-2.14,5.16-2.14.61,0,1.21.07,1.79.22l5.26-5.26c-2.12-1.22-4.54-1.87-7.05-1.87-3.8,0-7.36,1.48-10.05,4.16s-4.16,6.25-4.16,10.05,1.48,7.36,4.16,10.05,6.25,4.16,10.05,4.16,7.36-1.48,10.05-4.16c2.68-2.68,4.16-6.25,4.16-10.05,0-2.51-.65-4.93-1.87-7.05Z"/>
                  <path fill="currentColor" d="M112.32,37.65l-2.39-2.39,1.91-1.91c.79-.79.79-2.06,0-2.85s-2.06-.79-2.85,0l-1.91,1.91-2.39-2.39c-.73-.73-1.91-.73-2.64,0l-5.82,5.82c-.41.41-.61.99-.53,1.57l.76,5.62-28.62,28.62c-.79.79-.79,2.06,0,2.85.39.39.91.59,1.42.59s1.03-.2,1.42-.59l28.62-28.62,5.62.76c.58.08,1.16-.12,1.57-.53l5.82-5.82c.73-.73.73-1.91,0-2.64h0Z"/>
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-3">Nossa Missão: Descomplicar a Conquista do Seu Espaço</h2>
                <p className="text-gray-700 text-lg mb-4">
                  Acreditamos que o acesso à terra deve ser simples e viável. Nossa missão é facilitar a conquista do lote próprio para todos os perfis de clientes, oferecendo as melhores condições do mercado e tornando realidade o conceito: <strong>Seu lugar ao seu alcance</strong>.
                </p>
                <p className="text-gray-700 text-lg">
                  É por isso que o <strong>financiamento próprio</strong> é um pilar da Setminas. Com ele, eliminamos burocracias e criamos planos flexíveis, adaptados à sua realidade financeira. Aqui, a compra do seu lote é um processo transparente, ético e focado em construir uma relação de confiança duradoura.
                </p>
              </div>
            </div>

            {/* Especialistas */}
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 w-12 h-12 rounded-full mt-1 flex-shrink-0 flex items-center justify-center"> {/* Fixed size container */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 141.73 141.73" width="41" height="41" className="text-[#0F3B7D]">
                  
                  <path fill="currentColor" d="M65.14,109.82h-3.37l-.62-3.11-.03-.42-.42-.66-.54-1.02-.59-1.58-.1-1.96v-2.03l.52-1.22.12-1.13-.82-.21-1.74-.98-1.43-1.71-.78-1.27-.32-1.08-.49-1.84v-1.66l-.67-2.41-.62-.7-.36-.12h-1.51c-.26.04-.99.16-1.57.26l-.17.02c-1.25.14-1.89.2-2.24.22-.01,0-.03.01-.04.02-.36.15-.85.35-1.44.44-.51.08-1.18.07-2.06.04l-.84,1.13h-3.87l-1.96-2.3-.9-.46-3.09-.06-2.76-.15h-2.51l-4.96.15-.28-3.49c0-1.91.44-2.65.59-2.89.21-.34.83-1.18,1.86-2.47l.07-.08c.74-.86,1.53-1.88,1.74-2.25.48-1.39,1.62-2.07,2.11-2.37l.03-.02c.34-.29,1.06-.72,2.51-.85l1.48-.07,1.88-.28,1.8-.33,1.41-.12.29-.11.98-1.16,2.37-.45,2.34.09h3.7c.37,0,1.02,0,2.54.96l.97-.92,1.72-.67c.24-.24.46-.49.58-.63.07-.16.15-.31.23-.45l-.13-.83.25-1.4-.48-.24-.6-3.32,1.22-2.25.7-.51-.19-1.66-.91-1.27.22-3.28.31-2.75,3.21-1.52.82.1.04-.88-.43-1.5-.16-4.47,3.11-.93,1.21-1.53h2.65c1.16,0,1.96.68,3.04,1.94l.24.27.2-.06,3.89-1.91,4.52-2.89,3.24-2.25,2.35-.13,2.15.36,2.13,1.36.95,2.11.06-.29,1.77-.24c.87-.12,1.46-.17,1.77-.17.36,0,1.45.09,1.45.09l.77.07,1.88,1.55,1.54,1.19,2.34,1.27.91.35.29.03h1.54c.32,0,.9.06,1.72.18l.35.05,1.73.79.99,1.28,1.67,1.46.19.96h4.67l2.15.82,1.38.61,3.45,1.66-.2,4.3-1.89,2.28-.33.77-.37,3.07h-2.16l-.09.57c-.05.54-.1,1.11-.12,1.5.13.2.29.45.46.7l2.52,2.3-.9,4.06h-5.25l-.24-.06v.09s-.67,1.09-.67,1.09c-.08.15-.17.32-.25.47l.6.44.23,4.06-.69.42.53,2.25-.14.58c-.19.79-.41,1.79-.47,2.13-.01.49-.07,1.41-.07,1.41l-.05.75-1.25,1.63-.82,1.88-1.31,2.12-2.46.09-.97,3.2-1.01,1.28-1.18,2.16-1.51,3.89-1.37,1.93-.41.26c-.35.22-.75.5-.99.68-.62.85-1.74,1.34-2.77,1.79l-.14.06-2.03.74-2.09.09h-2.13l-1.06.13-1.19.24-1.58.21-1.54.33-1.02.32-1.43.54-3.31.75-2.34,1.24-1.44.46c-.16.09-.38.22-.5.29-.53.34-1.2.62-2.87.5l-.28-.02-.77,2.01-3.6.15ZM65.03,103.13l.72,1.12.93-1.19,3.49-1.22.62.63c.1-.05.16-.09.16-.09l.44-.19,1.43-.46,2.32-1.27,3.79-.87,1.14-.45,1.44-.44,1.93-.41,1.6-.22,1.25-.24,1.6-.17,3.38-.05,1.23-.45c.29-.13.61-.28.83-.4.42-.48,1.01-.92,1.76-1.41l.46-.65,1.45-3.71,1.61-2.88.54-.69,1-3.28,2-2.48,2.02-.07.68-1.63.73-.95c0-.18.02-.34.02-.46,0-.21,0-.6.46-2.59l-.04-.18-.86-1.09.48-3.26-.35-.26.09-1.37s.06-.93.06-1.22c0-.48.08-1.09,1.01-2.74l.17-.28c.17-.81.62-2,1.76-2.65.76-.43,1.48-.65,1.62-.69l.24-.06c-.15-.27-.21-.42-.25-.54-.17-.48-.23-.96.03-3.55l.02-.16.58-3.49,2.34-1.27.67-1.56.88-1.04-1.28-.57-1.1-.42h-3.02l-1.13.45h-3.35l-.88-3.07-.14-.7-.91-.86-.37-.48c-.23-.03-.51-.06-.67-.07h-1.76s-1.21-.13-1.21-.13l-1.97-.78-3-1.67-2.15-1.69-.1.49-3.11.2-2.97-.11-2.31-2.46-.61-1.42-.59-.1-.39.02-2.15,1.49-4.96,3.15-4.52,2.19-1.77.56-4.34,1.91-.26-3.45-.66.23v.02s.48,1.7.48,1.7l-.16,2.62-.56,2.36-3.04,1.7-.71-.09-.06.89.61.86.41,3.59-.31,2.66-.89.65.46,2.61-.31,1.77.36,2.27-.88.9s-.05.06-.07.09c-.12.33-.47,1.07-2.04,2.57l-.36.34-1.75.68-1.03.97-2.68,2.92-2.58-3c-.14-.09-.28-.17-.39-.23h-3.35l-1.87-.07h-.07s-.68.83-.68.83l-2.16.8-1.95.17-1.57.3-2.31.33-1.5.07s-.02,0-.06,0c-.09.06-.17.11-.25.16-.03.02-.06.03-.09.05-.23.53-.83,1.56-2.53,3.52-.14.18-.29.36-.43.55h1.99s2.81.16,2.81.16l4.14.08,2.72,1.37.83.9c.55-.39,1.25-.69,2.06-.69.17,0,.42,0,.71.02.37,0,1.14.04,1.37,0,.03-.01.13-.07.23-.11.41-.17.92-.38,1.55-.38.16,0,1.17-.11,2.01-.2,1.82-.33,2.07-.33,2.26-.33h2.47l2.23.78,1.33,1.34,1.08,1.32,1.15,4.12v1.68l.41,1.5.34.54.5.58.39.22,1.03.31,2.08.97.9,2.53-.12,1.97-.2,1.56-.39.91v.95l.05.99.26.68.25.45ZM44.23,85.19l-.02.03s.01-.02.02-.03ZM110.63,78.56v.06-.06ZM26.9,72.89s-.03.08-.04.11c.01-.04.02-.07.04-.11ZM28.9,70.6s-.02.02-.03.03l.03-.03ZM53.56,66.08s-.03.08-.05.13c.02-.05.03-.09.05-.13Z"/>
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-3">Especialistas em Minas Gerais: Paixão e Conhecimento Local</h2>
                <p className="text-gray-700 text-lg">
                  Minas Gerais é o nosso território. E nós o conhecemos como ninguém. Nosso foco exclusivo no estado nos permite desenvolver loteamentos que respeitam a cultura local e oferecem infraestrutura completa, pensada para o bem-estar da sua família. Seja para construir seu lar ou para investir com segurança, a Setminas tem o endereço certo para os seus planos.
                </p>
              </div>
            </div>

            {/* Chamada Final */}
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-full mt-1 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#0F3B7D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-3">Seu Futuro Começa Agora. Fale com a Setminas.</h2>
                <p className="text-gray-700 text-lg mb-4">
                  Temos orgulho de fazer parte da história de inúmeras famílias mineiras. Agora, queremos fazer parte da sua. Não adie mais a conquista do seu espaço.
                </p>
                <p className="text-gray-700 text-lg">
                  Conheça os loteamentos Setminas e descubra a segurança e a facilidade de investir com quem realmente entende de Minas Gerais. Entre em contato connosco. Estamos prontos para encontrar a solução perfeita para você.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* Seção Nossos Parceiros */}
        <section className="py-12 md:py-16 bg-gray-100"> {/* Alterado para bg-gray-100 */}
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Título alinhado à esquerda e com mesmo estilo dos outros títulos de seção */}
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Nossos Parceiros: Construindo o Futuro Juntos</h2>
            {/* Texto com mesmo estilo dos outros parágrafos de seção */}
            <div className="text-gray-700 text-lg space-y-4">
              <p>
                A Setminas valoriza conexões estratégicas. Cultivamos uma rede sólida de empresas parceiras, líderes nos setores imobiliário e de construção civil, essenciais para a excelência dos nossos projetos.
              </p>
              <p>
                Esta colaboração garante acesso às melhores práticas e tecnologias, resultando em loteamentos que superam expectativas. Nossos parceiros compartilham nosso compromisso com o desenvolvimento sustentável e a satisfação do cliente, assegurando eficiência e transparência em cada etapa.
              </p>
              <p>
                A confiança mútua e o alinhamento de valores são a base destas alianças, permitindo-nos oferecer soluções completas e fortalecer o progresso das comunidades onde atuamos. Juntos, edificamos o futuro.
              </p>
            </div>
            
            <div className="mt-12">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
                {[
                  { nome: 'Fort Empreendimentos Imobiliários', logoUrl: '/images/parceiros/fort_empreendimentos-imobiliarios.svg' },
                  { nome: 'Stone Empreendimentos Imobiliários', logoUrl: '/images/parceiros/stone.png' },
                  { nome: 'Setpar', logoUrl: '/images/parceiros/logo_setpar.png' },
                  { nome: 'MGTop', logoUrl: '/images/parceiros/logo_mgtop.png' },
                  { nome: 'É-Mais', logoUrl: '/images/parceiros/logo_e-mais.png' },
                ].map((parceiro) => (
                  <div key={parceiro.nome} className="flex justify-center">
                    <div className="relative h-20 w-40">
                      <Image
                        src={parceiro.logoUrl}
                        alt={`Logo ${parceiro.nome}`}
                        fill
                        style={{ objectFit: 'contain' }}
                        unoptimized={parceiro.logoUrl.endsWith(".svg")}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      {/* Call to Action Section */}
      <section className="bg-[#0F3B7D] text-white py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Estamos à disposição para esclarecer suas dúvidas e fornecer mais informações sobre nossos empreendimentos.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Contact Info */}
            <div className="md:w-1/3">
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Informações de Contato</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#0F3B7D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Endereço</h3>
                      <p className="text-gray-600 mt-1">
                        Av. Alfredo Custódio de Paula,<br />
                        164, sala 101, Santa Elisa.<br />
                        CEP 37.553-063.<br />
                        Pouso Alegre - MG.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#0F3B7D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Telefone</h3>
                      <p className="text-gray-600 mt-1">
                        (35) 98424-4567
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#0F3B7D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">E-mail</h3>
                      <p className="text-gray-600 mt-1">
                        contato@setminas.com.br<br />
                        vendas@setminas.com.br
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#0F3B7D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Horário de Atendimento</h3>
                      <p className="text-gray-600 mt-1">
                        Segunda a Sexta: 8h às 18h<br />
                        Sábado: 8h às 12h
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="font-semibold text-gray-800 mb-3">Redes Sociais</h3>
                  <div className="flex space-x-4">
                    <a href="https://www.instagram.com/setminasimob?igsh=NWJ1MHRiZHNjMjNz" target="_blank" rel="noopener noreferrer" className="bg-blue-100 p-3 rounded-full hover:bg-blue-200 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#0F3B7D]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                    <a href="https://www.facebook.com/share/1614P7sjaE/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="bg-blue-100 p-3 rounded-full hover:bg-blue-200 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#0F3B7D]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                      </svg>
                    </a>
                    <a href="http://wa.me/5535984244567" target="_blank" rel="noopener noreferrer" className="bg-blue-100 p-3 rounded-full hover:bg-blue-200 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#0F3B7D]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01s-.521.074-.795.372c-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="md:w-2/3">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Envie sua Mensagem</h2>
                
                {formStatus.submitted && (
                  <div className={`p-4 mb-6 rounded-md ${formStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {formStatus.message}
                  </div>
                )}
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="nome" className="block text-gray-700 font-medium mb-2">Nome Completo *</label>
                      <input
                        type="text"
                        id="nome"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Seu nome completo"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">E-mail *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="seu.email@exemplo.com"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="telefone" className="block text-gray-700 font-medium mb-2">Telefone *</label>
                      <input
                        type="tel"
                        id="telefone"
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="(00) 00000-0000"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="assunto" className="block text-gray-700 font-medium mb-2">Assunto</label>
                      <select
                        id="assunto"
                        name="assunto"
                        value={formData.assunto}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="Informações sobre loteamentos">Informações sobre loteamentos</option>
                        <option value="Financiamento">Financiamento</option>
                        <option value="Visita ao empreendimento">Visita ao empreendimento</option>
                        <option value="Suporte ao cliente">Suporte ao cliente</option>
                        <option value="Outros">Outros</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="mensagem" className="block text-gray-700 font-medium mb-2">Mensagem *</label>
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      value={formData.mensagem}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Digite sua mensagem aqui..."
                      required
                    ></textarea>
                  </div>
                  
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="bg-[#0F3B7D] text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-800 transition-colors"
                    >
                      Enviar Mensagem
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Nossa Localização</h2>
          <div className="h-96 rounded-lg overflow-hidden shadow-md"> {/* Added overflow-hidden and shadow */}
            <iframe
              src="https://maps.google.com/maps?q=Av.+Cel.+Alfredo+Cust%C3%B3dio+de+Paula,+164+-+Pouso+Alegre,+MG,+37550-000&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de localização da Setminas"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}
