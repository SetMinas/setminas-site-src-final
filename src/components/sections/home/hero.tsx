import Image from "next/image";
import Link from "next/link";

export default function Hero() {
	return (
		<section className="relative bg-gray-100 py-12 md:py-16 lg:py-24">
			<div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
				{/* Conteúdo de texto */}
				<div className="md:w-1/2 mb-10 md:mb-0 md:pr-10 text-center md:text-left">
					<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 md:mb-6">
						Seu Lugar ao Seu Alcance
					</h1>
					<p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8">
						A Setminas acredita que todos merecem ter seu próprio espaço para
						construir, investir e realizar. Por isso, desenvolvemos loteamentos
						acessíveis em diversas cidades de Minas Gerais, colocando seu espaço
						ao seu alcance com condições que respeitam seu orçamento e seus
						planos.
					</p>
					<p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8">
						Conheça a SETMINAS e confira nossos próximos LANÇAMENTOS.
					</p>
					<div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
						<Link href="/empreendimentos" className="btn-primary text-center">
							Ver Empreendimentos
						</Link>
						<Link
							href="/contato#faleconosco"
							className="btn-secondary text-center"
						>
							Fale Conosco
						</Link>
					</div>
				</div>

				{/* Logo da Setminas em vez do placeholder */}
				<div className="md:w-1/2 flex justify-end">
					<div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[30rem] lg:h-[30rem] flex items-center justify-center">
						<Image
							src="/images/logos/esfera_setminas.png"
							alt="Setminas Esfera"
							width={480}
							height={480}
							className="object-contain"
							priority
						/>
					</div>
				</div>
			</div>

			{/* Seta para baixo - visível apenas em telas maiores */}
			<div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 hidden md:block">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-8 w-8 md:h-10 md:w-10 text-[#0F3B7D] animate-bounce"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M19 14l-7 7m0 0l-7-7m7 7V3"
					/>
				</svg>
			</div>
		</section>
	);
}
