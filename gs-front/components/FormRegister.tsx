import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Sidebar = () => {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    `hover:text-primary ${
      pathname === path ? 'text-primary font-semibold' : 'text-grayText'
    }`;

  return (
    <aside className="w-64 bg-white shadow-md h-full p-6">
      <nav className="flex flex-col gap-6">
        <Link href="/dashboard" className={linkClass('/dashboard')}>
          Dashboard
        </Link>
        <Link href="/" className={linkClass('/')}>
          Logout
        </Link>
      </nav>
    </aside>
  );
};
