import './globals.css';
import { Inter } from 'next/font/google';
import { Header } from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Cadastro da Chuva',
  description: 'Sistema de dados pluviométricos',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} bg-[#0F172A] text-white`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
