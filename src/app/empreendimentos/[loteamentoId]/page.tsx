"use client"; // Mark as Client Component

import React from "react";
import { useParams } from "next/navigation"; // Import useParams hook
import LoteamentoLogo from "@/components/ui/loteamento-logo";
import Link from "next/link";
import ImageCarousel from "@/components/ui/image-carousel";
import { featureIconPaths, getIconKey } from "@/utils/featureIcons";

// Dados dos loteamentos (mantidos no mesmo arquivo por simplicidade)
const loteamentosData: Record<
	string,
	{
		nome: string;
		cidade: string;
		descricaoHeader: string;
		conceito: string;
		caracteristicas: string[];
		galeria: string[];
		mapSrc?: string;
		contact: string;
	}
> = {
	"parque-sao-judas-2": {
		nome: `Parque São Judas 2ª fase`,
		cidade: `Candeias`,
		descricaoHeader: `Última chance de comprar o seu lote na melhor localização de Candeias.`,
		conceito: `Aproveite a oportunidade derradeira de investir no Parque São Judas 2ª fase, um empreendimento que combina uma localização privilegiada em Candeias com uma infraestrutura completa pensada para o seu bem-estar. Aqui, a qualidade de vida e a valorização do seu patrimônio andam de mãos dadas, num ambiente que reflete o melhor do planejamento urbano moderno.`,
		caracteristicas: [
			`Lotes a partir de 200m²`,
			`Melhor localização de Candeias`,
			`Infraestrutura completa`,
			`Área verde`,
			`Parcelamento próprio com a Setminas`,
			`Entrega totalmente pronta pela empreendedora`,
		],
		galeria: [
			`image-1.jpg`,
			`image-2.jpg`,
			`image-3.jpg`,
			`image-4.png`,
			`image-5.jpg`,
		],
		mapSrc: `https://www.google.com/maps?q=-20.7792160,-45.2761371&z=15&output=embed`,
		contact: `5535984244567`,
	},
	"brasil-vilela-2": {
		nome: `Brasil Vilela 2`,
		cidade: `Campo Belo`,
		descricaoHeader: `Você morando no melhor bairro de Campo Belo.`,
		conceito: `Descubra o Brasil Vilela 2, o endereço ideal para quem busca uma vida sofisticada no coração do melhor bairro de Campo Belo. Este empreendimento distingue-se pela sua localização nobre e uma área verde diferenciada, oferecendo um padrão de moradia elevado com infraestrutura completa e o selo de qualidade Setminas.`,
		caracteristicas: [
			`Lotes a partir de 300m²`,
			`Infraestrutura completa`,
			`Localização nobre`,
			`Área verde diferenciada`,
			`Parcelamento próprio com a Setminas`,
			`Entrega totalmente pronta pela empreendedora`,
		],
		galeria: [`image-1.jpg`, `image-2.jpg`, `image-3.jpg`],
		mapSrc: `https://www.google.com/maps?q=-20.901726,-45.287382&z=15&output=embed`,
		contact: `5535984244567`,
	},
	"parque-olimpico-3": {
		nome: `Parque Olímpico 3`,
		cidade: `Governador Valadares`,
		descricaoHeader: `Você na região que mais valoriza em Valadares com infraestrutura completa.`,
		conceito: `Invista no seu futuro com o Parque Olímpico 3, situado na região de maior valorização em Governador Valadares. Este loteamento oferece não apenas uma infraestrutura completa e áreas verdes, mas também a certeza de um patrimônio em constante crescimento, ideal para quem busca segurança e qualidade de vida.`,
		caracteristicas: [
			`Lotes a partir de 240m²`,
			`Região de alta valorização`,
			`Infraestrutura completa`,
			`Área verde`,
			`Parcelamento próprio com a Setminas`,
		],
		galeria: [
			`image-1.png`,
			`image-2.png`,
			`image-3.jpg`,
			`image-4.jpg`,
			`image-5.jpg`,
			`image-6.jpg`,
		],
		mapSrc: `https://www.google.com/maps?q=-18.8801111,-41.9837778&z=15&output=embed`,
		contact: `5533998800012`,
	},
	"parque-sao-judas": {
		nome: `Parque São Judas`,
		cidade: `Candeias`,
		descricaoHeader: `Loteamento com localização estratégica, próximo ao centro da cidade.`,
		conceito: `O Parque São Judas, em Candeias, destaca-se pela sua localização estratégica ao lado da Igreja São Judas Tadeu e próximo ao centro. Este empreendimento moderno, entregue totalmente pronto, combina fácil acesso com lazer diferenciado e terrenos planos a partir de 200m², assegurando qualidade de vida e valorização patrimonial, fruto da experiência consolidada da Setminas e Stone.`,
		caracteristicas: [
			`Lotes a partir de 200m²`,
			`Localização estratégica`,
			`Infraestrutura completa`,
			`Área verde`,
			`Parcelamento próprio com a Setminas`,
		],
		galeria: [`image-1.jpg`, `image-2.jpg`, `image-3.jpg`, `image-4.jpg`],
		mapSrc: `https://www.google.com/maps?q=-20.7779220,-45.2795167&z=15&output=embed`,
		contact: `5535984244567`,
	},
	"parque-boulevard": {
		nome: `Parque Boulevard`,
		cidade: `Governador Valadares`,
		descricaoHeader: `Loteamento com excelente topografia e localização, com infraestrutura completa.`,
		conceito: `O Parque Boulevard em Governador Valadares é a escolha perfeita para quem valoriza uma excelente topografia e localização privilegiada. Com lotes amplos e infraestrutura completa, este empreendimento foi concebido para proporcionar uma experiência de moradia superior, aliando conforto, conveniência e potencial de valorização.`,
		caracteristicas: [
			`Lotes a partir de 240m²`,
			`Infraestrutura completa`,
			`Localização nobre`,
			`Área verde diferenciada`,
			`Parcelamento próprio com a Setminas`,
			`Entrega totalmente pronta pela empreendedora`,
		],
		galeria: [`image-1.jpg`, `image-2.jpg`, `image-3.jpg`, `image-4.jpg`],
		mapSrc: `https://www.google.com/maps?q=-18.882121,-41.986160&z=15&output=embed`,
		contact: `5533998800012`,
	},
	"mirante-do-lago": {
		nome: `Mirante do Lago`,
		cidade: `Campo Belo`,
		descricaoHeader: `Loteamento às margens do lago, oferecendo tranquilidade e contato com a natureza.`,
		conceito: `Viva em harmonia com a natureza no Mirante do Lago, em Campo Belo. Este loteamento exclusivo, situado às margens do lago, oferece um refúgio de tranquilidade com vistas deslumbrantes, infraestrutura completa e a qualidade de vida que você sempre buscou, sem abrir mão da valorização do seu investimento.`,
		caracteristicas: [
			`Lotes a partir de 300m²`,
			`Infraestrutura completa`,
			`Vista para o lago`,
			`Área verde`,
			`Parcelamento próprio com a Setminas`,
		],
		galeria: [`image-1.png`, `image-2.jpg`, `image-3.jpg`, `image-4.jpg`],
		mapSrc: `https://www.google.com/maps?q=-20.9164856,-45.2796267&z=15&output=embed`,
		contact: `5535984244567`,
	},
	"dom-couto": {
		nome: `Dom Couto`,
		cidade: `Formiga`,
		descricaoHeader: `Investimento acessível com excelente localização e infraestrutura completa.`,
		conceito: `O Dom Couto, em Formiga, representa a oportunidade ideal para quem busca um investimento acessível sem abrir mão de uma excelente localização e infraestrutura completa. Este empreendimento foi cuidadosamente planejado para oferecer qualidade de vida e segurança patrimonial, tornando a conquista do seu lote uma realidade ao seu alcance.`,
		caracteristicas: [
			`Lotes a partir de 200m²`,
			`Preços acessíveis`,
			`Infraestrutura completa`,
			`Área verde`,
			`Parcelamento próprio com a Setminas`,
		],
		galeria: [
			`image-1.jpg`,
			`image-2.jpg`,
			`image-3.jpg`,
			`image-4.jpg`,
			`image-5.jpg`,
		],
		mapSrc: `https://www.google.com/maps?q=-20.5007500,-45.4340278&z=15&output=embed`,
		contact: `5535984244567`,
	},
	"mont-serrat": {
		nome: `Mont Serrat`,
		cidade: `Campos Gerais`,
		descricaoHeader: `Loteamento fechado com infraestrutura completa, localizado em área privilegiada.`,
		conceito: `Experimente um novo padrão de moradia no Mont Serrat, um loteamento fechado em Campos Gerais que combina segurança 24h, infraestrutura completa e uma localização privilegiada. Projetado para quem busca exclusividade e tranquilidade, o Mont Serrat é o cenário perfeito para construir a vida que você merece.`,
		caracteristicas: [
			`Lotes a partir de 240m²`,
			`Infraestrutura completa`,
			`Área verde`,
			`Segurança 24h`,
			`Localização privilegiada`,
			`Parcelamento próprio com a Setminas`,
		],
		galeria: [`image-1.jpg`, `image-2.jpg`, `image-3.jpg`, `image-4.jpg`],
		mapSrc: `https://www.google.com/maps?q=-21.2295595,-45.7603489&z=15&output=embed`,
		contact: `5535984244567`,
	},
	"mirante-do-lago-sgp": {
		nome: `Mirante do Lago`,
		cidade: `São Gonçalo do Pará`,
		descricaoHeader: `Loteamento com vista para a Lagoa da Bagagem com infraestrutura completa.`,
		conceito: `Desfrute de uma vista espetacular para a Lagoa da Bagagem no Mirante do Lago, em São Gonçalo do Pará. Este loteamento oferece uma combinação única de localização privilegiada, infraestrutura completa e contato direto com a natureza, proporcionando um ambiente ideal para viver e investir com qualidade.`,
		caracteristicas: [
			`Lotes a partir de 200m²`,
			`Infraestrutura completa`,
			`Localização privilegiada`,
			`Vista para a lagoa`,
			`Área verde`,
			`Parcelamento próprio com a Setminas`,
		],
		galeria: [
			`image-1.png`,
			`image-2.jpg`,
			`image-3.jpg`,
			`image-4.jpg`,
			`image-5.jpg`,
		],
		mapSrc: `https://www.google.com/maps?q=-19.9802149,-44.8434666&z=15&output=embed`,
		contact: `5535984244567`,
	},
	"mirante-da-serra": {
		nome: `Mirante da Serra`,
		cidade: `Itatiaiuçu`,
		descricaoHeader: `Empreendimento na região central da cidade com lotes amplos e vista panorâmica.`,
		conceito: `O Mirante da Serra, localizado na região central de Itatiaiuçu, oferece lotes amplos com uma vista panorâmica de tirar o fôlego. Com infraestrutura completa e área verde preservada, este empreendimento é a escolha ideal para quem busca uma vida tranquila e conectada à natureza, sem abrir mão da conveniência urbana.`,
		caracteristicas: [
			`Lotes a partir de 250m²`,
			`Infraestrutura completa`,
			`Vista panorâmica`,
			`Área verde preservada`,
			`Localização privilegiada`,
			`Parcelamento próprio com a Setminas`,
		],
		galeria: [`image-1.png`, `image-2.jpg`],
		mapSrc: `https://www.google.com/maps?q=-20.1976944,-44.4150556&z=15&output=embed`,
		contact: `5535984244567`,
	},
	"residencial-euroville": {
		nome: `Residencial Euroville`,
		cidade: `Alfenas`,
		descricaoHeader: `Loteamento fechado com segurança 24hs na melhor localização de Alfenas.`,
		conceito: `O Residencial Euroville, em Alfenas, oferece a combinação perfeita entre localização privilegiada e segurança. Situado próximo ao Hospital IMESA e ao centro da cidade, este loteamento fechado conta com portaria, segurança 24h e área de lazer. Você merece um lugar assim!`,
		caracteristicas: [
			`Lotes a partir de 300m²`,
			`Melhor localização de Alfenas`,
			`Infraestrutura completa`,
			`Área verde diferenciada`,
			`Parque Infantil`,
			`Segurança 24h`,
		],
		galeria: [
			`image-1.jpg`,
			`image-2.jpg`,
			`image-3.jpg`,
			`image-4.jpg`,
			`image-5.jpg`,
		],
		mapSrc: `https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3713.9751684883117!2d-45.964187!3d-21.430221!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b5f50ccca726a1%3A0x645556eb9dbd6249!2sResidencial%20Euroville!5e0!3m2!1sen!2sbr!4v1749513076588!5m2!1sen!2sbr`,
		contact: `5535984244567`,
	},
	"parque-tropical": {
		nome: `Parque Tropical`,
		cidade: `Passos`,
		descricaoHeader: `Mais que um projeto de arquitetura, um projeto de vida.`,
		conceito: `O Parque Tropical em Passos transcende o conceito de loteamento, apresentando-se como um verdadeiro projeto de vida. Com infraestrutura completa, ampla área verde e localização estratégica, este empreendimento, liberado para construir desde 2018, convida você a realizar seus planos em um ambiente pensado para o seu bem-estar.`,
		caracteristicas: [
			`Infraestrutura completa`,
			`Área verde`,
			`Localização estratégica`,
			`Liberado para construir em 2018`,
		],
		galeria: [`image-1.jpg`, `image-2.jpg`, `image-3.jpg`],
		mapSrc: `https://www.google.com/maps?q=-20.717775,-46.641746&z=15&output=embed`,
		contact: `5535984244567`,
	},
	"residencial-las-palmas": {
		nome: `Residencial Las Palmas`,
		cidade: `Pouso Alegre`,
		descricaoHeader: `Você nunca imaginou um lugar assim.`,
		conceito: `Prepare-se para se surpreender com o Residencial Las Palmas em Pouso Alegre, um condomínio fechado de luxo que redefine o conceito de morar bem. Com segurança 24 horas, lazer 5 estrelas e infraestrutura completa, este empreendimento, liberado para construir desde 2014, oferece uma experiência de vida única e sofisticada.`,
		caracteristicas: [
			`Condomínio fechado de luxo`,
			`Segurança 24 horas`,
			`Lazer 5 estrelas`,
			`Infraestrutura completa`,
			`Liberado para construir em 2014`,
		],
		galeria: [`image-1.jpg`, `image-2.jpg`, `image-3.jpg`, `image-4.jpg`],
		mapSrc: `https://www.google.com/maps?q=-22.235682,-45.894845&z=15&output=embed`,
		contact: `5535984244567`,
	},
	"jardim-aeroporto": {
		nome: `Jardim Aeroporto`,
		cidade: `Guaxupé`,
		descricaoHeader: `Loteamento acessível com toda infraestrutura completa e área verde.`,
		conceito: `O Jardim Aeroporto em Guaxupé é a escolha inteligente para quem busca um loteamento acessível com infraestrutura completa e generosa área verde. Com localização estratégica e liberado para construir desde 2017, este empreendimento oferece a base perfeita para você construir seu futuro com tranquilidade e segurança.`,
		caracteristicas: [
			`Infraestrutura completa`,
			`Área verde`,
			`Localização estratégica`,
			`Liberado para construir em 2017`,
		],
		galeria: [`image-1.jpg`, `image-2.jpg`, `image-3.jpg`],
		mapSrc: `https://www.google.com/maps?q=-21.322586,-46.732894&z=15&output=embed`,
		contact: `5535984244567`,
	},
};

type CaracteristicaItem = string | { text: string; icon: string };

// Função para obter o componente de ícone com base no texto da característica
const getIconComponentForItem = (item: CaracteristicaItem): React.ReactNode => {
	let iconPath: string;
	let itemText: string;

	if (typeof item === "string") {
		const iconKey = getIconKey(item);
		iconPath = featureIconPaths[iconKey] || featureIconPaths["default"];
		itemText = item;
	} else {
		// item is an object { text: string; icon: string }
		iconPath = `/icons/features/${item.icon}`; // Caminho para o ícone personalizado
		itemText = item.text;
	}

	return (
		<img
			src={iconPath}
			alt={`${itemText} icon`}
			width={24}
			height={24}
			className="mr-2 flex-shrink-0"
		/>
	);
};

// Componente da Página do Loteamento (agora Client Component)
export default function LoteamentoPage() {
	// Remove async and params prop
	const params = useParams(); // Use hook to get params
	const loteamentoId = params.loteamentoId as string; // Get ID from params object

	const loteamento = loteamentosData[loteamentoId];

	// Early return para loteamento não encontrado
	if (!loteamento) {
		return (
			<div className="container mx-auto px-4 py-12 text-center">
				<h1 className="text-3xl font-bold mb-4">
					Empreendimento não encontrado
				</h1>
				<p className="mb-8">
					O empreendimento que você está procurando não existe ou foi removido.
				</p>
				<Link
					href="/empreendimentos"
					className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
				>
					Ver todos os empreendimentos
				</Link>
			</div>
		);
	}

	// Retorno principal do JSX para loteamento encontrado
	return (
		<main className="min-h-screen bg-gray-50 py-12">
			<div className="container mx-auto px-4">
				{/* Header do Empreendimento */}
				<div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
					<div className="p-8 text-center">
						<div className="relative w-[250px] h-[125px] mx-auto mb-6">
							<LoteamentoLogo
								nome={loteamento.nome}
								loteamentoId={loteamentoId}
							/>
						</div>
						<h1 className="text-4xl font-bold text-[#0F3B7D] mb-2">
							{loteamento.nome}
						</h1>
						<div className="text-xl text-gray-600 mb-6">
							{loteamento.cidade}
						</div>
						<p className="text-gray-700 max-w-3xl mx-auto mb-8 text-lg">
							{loteamento.descricaoHeader}
						</p>
						<div className="flex justify-center space-x-4">
							<Link
								href={`https://wa.me/${loteamento.contact}?text=Olá, gostaria de saber mais sobre o loteamento ${loteamento.nome}.`}
								target="_blank"
								rel="noopener noreferrer"
								className="bg-[#0F3B7D] text-white px-8 py-3 rounded-md hover:bg-[#0D336B] transition-colors"
							>
								Solicitar Informações
							</Link>
						</div>
					</div>
				</div>

				{/* Conceito do Empreendimento */}
				<div className="bg-white rounded-lg shadow-lg p-8 mb-12">
					<div>
						<h2 className="text-2xl font-bold text-[#0F3B7D] mb-6">
							Conceito do Empreendimento
						</h2>
						<p className="text-gray-700 mb-6 whitespace-pre-line">
							{loteamento.conceito}
						</p>
						<h3 className="text-xl font-semibold text-[#0F3B7D] mb-4">
							Características
						</h3>
						<ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 text-[#0F3B7D]">
							{loteamento.caracteristicas.map((item, index) => (
								<li key={index} className="flex items-center text-gray-700">
									{getIconComponentForItem(item)}
									<span className="ml-3 text-gray-700">{item}</span>
								</li>
							))}
						</ul>
						<div className="bg-gray-50 p-6 rounded-lg">
							<h3 className="text-xl font-semibold text-[#0F3B7D] mb-4">
								Condições de Pagamento
							</h3>
							<p className="text-gray-700 mb-4">
								A Setminas oferece condições especiais de pagamento, com
								parcelamento e entrada facilitada.
							</p>
							<Link
								href={`https://wa.me/${loteamento.contact}?text=Olá, gostaria de saber mais sobre o loteamento ${loteamento.nome}.`}
								target="_blank"
								rel="noopener noreferrer"
								className="bg-[#0F3B7D] text-white px-6 py-2 rounded-md hover:bg-[#0D336B] transition-colors"
							>
								Solicitar Condições
							</Link>
						</div>
					</div>
				</div>

				{/* Carrossel de imagens */}
				<div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
					<div className="p-8">
						<h2 className="text-2xl font-bold text-[#0F3B7D] mb-6 text-center">
							Galeria de Imagens
						</h2>
						<ImageCarousel
							loteamento={loteamentoId}
							images={loteamento.galeria}
						/>
					</div>
				</div>

				{/* Localização com Mapa Embutido */}
				<div className="bg-white rounded-lg shadow-lg p-8 mb-12">
					<h2 className="text-2xl font-bold text-[#0F3B7D] mb-6 text-center">
						Localização
					</h2>
					<div className="aspect-w-16 aspect-h-9 mt-6">
						<iframe
							src={
								loteamento.mapSrc ||
								"https://www.google.com/maps?q=-20.9164856,-45.2796267&z=15&output=embed"
							} // Fallback para Campo Belo se mapSrc não existir
							width="100%"
							height="450"
							style={{ border: 0 }}
							allowFullScreen={true}
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							title={`Mapa de Localização - ${loteamento.nome}`}
						></iframe>
					</div>
				</div>

				{/* Chamada para Ação */}
				<div className="bg-[#0F3B7D] text-white rounded-lg shadow-lg p-12 text-center mb-12">
					<h2 className="text-3xl font-bold mb-4">
						Interessado no {loteamento.nome}?
					</h2>
					<p className="text-lg mb-8">
						Entre em contato conosco para saber mais detalhes e agendar uma
						visita.
					</p>
					<Link
						href="/contato#faleconosco"
						className="bg-white text-[#0F3B7D] px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
					>
						Fale Conosco
					</Link>
				</div>
			</div>
		</main>
	);
}
