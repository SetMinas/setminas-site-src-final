const loteamentos = [
	{
		id: "parque-sao-judas-2",
		nome: "Parque São Judas 2ª fase",
		cidade: "Candeias",
		descricao:
			"Última chance de comprar o seu lote na melhor localização de Candeias.",
		imagemUrl: "/images/loteamentos/Setminas_SaoJudasII_Fotomontagem_B_HR.jpg",
		status: "Lançamento",
        tags: ['Loteamento Aberto', 'A partir de 200m²']
	},
	{
		id: "brasil-vilela-2",
		nome: "Brasil Vilela 2",
		cidade: "Campo Belo",
		descricao: "Você morando no melhor bairro de Campo Belo.",
		imagemUrl: "/images/loteamentos/brasil-vilela-2_principal.jpg",
		status: "Lançamento",
        tags: ['Loteamento Aberto', 'Infraestrutura Completa'] 
	},
	{
		id: "parque-olimpico-3",
		nome: "Parque Olímpico 3",
		cidade: "Governador Valadares",
		descricao:
			"Você na região que mais valoriza em Valadares com infraestrutura completa.",
		imagemUrl: "/images/loteamentos/pq-olimpico-3_em-obras.png",
		status: "Em Obras",
        tags: ['Loteamento Aberto', 'A partir de 200m²']
	},
	{
		id: "parque-sao-judas",
		nome: "Parque São Judas",
		cidade: "Candeias",
		descricao:
			"Loteamento com localização estratégica, próximo ao centro da cidade.",
		imagemUrl: "/images/empreendimentos/pq_sao-judas.JPG",
		status: "Pronto para Construir",
	},
	{
		id: "parque-boulevard",
		nome: "Parque Boulevard",
		cidade: "Governador Valadares",
		descricao:
			"Loteamento com excelente topografia e localização, com infraestrutura completa.",
		imagemUrl: "/images/loteamentos/parque-boulevard_principal.jpg",
	},
	{
		id: "mirante-do-lago",
		nome: "Mirante do Lago",
		cidade: "Campo Belo",
		descricao:
			"Loteamento às margens do lago, oferecendo tranquilidade e contato com a natureza.",
		imagemUrl: "/images/empreendimentos/mirante_do_lago.png",
	},
	{
		id: "dom-couto",
		nome: "Dom Couto",
		cidade: "Formiga",
		descricao:
			"Investimento acessível com excelente localização e infraestrutura completa.",
		imagemUrl: "/images/empreendimentos/residencial_dom-couto.JPG",
	},
	{
		id: "mont-serrat",
		nome: "Mont Serrat",
		cidade: "Campos Gerais",
		descricao:
			"Loteamento fechado com infraestrutura completa, localizado em área privilegiada.",
		imagemUrl: "/images/empreendimentos/portaria_mont-serrat.jpg",
	},
	{
		id: "mirante-do-lago-sgp",
		nome: "Mirante do Lago",
		cidade: "São Gonçalo do Pará",
		descricao:
			"Loteamento com vista para a Lagoa da Bagagem com infraestrutura completa.",
		imagemUrl: "/images/loteamentos/mirante-do-lago_sao-goncalo-do-para.png",
		logoUrl: "/images/logos/mirante-do-lago_sao-goncalo.png", // Specific logo for this one
	},
	{
		id: "mirante-da-serra",
		nome: "Mirante da Serra",
		cidade: "Itatiaiuçu",
		descricao:
			"Empreendimento na região central da cidade com lotes amplos e vista panorâmica.",
		imagemUrl: "/images/empreendimentos/mirante-da-serra.png",
	},
	{
		id: "parque-tropical",
		nome: "Parque Tropical",
		cidade: "Passos",
		descricao: "Mais que um projeto de arquitetura, um projeto de vida.",
		imagemUrl: "/images/loteamentos/parque-tropical_principal.jpg",
	},
	{
		id: "residencial-las-palmas",
		nome: "Residencial Las Palmas",
		cidade: "Pouso Alegre",
		descricao: "Você nunca imaginou um lugar assim.",
		imagemUrl: "/images/loteamentos/residencial-las-palmas_principal.jpg",
	},
	{
		id: "jardim-aeroporto",
		nome: "Jardim Aeroporto",
		cidade: "Guaxupé",
		descricao:
			"Loteamento acessível com toda infraestrutura completa e área verde.",
		imagemUrl: "/images/loteamentos/jardim-aeroporto_principal.jpg",
	},
];

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
			`Financiamento próprio com a Setminas`,
			`Entrega totalmente pronta pela empreendedora`,
		],
		galeria: [
			"/images/loteamentos/Setminas_SaoJudasII_Fotomontagem_B_HR.jpg",
			"/images/loteamentos/parque-sao-judas-2/Setminas_SaoJudasII_Implantacao.jpg",
			"/images/loteamentos/parque-sao-judas-2/Setminas_SaoJudasII_Fotomontagem_C_R00.jpg",
			"/images/loteamentos/parque-sao-judas-2/Setminas_SaoJudasII_Fotomontagem_A_HR.jpg",
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
			`Financiamento próprio com a Setminas`,
			`Entrega totalmente pronta pela empreendedora`,
		],
		galeria: [
			`/images/loteamentos/brasil-vilela-2_principal.jpg`,
			`/images/empreendimentos/placeholder.jpg`,
			`/images/empreendimentos/placeholder.jpg`,
		],
		mapSrc: `https://www.google.com/maps?q=-20.901726,-45.287382&z=15&output=embed`,
		contact: `5535984244567`,
	},
	"parque-olimpico-3": {
		nome: `Parque Olímpico 3`,
		cidade: `Governador Valadares`,
		descricaoHeader: `Você na região que mais valoriza em Valadares com infraestrutura completa.`,
		conceito: `Invista no seu futuro com o Parque Olímpico 3, situado na região de maior valorização em Governador Valadares. Este loteamento oferece não apenas uma infraestrutura completa e áreas verdes, mas também a certeza de um patrimônio em constante crescimento, ideal para quem busca segurança e qualidade de vida.`,
		caracteristicas: [
			`Lotes a partir de 200m²`,
			`Região de alta valorização`,
			`Infraestrutura completa`,
			`Área verde`,
			`Financiamento próprio com a Setminas`,
		],
		galeria: [
			`/images/loteamentos/pq-olimpico-3_em-obras.png`,
			`/images/carrossel/placeholder4.jpg`,
			`/images/carrossel/placeholder5.jpg`,
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
			`Financiamento próprio com a Setminas`,
		],
		galeria: [
			`/images/loteamentos/mirante-do-lago_sao-goncalo-do-para.png`,
			`/images/carrossel/pq_sao-judas.JPG`,
			`/images/carrossel/Setminas_SaoJudasII_Fotomontagem_B_HR.jpg`,
		],
		mapSrc: `https://www.google.com/maps?q=-20.7779220,-45.2795167&z=15&output=embed`,
		contact: `5535984244567`,
	},
	"parque-boulevard": {
		nome: `Parque Boulevard`,
		cidade: `Governador Valadares`,
		descricaoHeader: `Loteamento com excelente topografia e localização, com infraestrutura completa.`,
		conceito: `O Parque Boulevard em Governador Valadares é a escolha perfeita para quem valoriza uma excelente topografia e localização privilegiada. Com lotes amplos e infraestrutura completa, este empreendimento foi concebido para proporcionar uma experiência de moradia superior, aliando conforto, conveniência e potencial de valorização.`,
		caracteristicas: [
			`Lotes a partir de 300m²`,
			`Infraestrutura completa`,
			`Localização nobre`,
			`Área verde diferenciada`,
			`Financiamento próprio com a Setminas`,
			`Entrega totalmente pronta pela empreendedora`,
		],
		galeria: [
			`/images/loteamentos/parque-boulevard_principal.jpg`,
			`/images/empreendimentos/placeholder.jpg`,
			`/images/empreendimentos/placeholder.jpg`,
		],
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
			`Financiamento próprio com a Setminas`,
		],
		galeria: [
			`/images/carrossel/mirante_do_lago.png`,
			`/images/carrossel/DJI_0318.JPG`,
			`/images/carrossel/pq_sao-judas.JPG`,
		],
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
			`Financiamento próprio com a Setminas`,
		],
		galeria: [
			`/images/carrossel/residencial_dom-couto.JPG`,
			`/images/carrossel/DJI_0318.JPG`,
			`/images/carrossel/pq_sao-judas.JPG`,
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
			`Financiamento próprio com a Setminas`,
		],
		galeria: [
			`/images/carrossel/portaria_mont-serrat.jpg`,
			`/images/carrossel/DJI_0318.JPG`,
			`/images/carrossel/pq_sao-judas.JPG`,
		],
		mapSrc: `https://www.google.com/maps?q=-21.2295595,-45.7603489&z=15&output=embed`,
		contact: `5535984244567`,
	},
	"mirante-do-lago-sgp": {
		nome: `Mirante do Lago`,
		cidade: `São Gonçalo do Pará`,
		descricaoHeader: `Loteamento com vista para a Lagoa da Bagagem com infraestrutura completa.`,
		conceito: `Desfrute de uma vista espetacular para a Lagoa da Bagagem no Mirante do Lago, em São Gonçalo do Pará. Este loteamento oferece uma combinação única de localização privilegiada, infraestrutura completa e contato direto com a natureza, proporcionando um ambiente ideal para viver e investir com qualidade.`,
		caracteristicas: [
			`Lotes a partir de 300m²`,
			`Infraestrutura completa`,
			`Localização privilegiada`,
			`Vista para a lagoa`,
			`Área verde`,
			`Financiamento próprio com a Setminas`,
		],
		galeria: [
			`/images/loteamentos/mirante-do-lago_sao-goncalo-do-para.png`,
			`/images/carrossel/placeholder_sgp1.jpg`,
			`/images/carrossel/placeholder_sgp2.jpg`,
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
			`Financiamento próprio com a Setminas`,
		],
		galeria: [
			`/images/carrossel/mirante-da-serra.png`,
			`/images/carrossel/DJI_0318.JPG`,
			`/images/carrossel/pq_sao-judas.JPG`,
		],
		mapSrc: `https://www.google.com/maps?q=-20.1976944,-44.4150556&z=15&output=embed`,
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
		galeria: [
			`/images/loteamentos/parque-tropical_principal.jpg`,
			`/images/empreendimentos/placeholder.jpg`,
			`/images/empreendimentos/placeholder.jpg`,
		],
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
		galeria: [
			`/images/loteamentos/residencial-las-palmas_principal.jpg`,
			`/images/empreendimentos/placeholder.jpg`,
			`/images/empreendimentos/placeholder.jpg`,
		],
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
		galeria: [
			`/images/loteamentos/jardim-aeroporto_principal.jpg`,
			`/images/empreendimentos/placeholder.jpg`,
			`/images/empreendimentos/placeholder.jpg`,
		],
		mapSrc: `https://www.google.com/maps?q=-21.322586,-46.732894&z=15&output=embed`,
		contact: `5535984244567`,
	},
};