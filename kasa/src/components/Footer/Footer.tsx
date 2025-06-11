import React from 'react';
import './Footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <img src="/logo-kasa-white.png" alt="Kasa" className="footer__logo" />
        <p className="footer__text">© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;