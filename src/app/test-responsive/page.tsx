"use client";

import { useEffect } from 'react';
import ResponsiveDebugger from '@/components/dev/responsive-debugger';
import { fonts } from '@/lib/fonts';

export default function TestResponsivePage() {
  // Simular diferentes tamanhos de tela
  const screenSizes = [
    { name: 'Mobile (Small)', width: 320, height: 568 },
    { name: 'Mobile (Medium)', width: 375, height: 667 },
    { name: 'Mobile (Large)', width: 414, height: 736 },
    { name: 'Tablet', width: 768, height: 1024 },
    { name: 'Laptop', width: 1366, height: 768 },
    { name: 'Desktop', width: 1920, height: 1080 },
  ];

  // Componentes do site para testar
  const componentsToTest = [
    { name: 'Header', id: 'header' },
    { name: 'Hero Section', id: 'hero' },
    { name: 'Lançamentos', id: 'launches' },
    { name: 'Diferenciais', id: 'differentials' },
    { name: 'Depoimentos', id: 'testimonials' },
    { name: 'Formulário de Contato', id: 'contact-form' },
    { name: 'Footer', id: 'footer' },
  ];

  // Verificar problemas comuns de responsividade
  useEffect(() => {
    const checkResponsiveIssues = () => {
      // Verificar overflow horizontal
      const bodyWidth = document.body.offsetWidth;
      const windowWidth = window.innerWidth;
      
      if (bodyWidth > windowWidth) {
        console.warn('Possível overflow horizontal detectado');
        
        // Encontrar elementos que causam overflow
        const allElements = document.querySelectorAll('*');
        allElements.forEach(element => {
          const rect = element.getBoundingClientRect();
          if (rect.width > windowWidth) {
            console.warn('Elemento causando overflow:', element);
          }
        });
      }
      
      // Verificar tamanho de fonte muito pequeno
      const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, a, button');
      textElements.forEach(element => {
        const fontSize = window.getComputedStyle(element).fontSize;
        if (parseFloat(fontSize) < 12) {
          console.warn('Texto muito pequeno detectado:', element, fontSize);
        }
      });
      
      // Verificar elementos sobrepostos
      // Implementação simplificada - em um caso real, seria mais complexo
      const clickableElements = document.querySelectorAll('a, button, [role="button"]');
      clickableElements.forEach(element => {
        const rect1 = element.getBoundingClientRect();
        clickableElements.forEach(otherElement => {
          if (element !== otherElement) {
            const rect2 = otherElement.getBoundingClientRect();
            if (!(rect1.right < rect2.left || 
                rect1.left > rect2.right || 
                rect1.bottom < rect2.top || 
                rect1.top > rect2.bottom)) {
              console.warn('Possível sobreposição de elementos clicáveis:', element, otherElement);
            }
          }
        });
      });
    };
    
    // Executar verificação após carregamento completo
    window.addEventListener('load', checkResponsiveIssues);
    
    return () => {
      window.removeEventListener('load', checkResponsiveIssues);
    };
  }, []);

  return (
    <main className={`min-h-screen bg-gray-100 ${fonts.montserrat} ${fonts.inter}`}>
      <ResponsiveDebugger enabled={true} />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Teste de Responsividade - Setminas</h1>
        
        {/* Seletor de tamanho de tela */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Tamanhos de Tela</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {screenSizes.map((size) => (
              <div 
                key={size.name}
                className="bg-white p-4 rounded-lg shadow-md text-center cursor-pointer hover:bg-blue-50"
                onClick={() => {
                  window.open(`/test-responsive?width=${size.width}&height=${size.height}`, 
                              'responsive_test', 
                              `width=${size.width},height=${size.height}`);
                }}
              >
                <div className="font-medium">{size.name}</div>
                <div className="text-sm text-gray-500">{size.width}x{size.height}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Checklist de componentes */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Componentes para Testar</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">Componente</th>
                  <th className="text-center py-2">Mobile</th>
                  <th className="text-center py-2">Tablet</th>
                  <th className="text-center py-2">Desktop</th>
                  <th className="text-left py-2">Observações</th>
                </tr>
              </thead>
              <tbody>
                {componentsToTest.map((component) => (
                  <tr key={component.id} className="border-b">
                    <td className="py-3">{component.name}</td>
                    <td className="text-center">
                      <input type="checkbox" className="h-5 w-5" />
                    </td>
                    <td className="text-center">
                      <input type="checkbox" className="h-5 w-5" />
                    </td>
                    <td className="text-center">
                      <input type="checkbox" className="h-5 w-5" />
                    </td>
                    <td>
                      <input 
                        type="text" 
                        className="w-full px-2 py-1 border rounded" 
                        placeholder="Adicionar observações..."
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Verificações de acessibilidade */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Verificações de Acessibilidade</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="space-y-4">
              <div className="flex items-start">
                <input type="checkbox" className="h-5 w-5 mt-1 mr-3" />
                <div>
                  <div className="font-medium">Contraste de cores adequado</div>
                  <div className="text-sm text-gray-500">Verificar se o texto tem contraste suficiente com o fundo</div>
                </div>
              </div>
              
              <div className="flex items-start">
                <input type="checkbox" className="h-5 w-5 mt-1 mr-3" />
                <div>
                  <div className="font-medium">Tamanho de fonte legível</div>
                  <div className="text-sm text-gray-500">Texto deve ter no mínimo 16px em dispositivos móveis</div>
                </div>
              </div>
              
              <div className="flex items-start">
                <input type="checkbox" className="h-5 w-5 mt-1 mr-3" />
                <div>
                  <div className="font-medium">Áreas clicáveis adequadas</div>
                  <div className="text-sm text-gray-500">Botões e links devem ter pelo menos 44x44px em dispositivos touch</div>
                </div>
              </div>
              
              <div className="flex items-start">
                <input type="checkbox" className="h-5 w-5 mt-1 mr-3" />
                <div>
                  <div className="font-medium">Navegação por teclado</div>
                  <div className="text-sm text-gray-500">Todos os elementos interativos devem ser acessíveis via teclado</div>
                </div>
              </div>
              
              <div className="flex items-start">
                <input type="checkbox" className="h-5 w-5 mt-1 mr-3" />
                <div>
                  <div className="font-medium">Atributos alt em imagens</div>
                  <div className="text-sm text-gray-500">Todas as imagens devem ter descrições alternativas</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Botões de ação */}
        <div className="flex justify-center space-x-4">
          <button className="bg-green-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-600 transition-colors">
            Salvar Resultados
          </button>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-600 transition-colors">
            Gerar Relatório
          </button>
        </div>
      </div>
    </main>
  );
}
