import Link from 'next/link';

export default function DifferentialsSection() {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">
          Por que escolher a Setminas?
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Diferencial 1 */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md text-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-blue-100 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 sm:h-8 sm:w-8 text-[#0F3B7D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">Financiamento Próprio</h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Condições facilitadas e financiamento direto com a Setminas, sem burocracia bancária.
            </p>
          </div>
          
          {/* Diferencial 2 */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md text-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-blue-100 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 sm:h-8 sm:w-8 text-[#0F3B7D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">Mais de 9 Anos de Experiência</h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Tradição e confiabilidade no mercado imobiliário de Minas Gerais.
            </p>
          </div>
          
          {/* Diferencial 3 */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md text-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-blue-100 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 sm:h-8 sm:w-8 text-[#0F3B7D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">Infraestrutura Completa</h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Loteamentos com toda infraestrutura necessária para você construir com tranquilidade.
            </p>
          </div>
          
          {/* Diferencial 4 */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md text-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-blue-100 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 sm:h-8 sm:w-8 text-[#0F3B7D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">Localizações Estratégicas</h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Empreendimentos em áreas com potencial de valorização e qualidade de vida.
            </p>
          </div>
        </div>
        
        <div className="text-center mt-8 md:mt-12">
          <Link 
            href="/contato" 
            className="inline-block bg-[#0F3B7D] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-md font-semibold hover:bg-blue-800 transition-colors text-sm sm:text-base"
          >
            Conheça Nossa História
          </Link>
        </div>
      </div>
    </section>
  );
}
