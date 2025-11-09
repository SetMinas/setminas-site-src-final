import Link from "next/link";
import Image from "next/image";

export default function LaunchesSection() {
	const homeLaunches = [
		{
			id: "alta-vista-park",
			nome: "Alta Vista Park",
			cidade: "São João Del Rei - MG",
			descricao: "Você no melhor bairro de São João Del Rei.",
			imagemUrl: "image-1.jpg",
			status: "Lançamento",
			tags: ["A partir de 249m²", "Infraestrutura Completa"],
		},
		{
			id: "parque-sao-judas-2",
			nome: "Parque São Judas 2ª fase",
			cidade: "Candeias - MG",
			descricao:
				"Última chance de comprar o seu lote na melhor localização de Candeias.",
			imagemUrl: "image-1.jpg",
			status: "Em Obras",
			tags: ["Loteamento Aberto", "A partir de 200m²"],
		},
		{
			id: "brasil-vilela-2",
			nome: "Brasil Vilela 2",
			cidade: "Campo Belo - MG",
			descricao: "Você morando no melhor bairro de Campo Belo.",
			imagemUrl: "image-1.jpg",
			status: "Em Obras",
			tags: ["Loteamento Aberto", "Infraestrutura Completa"],
		},
		// {
		// 	id: "parque-olimpico-3",
		// 	nome: "Parque Olímpico 3",
		// 	cidade: "Governador Valadares - MG",
		// 	descricao:
		// 		"Você na região que mais valoriza em Valadares com infraestrutura completa.",
		// 	imagemUrl: "image-1.png",
		// 	status: "Em Obras",
		// 	tags: ["Loteamento Aberto", "A partir de 200m²"],
		// },
	];

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
				return "bg-gray-500";
		}
	};

	return (
		<section className="py-12 md:py-16 bg-white">
			<div className="container mx-auto px-4">
				<h2 className="section-title">Lançamentos mais recentes</h2>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
					{homeLaunches.map((launch) => (
						<div
							key={launch.id}
							className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:transform hover:scale-105"
						>
							<div className="relative h-40 sm:h-48 bg-blue-100">
								<Image
									src={`/images/loteamentos/${launch.id}/${launch.imagemUrl}`}
									alt={launch.nome}
									fill
									className="absolute object-cover inset-0"
								/>
								{launch.status && (
									<div
										className={`absolute top-4 right-4 ${BadgeColor(
											launch.status
										)} text-white px-3 py-1 rounded-full text-xs sm:text-sm font-semibold`}
									>
										{launch.status}
									</div>
								)}
							</div>
							<div className="p-4 sm:p-6 text-center">
								<h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
									{launch.nome}
								</h3>
								<p className="text-gray-600 mb-3 sm:mb-4">{launch.cidade}</p>
								{launch.tags && (
									<div className="flex flex-wrap justify-center gap-2 mb-3 sm:mb-4">
										{launch.tags.map((tag) => (
											<span
												key={tag}
												className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs sm:text-sm"
											>
												{tag}
											</span>
										))}
									</div>
								)}
								<p className="text-gray-700 mb-4 text-sm sm:text-base text-center">
									{launch.descricao}
								</p>
								<Link
									href={`/empreendimentos/${launch.id}`}
									className="block w-full bg-[#0F3B7D] text-white text-center py-2 rounded hover:bg-blue-800 transition-colors text-sm sm:text-base"
								>
									Saiba Mais
								</Link>
							</div>
						</div>
					))}
				</div>

				<div className="text-center mt-8 md:mt-12">
					<Link
						href="/empreendimentos"
						className="inline-block bg-white border-2 border-[#0F3B7D] text-[#0F3B7D] px-6 sm:px-8 py-2 sm:py-3 rounded-md font-semibold hover:bg-blue-50 transition-colors text-sm sm:text-base"
					>
						Ver Todos os Empreendimentos
					</Link>
				</div>
			</div>
		</section>
	);
}
