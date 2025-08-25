import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Gallery.scss';

const Gallery = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  // Ne pas afficher les flèches s'il n'y a qu'une seule image
  const showArrows = images.length > 1;

  return (
    <div className="gallery">
      <img 
        src={images[currentIndex]} 
        alt={`${title} - ${currentIndex + 1}`}
        className="gallery-image"
      />
      
      {showArrows && (
        <>
          <button 
            className="gallery-arrow gallery-arrow--left"
            onClick={goToPrevious}
            aria-label="Image précédente"
          >
            <ChevronLeft size={32} />
          </button>
          
          <button 
            className="gallery-arrow gallery-arrow--right"
            onClick={goToNext}
            aria-label="Image suivante"
          >
            <ChevronRight size={32} />
          </button>
          
          <div className="gallery-counter">
            {currentIndex + 1}/{images.length}
          </div>
        </>
      )}
    </div>
  );
};

export default Gallery;

