'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiSun, FiMoon, FiSearch, FiBookmark } from 'react-icons/fi';

const navigation = [
  { name: 'Início', href: '/' },
  { name: 'Artigos', href: '/artigos' },
  { name: 'Categorias', href: '/categorias' },
  { name: 'Sobre', href: '/sobre' },
  { name: 'Contato', href: '/contato' },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="header-container">
        <div className="logo">
          <Link href="/" className="logo-link">
            <span className="logo-text">Artigo</span>
            <span className="logo-highlight">List</span>
          </Link>
        </div>
        
        <nav className="main-nav">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link 
                key={item.name}
                href={item.href}
                className={`nav-link ${isActive ? 'active' : ''}`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
        
        <div className="header-actions">
          <button className="search-btn" aria-label="Pesquisar">
            <FiSearch size={20} />
          </button>
          <button className="theme-toggle" aria-label="Alternar tema">
            <FiSun className="sun-icon" size={20} />
            <FiMoon className="moon-icon" size={20} />
          </button>
          <button className="cta-button">
            <FiBookmark className="icon" size={16} />
            <span>Salvos</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;