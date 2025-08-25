import { Star } from 'lucide-react';
import './Rating.scss';

const Rating = ({ rating, maxRating = 5 }) => {
  const stars = [];

  for (let i = 1; i <= maxRating; i++) {
    stars.push(
      <Star
        key={i}
        className={`rating-star ${i <= rating ? 'filled' : 'empty'}`}
        size={24}
        fill={i <= rating ? '#FF6060' : '#E3E3E3'}
      />
    );
  }

  return (
    <div className="rating" aria-label={`Note: ${rating} sur ${maxRating}`}>
      {stars}
    </div>
  );
};

export default Rating;

