// Melhorar o carregamento de fontes
import { Inter, Montserrat } from 'next/font/google';

// Definir as fontes com subsets para otimização
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700'],
});

// Exportar as variáveis de fonte para uso global
export const fonts = {
  inter: inter.variable,
  montserrat: montserrat.variable,
};
