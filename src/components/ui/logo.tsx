import React from 'react';
import Image from 'next/image';

interface LogoProps {
  variant?: 'vertical' | 'horizontal';
  className?: string;
  width?: number;
  height?: number;
  isHeader?: boolean;
}

const Logo: React.FC<LogoProps> = ({ 
  variant = 'vertical', 
  className = '', 
  width, 
  height,
  isHeader = true
}) => {
  // Usando a nova imagem PNG do logo azul
  const logoSrc = '/images/logos/setminas_azul.png';
  
  const defaultWidth = variant === 'vertical' ? 200 : 250;
  const defaultHeight = variant === 'vertical' ? 50 : 60;
  
  return (
    <div className={`logo-container ${className}`}>
      <Image
        src={logoSrc}
        alt="Setminas"
        width={width || defaultWidth}
        height={height || defaultHeight}
        priority
        className="logo-image"
        style={{ objectFit: "contain" }}
      />
    </div>
  );
};

export default Logo;
