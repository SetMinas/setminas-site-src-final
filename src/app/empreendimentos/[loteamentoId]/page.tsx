"use client"; // Mark as Client Component

import React, { useEffect } from "react";
import { useParams } from "next/navigation"; // Import useParams hook
import LoteamentoLogo from "@/components/ui/loteamento-logo";
import Link from "next/link";
import ImageCarousel from "@/components/ui/image-carousel";
import { featureIconPaths, getIconKey } from "@/utils/featureIcons";
import {
	adsConversionContact,
	adsConversionAllotmentView,
} from "@/lib/googleAds";

import { ref, onValue } from "firebase/database";
import { database } from "@/lib/firebase";
import Spinner from "@/components/ui/spinner";

interface LoteamentoData {
	nome: string;
	cidade: string;
	descricaoHeader: string;
	conceito: string;
	caracteristicas: string[];
	galeria: string[];
	mapSrc?: string;
	contact: string;
	office?: string;
}

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

	const [loteamento, setLoteamento] = React.useState<LoteamentoData>();
	const [loading, setLoading] = React.useState<boolean>(true);

	useEffect(() => {
		const loteamentoRef = ref(database, `loteamentos/${loteamentoId}`);

		adsConversionAllotmentView({ page: loteamentoId });

		onValue(loteamentoRef, (snapshot) => {
			const data = snapshot.val();
			setLoteamento(data);
			setLoading(false);
		});
	}, [loteamentoId]);

	if (!loteamento) {
		return loading ? (
			<div className="container mx-auto px-4 py-12 text-center">
				<div className="flex items-center justify-center">
					<Spinner />
					Carregando...
				</div>
			</div>
		) : (
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
								onClick={() => adsConversionContact({ loteamentoId })}
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
						/>
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
					<p className="text-lg my-8">
						Ou venha conhecer o nosso escritório de vendas
					</p>
					<iframe
						src={
							loteamento.office ||
							"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7386.669920367668!2d-45.93580550839029!3d-22.227366377171123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cbc7b817053573%3A0xb5e64865ec8801f2!2sAv.%20Cel.%20Alfredo%20Cust%C3%B3dio%20de%20Paula%2C%20130%20-%20Santa%20Elisa%2C%20Pouso%20Alegre%20-%20MG%2C%2037550-000!5e0!3m2!1spt-BR!2sbr!4v1765224924852!5m2!1spt-BR!2sbr"
						}
						width="100%"
						height="300"
						style={{ border: 0 }}
						allowFullScreen={true}
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
						title={`Mapa de Localização do Escritório`}
					/>
				</div>
			</div>
		</main>
	);
}
