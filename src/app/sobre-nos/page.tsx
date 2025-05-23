'use client';

import React from 'react';
import Image from 'next/image';

const SobreNosPage: React.FC = () => {
  const parceiros = [
    { nome: 'Fort Empreendimentos Imobiliários', logoUrl: '/images/parceiros/fort_empreendimentos-imobiliarios.svg' },
    { nome: 'Stone Empreendimentos Imobiliários', logoUrl: '/images/parceiros/stone.png' },
    { nome: 'Setpar', logoUrl: '/images/parceiros/logo_setpar.png' },
    { nome: 'MGTop', logoUrl: '/images/parceiros/logo_mgtop.png' },
    { nome: 'É-Mais', logoUrl: '/images/parceiros/logo_e-mais.png' },
  ];

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-[#0F3B7D]">Sobre Nós</h1>

        {/* Seção Sobre a Setminas - Placeholder */}
        <section className="mb-16 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-[#0F3B7D] mb-6">A Setminas</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Aqui virá o texto sobre a Setminas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </section>

        {/* Seção Nossos Parceiros */}
        <section className="mb-16 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-[#0F3B7D] mb-6 text-center">Nossos Parceiros: Construindo o Futuro Juntos</h2>
          <div className="max-w-3xl mx-auto text-gray-700 leading-relaxed">
            <p className="mb-4">
              A Setminas valoriza conexões estratégicas. Cultivamos uma rede sólida de empresas parceiras, líderes nos setores imobiliário e de construção civil, essenciais para a excelência dos nossos projetos.
            </p>
            <p className="mb-4">
              Esta colaboração garante acesso às melhores práticas e tecnologias, resultando em loteamentos que superam expectativas. Nossos parceiros compartilham nosso compromisso com o desenvolvimento sustentável e a satisfação do cliente, assegurando eficiência e transparência em cada etapa.
            </p>
            <p className="mb-4">
              A confiança mútua e o alinhamento de valores são a base destas alianças, permitindo-nos oferecer soluções completas e fortalecer o progresso das comunidades onde atuamos. Juntos, edificamos o futuro.
            </p>
          </div>
          
          <div className="mt-12">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
              {parceiros.map((parceiro) => (
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
        </section>

      </div>
    </main>
  );
};

export default SobreNosPage;

