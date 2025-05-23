import React from 'react';
import Image from 'next/image';

interface LoteamentoLogoProps {
  nome: string; // Mantido para o alt text
  loteamentoId?: string; // Adicionado loteamentoId para busca do logo
  className?: string;
  width?: number; // Não usado diretamente se 'fill' for usado, mas pode ser útil para o container pai
  height?: number; // Não usado diretamente se 'fill' for usado, mas pode ser útil para o container pai
}

const LoteamentoLogo: React.FC<LoteamentoLogoProps> = ({
  nome,
  loteamentoId, // Desestruturado
  className = '',
  // width e height não são mais usados para modificar o logo diretamente aqui, pois usamos 'fill'
}) => {
      // Mapeamento de loteamentoId para arquivos de imagem
      const logoMapById: Record<string, string> = {
        'mont-serrat': '/images/loteamentos/mont-serrat.png',
        'mirante-da-serra': '/images/loteamentos/mirante-da-serra.png',
        'mirante-do-lago': '/images/loteamentos/mirante-do-lago_campo-belo.png',
        'mirante-do-lago-sgp': '/images/logos/mirante-do-lago_sao-goncalo.png',
        'dom-couto': '/images/loteamentos/dom-couto.png',
        'parque-sao-judas': '/images/loteamentos/logo_pq-sao-judas_V02.png',
        'paulo-couto': '/images/logos/logo_paulo-couto_V02.svg',
        'parque-sao-judas-2': '/images/logos/pq-sao-judas-2a-fase.png',
        'parque-olimpico-3': '/images/logos/pq-olimpico-3.png',
        'brasil-vilela-2': '/images/logos/brasil-vilela-2.svg',
        'parque-boulevard': '/images/logos/logo_parque-boulevard.svg',
        'jardim-aeroporto': '/images/logos/jardim-aeroporto.svg',
        'residencial-las-palmas': '/images/logos/logo_las-palmas.svg',
        'parque-tropical': '/images/logos/logo_parque-tropical.svg'
      };

  // Usar o logo específico ou um placeholder se não encontrado
  const logoSrc = (loteamentoId && logoMapById[loteamentoId]) || '/images/empreendimentos/placeholder.jpg';
  const isSvg = logoSrc.endsWith('.svg');

  return (
    <>
      {isSvg ? (
        <img src={logoSrc} alt={`Logo ${nome}`} className={`loteamento-logo object-contain w-full h-full ${className}`} />
      ) : (
        <Image
          src={logoSrc}
          alt={`Logo ${nome}`}
          fill
          className={`loteamento-logo object-contain ${className}`}
          unoptimized={logoSrc.endsWith('.gif')} // Manter para consistência, embora não haja gifs aqui
        />
      )}
    </>
  );
};

export default LoteamentoLogo;

