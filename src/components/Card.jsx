import { Link } from 'react-router-dom';
import './Card.scss';

const Card = ({ accommodation }) => {
  return (
    <Link to={`/accommodation/${accommodation.id}`} className="card">
      <img 
        src={accommodation.cover} 
        alt={accommodation.title} 
        className="card-image" 
      />
      <div className="card-overlay">
        <h3 className="card-title">{accommodation.title}</h3>
      </div>
    </Link>
  );
};

export default Card;

