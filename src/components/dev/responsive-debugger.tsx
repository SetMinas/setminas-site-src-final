// Utilitário para testar a responsividade do site em diferentes dispositivos
import { useEffect, useState } from 'react';

export function useResponsiveTest() {
  const [deviceInfo, setDeviceInfo] = useState({
    type: 'unknown',
    width: 0,
    height: 0,
    orientation: 'unknown'
  });

  useEffect(() => {
    // Função para detectar o tipo de dispositivo
    const detectDevice = () => {
      const width = window.innerWidth;
      let type = 'desktop';
      
      if (width < 640) {
        type = 'mobile';
      } else if (width < 1024) {
        type = 'tablet';
      }
      
      const orientation = width > window.innerHeight ? 'landscape' : 'portrait';
      
      setDeviceInfo({
        type,
        width: window.innerWidth,
        height: window.innerHeight,
        orientation
      });
    };

    // Detectar dispositivo inicialmente
    detectDevice();
    
    // Adicionar listener para redimensionamento
    window.addEventListener('resize', detectDevice);
    
    // Limpar listener ao desmontar
    return () => {
      window.removeEventListener('resize', detectDevice);
    };
  }, []);

  return deviceInfo;
}

// Componente para exibir informações de teste responsivo
export default function ResponsiveDebugger({ enabled = false }) {
  const deviceInfo = useResponsiveTest();
  
  if (!enabled) return null;
  
  return (
    <div className="fixed bottom-4 left-4 z-50 bg-white p-3 rounded-lg shadow-lg text-xs">
      <div className="font-bold mb-1">Responsive Debug</div>
      <div>Device: {deviceInfo.type}</div>
      <div>Size: {deviceInfo.width}x{deviceInfo.height}</div>
      <div>Orientation: {deviceInfo.orientation}</div>
    </div>
  );
}
