 
'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Dados dos loteamentos na ordem desejada
const loteamentos = [
  {
    id: 'parque-sao-judas-2',
    nome: 'Parque São Judas 2ª fase',
    cidade: 'Candeias',
    descricao: 'Última chance de comprar o seu lote na melhor localização de Candeias.',
    imagemUrl: '/images/loteamentos/Setminas_SaoJudasII_Fotomontagem_B_HR.jpg',
    status: 'Lançamento'
  },
  {
    id: 'brasil-vilela-2',
    nome: 'Brasil Vilela 2',
    cidade: 'Campo Belo',
    descricao: 'Você morando no melhor bairro de Campo Belo.',
    imagemUrl: '/images/loteamentos/brasil-vilela-2_principal.jpg', 
    status: 'Lançamento'
  },
  {
    id: 'parque-olimpico-3',
    nome: 'Parque Olímpico 3',
    cidade: 'Governador Valadares',
    descricao: 'Você na região que mais valoriza em Valadares com infraestrutura completa.',
    imagemUrl: '/images/loteamentos/pq-olimpico-3_em-obras.png',
    status: 'Em Obras'
  },
  {
    id: 'parque-sao-judas',
    nome: 'Parque São Judas',
    cidade: 'Candeias',
    descricao: 'Loteamento com localização estratégica, próximo ao centro da cidade.',
    imagemUrl: '/images/empreendimentos/pq_sao-judas.JPG'
  },
  {
    id: 'parque-boulevard',
    nome: 'Parque Boulevard',
    cidade: 'Governador Valadares',
    descricao: 'Loteamento com excelente topografia e localização, com infraestrutura completa.',
    imagemUrl: '/images/loteamentos/parque-boulevard_principal.jpg'
  },
  {
    id: 'mirante-do-lago',
    nome: 'Mirante do Lago',
    cidade: 'Campo Belo',
    descricao: 'Loteamento às margens do lago, oferecendo tranquilidade e contato com a natureza.',
    imagemUrl: '/images/empreendimentos/mirante_do_lago.png'
  },
  {
    id: 'dom-couto',
    nome: 'Dom Couto',
    cidade: 'Formiga',
    descricao: 'Investimento acessível com excelente localização e infraestrutura completa.',
    imagemUrl: '/images/empreendimentos/residencial_dom-couto.JPG'
  },
  {
    id: 'mont-serrat',
    nome: 'Mont Serrat',
    cidade: 'Campos Gerais',
    descricao: 'Loteamento fechado com infraestrutura completa, localizado em área privilegiada.',
    imagemUrl: '/images/empreendimentos/portaria_mont-serrat.jpg'
  },
  {
    id: 'mirante-do-lago-sgp',
    nome: 'Mirante do Lago',
    cidade: 'São Gonçalo do Pará',
    descricao: 'Loteamento com vista para a Lagoa da Bagagem com infraestrutura completa.',
    imagemUrl: '/images/loteamentos/mirante-do-lago_sao-goncalo-do-para.png',
    logoUrl: '/images/logos/mirante-do-lago_sao-goncalo.png' // Specific logo for this one
  },
  {
    id: 'mirante-da-serra',
    nome: 'Mirante da Serra',
    cidade: 'Itatiaiuçu',
    descricao: 'Empreendimento na região central da cidade com lotes amplos e vista panorâmica.',
    imagemUrl: '/images/empreendimentos/mirante-da-serra.png'
  },
  {
    id: 'parque-tropical',
    nome: 'Parque Tropical',
    cidade: 'Passos',
    descricao: 'Mais que um projeto de arquitetura, um projeto de vida.',
    imagemUrl: '/images/loteamentos/parque-tropical_principal.jpg'
  },
  {
    id: 'residencial-las-palmas',
    nome: 'Residencial Las Palmas',
    cidade: 'Pouso Alegre',
    descricao: 'Você nunca imaginou um lugar assim.',
    imagemUrl: '/images/loteamentos/residencial-las-palmas_principal.jpg'
  },
  {
    id: 'jardim-aeroporto',
    nome: 'Jardim Aeroporto',
    cidade: 'Guaxupé',
    descricao: 'Loteamento acessível com toda infraestrutura completa e área verde.',
    imagemUrl: '/images/loteamentos/jardim-aeroporto_principal.jpg'
  }
];

const EmpreendimentosPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-[#0F3B7D]">Nossos Empreendimentos</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loteamentos.map((loteamento) => {
            const logoMap: Record<string, string> = {
              'mont-serrat': '/images/loteamentos/mont-serrat.png',
              'mirante-da-serra': '/images/loteamentos/mirante-da-serra.png',
              'mirante-do-lago': '/images/loteamentos/mirante-do-lago_campo-belo.png',
              'dom-couto': '/images/loteamentos/dom-couto.png',
              'parque-sao-judas': '/images/loteamentos/logo_pq-sao-judas_V02.png',
              'parque-sao-judas-2': '/images/logos/pq-sao-judas-2a-fase.png',
              'parque-olimpico-3': '/images/logos/pq-olimpico-3.png',
              'paulo-couto': '/images/logos/logo_paulo-couto_V02.svg',
              'mirante-do-lago-sgp': loteamento.logoUrl || '/images/logos/mirante-do-lago_sao-goncalo.png',
              'brasil-vilela-2': '/images/logos/brasil-vilela-2.svg',
              'parque-boulevard': '/images/logos/logo_parque-boulevard.svg',
              'jardim-aeroporto': '/images/logos/jardim-aeroporto.svg',
              'residencial-las-palmas': '/images/logos/logo_las-palmas.svg',
              'parque-tropical': '/images/logos/logo_parque-tropical.svg'
            };

            const logoSrc = logoMap[loteamento.id] || '/images/empreendimentos/placeholder.jpg';
            const isSvg = logoSrc.endsWith('.svg');
            let logoContainerClass = "relative h-28 flex items-center justify-center mb-4 overflow-hidden";
            let imageClass = "object-contain";

            if (['jardim-aeroporto', 'residencial-las-palmas'].includes(loteamento.id)) {
                logoContainerClass += " w-2/3 mx-auto"; 
            }
            if (loteamento.id === 'parque-sao-judas') { // Exemplo para referência de largura
                // Nenhuma classe adicional para manter a largura padrão como referência
            }

            return (
              <div
                key={loteamento.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                <div className="relative h-48">
                  <Image
                    src={loteamento.imagemUrl}
                    alt={`${loteamento.nome} - ${loteamento.cidade}`}
                    width={400}
                    height={192}
                    className="object-cover w-full h-full"
                    unoptimized={loteamento.imagemUrl.endsWith('.gif')} // Exemplo se gifs fossem usados
                  />
                  {loteamento.status && (
                    <div
                      className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold text-white ${
                        loteamento.status === 'Breve Lançamento' ? 'bg-orange-500' :
                        loteamento.status === 'Lançamento' ? 'bg-green-500' :
                        'bg-blue-500' // Default for 'Em Obras' or others
                      }`}
                    >
                      {loteamento.status}
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex-grow">
                    <div className={logoContainerClass}>
                      {isSvg ? (
                        <img src={logoSrc} alt={`Logo ${loteamento.nome}`} className={`w-full h-full ${imageClass}`} />
                      ) : (
                        <Image
                          src={logoSrc}
                          alt={`Logo ${loteamento.nome}`}
                          fill
                          className={imageClass}
                          unoptimized={logoSrc.endsWith('.gif')}
                        />
                      )}
                    </div>
                    <h2 className="text-2xl font-semibold text-center text-[#0F3B7D] mb-2">
                      {loteamento.nome}
                    </h2>
                    <div className="text-center text-gray-600 mb-4">
                      {loteamento.cidade}
                    </div>
                    <p className="text-gray-700 mb-4 text-center">
                      {loteamento.descricao}
                    </p>
                  </div>
                  <div className="text-center mt-auto">
                    <Link href={`/empreendimentos/${loteamento.id}`} className="bg-[#0F3B7D] text-white px-6 py-2 rounded-md hover:bg-[#0D336B] transition-colors inline-block">
                      Ver Detalhes
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default EmpreendimentosPage;

