import React from "react";
import Image from "next/image";

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
	className = "",
	// width e height não são mais usados para modificar o logo diretamente aqui, pois usamos 'fill'
}) => {
	// Mapeamento de loteamentoId para arquivos de imagem
	const logoMapById: Record<string, string> = {
		"alta-vista-park": "logo_alta-vista-park.svg",
		"brasil-vilela-2": "brasil-vilela-2.svg",
		"dom-couto": "dom-couto.png",
		"jardim-aeroporto": "jardim-aeroporto.svg",
		"mirante-da-serra": "mirante-da-serra.png",
		"mirante-do-lago": "mirante-do-lago_campo-belo.png",
		"mirante-do-lago-sgp": "mirante-do-lago_sao-goncalo.png",
		"mont-serrat": "mont-serrat.png",
		"parque-boulevard": "logo_parque-boulevard.svg",
		"parque-olimpico-3": "pq-olimpico-3.png",
		"parque-sao-judas": "logo_pq-sao-judas_V02.png",
		"parque-sao-judas-2": "pq-sao-judas-2a-fase.png",
		"parque-tropical": "logo_parque-tropical.svg",
		"residencial-euroville": "logo_euroville.svg",
		"residencial-las-palmas": "logo_las-palmas.svg",
		"paulo-couto": "logo_paulo-couto_V02.svg",
	};

	// Usar o logo específico ou um placeholder se não encontrado
	const logoSrc =
		(loteamentoId && logoMapById[loteamentoId]) ||
		"/images/empreendimentos/placeholder.jpg";
	const isSvg = logoSrc.endsWith(".svg");

	return (
		<>
			{isSvg ? (
				<img
					src={`/images/logos/${logoSrc}`}
					alt={`Logo ${nome}`}
					className={`loteamento-logo object-contain w-full h-full ${className}`}
				/>
			) : (
				<Image
					src={`/images/logos/${logoSrc}`}
					alt={`Logo ${nome}`}
					fill
					className={`loteamento-logo object-contain ${className}`}
					unoptimized={logoSrc.endsWith(".gif")} // Manter para consistência, embora não haja gifs aqui
				/>
			)}
		</>
	);
};

export default LoteamentoLogo;
