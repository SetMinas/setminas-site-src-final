// Componente para testar responsividade em diferentes dispositivos
import { useState } from 'react';

export default function ResponsiveTester() {
  const [device, setDevice] = useState('desktop');
  
  const devices = {
    mobile: { width: '375px', height: '667px' },
    tablet: { width: '768px', height: '1024px' },
    desktop: { width: '100%', height: '100%' },
  };
  
  return (
    <div className="fixed bottom-4 right-4 z-50 bg-white p-4 rounded-lg shadow-lg">
      <div className="flex space-x-2 mb-2">
        <button
          onClick={() => setDevice('mobile')}
          className={`px-3 py-1 rounded ${device === 'mobile' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Mobile
        </button>
        <button
          onClick={() => setDevice('tablet')}
          className={`px-3 py-1 rounded ${device === 'tablet' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Tablet
        </button>
        <button
          onClick={() => setDevice('desktop')}
          className={`px-3 py-1 rounded ${device === 'desktop' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Desktop
        </button>
      </div>
      <div className="text-xs text-gray-500">
        Visualizando em: {device.charAt(0).toUpperCase() + device.slice(1)}
      </div>
    </div>
  );
}
