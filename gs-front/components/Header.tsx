'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Header = () => {
  const pathname = usePathname();

  const navItems = [
    { name: 'Início', href: '/' },
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Registrar', href: '/registrar' },
    { name: 'Integrantes', href: '/Integrantes' },
    { name: 'Ajuda', href: '/ajuda' },
  ];

  return (
    <header className="bg-[#020617] border-b border-[#1E293B]">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <span className="font-bold text-white">🌧️ Cadastro da Chuva</span>
        </div>
        <nav className="flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${
                pathname === item.href
                  ? 'text-blue-500 font-semibold'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};
