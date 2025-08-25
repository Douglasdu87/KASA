import { Link } from 'react-router-dom';
import './NotFound.scss';

const NotFound = () => {
  return (
    <main className="not-found">
      <div className="not-found-container">
        <h1 className="not-found-title">404</h1>
        <p className="not-found-message">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <Link to="/" className="not-found-link">
          Retourner sur la page d'accueil
        </Link>
      </div>
    </main>
  );
};

export default NotFound;

