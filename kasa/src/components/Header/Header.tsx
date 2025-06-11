import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.scss';

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <Link to="/" className="header__logo">
            <img src="/logo-kasa.png" alt="Kasa" />
          </Link>
          <nav className="header__nav">
            <Link 
              to="/" 
              className={`header__nav-link ${location.pathname === '/' ? 'active' : ''}`}
            >
              Accueil
            </Link>
            <Link 
              to="/about" 
              className={`header__nav-link ${location.pathname === '/about' ? 'active' : ''}`}
            >
              A Propos
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;