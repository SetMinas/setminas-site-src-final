"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import { ref, onValue } from "firebase/database";
import { database } from "@/lib/firebase";

import { LoteamentoType } from "@/data/empreendimentos/loteamentoType";
import Spinner from "@/components/ui/spinner";

interface Loteamento {
	id: string;
	nome: string;
	cidade: string;
	descricao: string;
	imagemUrl: string;
	status: string;
	index: number;
}

const EmpreendimentosPage: React.FC = () => {
	const [loteamentos, setLoteamentos] = React.useState<Loteamento[]>([]);
	const BadgeColor = (status: string): string => {
		switch (status) {
			case "Breve Lançamento":
				return "bg-orange-500";
			case "Lançamento":
				return "bg-purple-500";
			case "Em Obras":
				return "bg-blue-500";
			case "Pronto para Construir":
				return "bg-green-500";
			default:
				return "bg-gray-500"; // Default color for other statuses
		}
	};

	React.useEffect(() => {
		const loteamentoRef = ref(database, "loteamentos/");

		const unsubscribe = onValue(loteamentoRef, (snapshot) => {
			const data = snapshot.val();

			if (!data) {
				setLoteamentos([]);
				return;
			}

			const lista: Loteamento[] = Object.entries(data).map(([key, value]) => {
				const loteamento = value as LoteamentoType;

				return {
					id: key,
					nome: loteamento.nome,
					cidade: loteamento.cidade,
					descricao: loteamento.descricao,
					imagemUrl: loteamento.galeria[0],
					status: loteamento.status,
					index: loteamento.index,
				};
			});

			setLoteamentos(lista.sort((a, b) => b.index - a.index));
		});

		return () => {
			unsubscribe();
		};
	}, []);

	return (
		<main className="min-h-screen bg-gray-50 py-12">
			<div className="container mx-auto px-4">
				<h1 className="text-4xl font-bold text-center mb-12 text-[#0F3B7D]">
					Nossos Empreendimentos
				</h1>

				{loteamentos.length > 0 ? (
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{loteamentos.map((loteamento) => {
							const logoMap: Record<string, string> = {
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

							const logoSrc =
								logoMap[loteamento.id] ||
								"/images/empreendimentos/placeholder.jpg";
							const isSvg = logoSrc.endsWith(".svg");
							let logoContainerClass =
								"relative h-28 flex items-center justify-center mb-4 overflow-hidden";
							let imageClass = "object-contain";

							if (
								["jardim-aeroporto", "residencial-las-palmas"].includes(
									loteamento.id
								)
							) {
								logoContainerClass += " w-2/3 mx-auto";
							}

							return (
								<div
									key={loteamento.id}
									className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
								>
									<div className="relative h-48">
										<Image
											src={`/images/loteamentos/${loteamento.id}/${loteamento.imagemUrl}`}
											alt={`${loteamento.nome} - ${loteamento.cidade}`}
											width={400}
											height={192}
											className="object-cover w-full h-full"
											unoptimized={loteamento.imagemUrl?.endsWith(".gif")} // Exemplo se gifs fossem usados
										/>
										{loteamento.status && (
											<div
												className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold text-white ${BadgeColor(
													loteamento.status
												)}`}
											>
												{loteamento.status}
											</div>
										)}
									</div>
									<div className="p-6 flex flex-col flex-grow">
										<div className="flex-grow">
											<div className={logoContainerClass}>
												{isSvg ? (
													<img
														src={`/images/logos/${logoSrc}`}
														alt={`Logo ${loteamento.nome}`}
														className={`w-full h-full ${imageClass}`}
													/>
												) : (
													<Image
														src={`/images/logos/${logoSrc}`}
														alt={`Logo ${loteamento.nome}`}
														fill
														className={imageClass}
														unoptimized={logoSrc.endsWith(".gif")}
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
											<Link
												href={`/empreendimentos/${loteamento.id}`}
												className="bg-[#0F3B7D] text-white px-6 py-2 rounded-md hover:bg-[#0D336B] transition-colors inline-block"
											>
												Ver Detalhes
											</Link>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				) : (
					<div className="flex items-center justify-center">
						<Spinner />
						Carregando...
					</div>
				)}
			</div>
		</main>
	);
};

export default EmpreendimentosPage;
