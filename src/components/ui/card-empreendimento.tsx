import Image from 'next/image';
import Link from 'next/link';

interface CardEmpreendimentoProps {
  titulo: string;
  cidade: string;
  tipo: string;
  tamanho: string;
  descricao: string;
  status: string;
  slug: string;
  imagemUrl?: string;
}

export default function CardEmpreendimento({ 
  titulo, 
  cidade, 
  tipo, 
  tamanho, 
  descricao, 
  status, 
  slug,
  imagemUrl = '/images/empreendimentos/placeholder.jpg'
}: CardEmpreendimentoProps) {
  // Definir cor do status
  const getStatusColor = (status: string): string => {
    switch(status) {
      case 'Breve Lançamento':
        return 'bg-orange-500';
      case 'Lançamento':
        return 'bg-green-500';
      case 'Em Obras':
        return 'bg-blue-500';
      case 'Pronto':
        return 'bg-purple-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:transform hover:scale-105">
      <div className="relative h-48 bg-blue-100">
        {/* Imagem do empreendimento com fallback para placeholder */}
        <Image
          src={imagemUrl}
          alt={`${titulo} - ${cidade}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          priority={false}
          onError={(e) => {
            // Fallback para placeholder se a imagem não carregar
            const target = e.currentTarget as HTMLImageElement;
            target.src = '/images/empreendimentos/placeholder.jpg';
          }}
        />
        <div className={`absolute top-4 right-4 ${getStatusColor(status)} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
          {status}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{titulo}</h3>
        <p className="text-gray-600 mb-4">{cidade}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">{tipo}</span>
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">{tamanho}</span>
        </div>
        <p className="text-gray-700 mb-4">
          {descricao}
        </p>
        <Link 
          href={`/empreendimentos/${slug}`}
          className="block w-full bg-[#0F3B7D] text-white text-center py-2 rounded hover:bg-blue-800 transition-colors"
        >
          Saiba Mais
        </Link>
      </div>
    </div>
  );
}
