import { ReactNode } from 'react';
import Header from '@/components/ui/header';
import Footer from '@/components/ui/footer';
import './globals.css';

export const metadata = {
  title: 'Setminas - Seu Lugar ao Seu Alcance',
  description: 'Há mais de 16 anos desenvolvendo loteamentos de qualidade em Minas Gerais.',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
