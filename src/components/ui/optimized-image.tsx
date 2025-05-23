// Componente para otimização de imagens
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  placeholder?: 'blur' | 'empty';
  quality?: number;
}

export default function OptimizedImage({ 
  src, 
  alt, 
  width, 
  height, 
  className = '', 
  priority = false,
  placeholder = 'blur',
  quality = 85
}: OptimizedImageProps) {
  const [blurDataUrl] = useState('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZTJlOGYwIj48L3JlY3Q+PC9zdmc+');
  
  // Simula o carregamento progressivo da imagem
  useEffect(() => {
    // Em produção, você pode gerar thumbnails reais ou usar uma API de blur hash
    // Este é apenas um placeholder simples para demonstração
  }, [src]);

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ width, height }}>
      <Image
        src={src}
        alt={alt}
        fill
        style={{ objectFit: 'cover' }}
        priority={priority}
        quality={quality}
        placeholder={placeholder}
        blurDataURL={blurDataUrl}
        sizes={`(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw`}
      />
    </div>
  );
}
