import React from 'react';
import Image from 'next/image';

export default function TestimonialsSection() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">
          O que nossos clientes dizem
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Depoimento 1 */}
          <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-md relative">
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-[#0F3B7D] rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <p className="text-gray-600 italic mb-4 sm:mb-6 pt-4 text-sm sm:text-base">
              &ldquo;Comprar meu terreno na Setminas foi a melhor decisão que tomei. O processo foi simples, sem burocracia, e hoje tenho um patrimônio que valoriza a cada dia.&rdquo;
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-3 sm:mr-4 overflow-hidden">
                <Image 
                  src="/images/testimonials/carlos-silva.jpg" 
                  alt="Carlos Silva" 
                  width={48} 
                  height={48} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold text-gray-800 text-sm sm:text-base">Carlos Silva</h4>
                <p className="text-gray-600 text-xs sm:text-sm">Cliente desde 2020</p>
              </div>
            </div>
          </div>
          
          {/* Depoimento 2 */}
          <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-md relative">
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-[#0F3B7D] rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <p className="text-gray-600 italic mb-4 sm:mb-6 pt-4 text-sm sm:text-base">
              &ldquo;O financiamento direto com a Setminas foi o que tornou possível a realização do meu projeto. As parcelas cabem no meu orçamento e a infraestrutura do loteamento é excelente.&rdquo;
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-3 sm:mr-4 overflow-hidden">
                <Image 
                  src="/images/testimonials/ana-oliveira.jpg" 
                  alt="Ana Oliveira" 
                  width={48} 
                  height={48} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold text-gray-800 text-sm sm:text-base">Ana Oliveira</h4>
                <p className="text-gray-600 text-xs sm:text-sm">Cliente desde 2021</p>
              </div>
            </div>
          </div>
          
          {/* Depoimento 3 */}
          <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-md relative">
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-[#0F3B7D] rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <p className="text-gray-600 italic mb-4 sm:mb-6 pt-4 text-sm sm:text-base">
              &ldquo;Já construí minha casa no loteamento da Setminas e estou muito satisfeito. A localização é excelente e a valorização do imóvel superou minhas expectativas.&rdquo;
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-3 sm:mr-4 overflow-hidden">
                <Image 
                  src="/images/testimonials/roberto-mendes.jpg" 
                  alt="Roberto Mendes" 
                  width={48} 
                  height={48} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold text-gray-800 text-sm sm:text-base">Roberto Mendes</h4>
                <p className="text-gray-600 text-xs sm:text-sm">Cliente desde 2019</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
