import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="bg-slate-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center">
            <Image
              src="https://wnujoyzdpdyxblgdtxjw.supabase.co/storage/v1/object/public/gorilla-assets/gorilla-labs/logo-piscina-vector.png?v=1775492299459"
              alt="Logo"
              width={40}
              height={40}
            />
            <span className="ml-2 font-bold text-xl">ZEUS</span>
          </a>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/">
                <a>Inicio</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Dashboard</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}