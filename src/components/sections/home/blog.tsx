import Link from "next/link";
import Image from "next/image";

export default function BlogSection() {
	const homeBlog = [
		{
			slug: "uberlândia-anuncia-construção-de-2400-casas-do-minha-casa-minha-vida",
			title:
				"Uberlândia Anuncia Construção de 2.400 Casas do Minha Casa Minha Vida",
			excerpt:
				"A Prefeitura de Uberlândia anunciou a construção de 2.400 novas residências pelo programa Minha Casa Minha Vida, com obras previstas para iniciar no primeiro semestre de 2026.",
			content:
				"**Relevância:** Notícia regional que demonstra a aplicação prática do programa habitacional e o aquecimento do setor de construção civil em uma das principais cidades do estado.\n\n**Resumo:** A Prefeitura de Uberlândia anunciou a construção de 2.400 novas residências pelo programa Minha Casa Minha Vida. As obras, previstas para iniciar no primeiro semestre de 2026, serão realizadas pela Pacaembu Construtora em uma área de 1,4 milhão de metros quadrados. Os imóveis serão financiados pela Caixa Econômica Federal para famílias aptas e cadastradas no município e no programa.\n\n**Fonte:** https://g37.com.br/artigos/uberlandia-tera-24-mil-casas-do-minha-casa/",
			date: "2025-11-14",
			coverImage:
				"https://files.manuscdn.com/user_upload_by_module/session_file/310419663029208967/yBNeYlcMWpCHwSnf.webp",
		},
		{
			slug: "governo-federal-propõe-elevação-do-teto-do-minha-casa-minha-vida",
			title: "Governo Federal Propõe Elevação do Teto do Minha Casa Minha Vida",
			excerpt:
				"O Governo Federal propôs elevar o valor máximo do imóvel a ser financiado pelo programa Minha Casa Minha Vida (MCMV) para as faixas de renda mais baixas. O limite pode subir para até R$ 275 mil.",
			content:
				"**Relevância:** Notícia de impacto nacional com reflexos diretos no mercado imobiliário de Minas Gerais, especialmente no segmento de baixa renda.\n\n**Resumo:** O Governo Federal propôs elevar o valor máximo do imóvel a ser financiado pelo programa Minha Casa Minha Vida (MCMV) para as faixas de renda mais baixas. O limite pode subir para até R$ 275 mil, dependendo do município, para famílias com renda bruta de até R$ 4.700,00 por mês. Atualmente, o teto é de R$ 264 mil. A medida visa adequar o programa ao aumento dos custos da construção civil e ampliar as possibilidades de contratação nas Faixas 1 e 2.\n\n**Fonte:** https://g1.globo.com/economia/noticia/2025/11/11/governo-deve-elevar-teto-de-imovel-para-faixas-mais-baixas-do-minha-casa-minha-vida-limite-pode-subir-para-ate-r-275-mil.ghtml",
			date: "2025-11-11",
			coverImage:
				"https://files.manuscdn.com/user_upload_by_module/session_file/310419663029208967/eSZLpAoqnSeluoXl.jpg",
		},
		{
			slug: "impasse-na-almg-sobre-a-lista-de-imóveis-do-propag",
			title: "Impasse na ALMG sobre a Lista de Imóveis do Propag",
			excerpt:
				"A lista com mais de 200 imóveis que o Governo de Minas Gerais pretende vender ou transferir à União, no âmbito do Programa de Pleno Pagamento de Dívidas dos Estados (Propag), segue em discussão na Assembleia Legislativa de Minas Gerais (ALMG).",
			content:
				"**Relevância:** Assunto de grande importância política e econômica para o estado, envolvendo a dívida de Minas Gerais com a União e a potencial venda de patrimônio público.\n\n**Resumo:** A lista com mais de 200 imóveis que o Governo de Minas Gerais pretende vender ou transferir à União, no âmbito do Programa de Pleno Pagamento de Dívidas dos Estados (Propag), segue em discussão na Assembleia Legislativa de Minas Gerais (ALMG). O parecer da Comissão de Fiscalização Financeira e Orçamentária (FFO) é a última etapa antes da votação em plenário. A lista original foi reduzida após pressão, com a exclusão de imóveis de valor simbólico como a sede da Emater-MG e o Parque das Águas de Caxambu. Deputados ainda estudam novas exclusões, como o Palácio das Artes e a Cidade Administrativa, e questionam a falta de avaliação de mercado dos bens.\n\n**Fonte:** https://www.em.com.br/politica/2025/11/7290329-lista-de-imoveis-do-propag-aguarda-parecer-em-comissao-na-assembleia.html",
			date: "2025-11-11",
			coverImage:
				"https://files.manuscdn.com/user_upload_by_module/session_file/310419663029208967/VxNXmKLzLTQjSRUp.jpg",
		},
	];

	return (
		<section className="py-12 md:py-16 bg-white">
			<div className="container mx-auto px-4">
				<h2 className="section-title">Posts mais recentes do Blog</h2>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
					{homeBlog.map((post) => (
						<div
							key={post.slug}
							className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:transform hover:scale-105"
						>
							<div className="relative h-40 sm:h-48 bg-blue-100">
								<Image
									src={post.coverImage}
									alt={post.title}
									fill
									className="absolute object-cover inset-0"
								/>
							</div>
							<div className="p-4 sm:p-6 text-center">
								<h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
									{post.title}
								</h3>
								<p className="text-gray-600 mb-3 sm:mb-4">
									{new Date(post.date).toLocaleDateString("pt-BR")}
								</p>
								<p className="text-gray-700 mb-4 text-sm sm:text-base text-center">
									{post.excerpt}
								</p>
								<Link
									href={`/blog/${post.slug}`}
									className="block w-full bg-[#0F3B7D] text-white text-center py-2 rounded hover:bg-blue-800 transition-colors text-sm sm:text-base"
								>
									Ler mais →
								</Link>
							</div>
						</div>
					))}
				</div>

				<div className="text-center mt-8 md:mt-12">
					<Link
						href="/blog"
						className="inline-block bg-white border-2 border-[#0F3B7D] text-[#0F3B7D] px-6 sm:px-8 py-2 sm:py-3 rounded-md font-semibold hover:bg-blue-50 transition-colors text-sm sm:text-base"
					>
						Ver Todos os Posts
					</Link>
				</div>
			</div>
		</section>
	);
}
