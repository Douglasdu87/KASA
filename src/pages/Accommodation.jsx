import { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Gallery from '../components/Gallery';
import Collapse from '../components/Collapse';
import Rating from '../components/Rating';
import Tag from '../components/Tag';
import accommodationsData from '../../logements.json';
import './Accommodation.scss';

const Accommodation = () => {
  const { id } = useParams();
  const [accommodation, setAccommodation] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const foundAccommodation = accommodationsData.find(acc => acc.id === id);
    setAccommodation(foundAccommodation);
    setLoading(false);
  }, [id]);

  if (loading) {
    return <div>Chargement...</div>;
  }

  if (!accommodation) {
    return <Navigate to="/404" replace />;
  }

  return (
    <main className="accommodation">
      <div className="accommodation-container">
        <Gallery 
          images={accommodation.pictures} 
          title={accommodation.title}
        />
        
        <div className="accommodation-header">
          <div className="accommodation-info">
            <h1 className="accommodation-title">{accommodation.title}</h1>
            <p className="accommodation-location">{accommodation.location}</p>
            
            <div className="accommodation-tags">
              {accommodation.tags.map((tag, index) => (
                <Tag key={index}>{tag}</Tag>
              ))}
            </div>
          </div>
          
          <div className="accommodation-host">
            <div className="host-info">
              <span className="host-name">{accommodation.host.name}</span>
              <img 
                src={accommodation.host.picture} 
                alt={accommodation.host.name}
                className="host-picture"
              />
            </div>
            <Rating rating={parseInt(accommodation.rating)} />
          </div>
        </div>
        
        <div className="accommodation-details">
          <Collapse title="Description">
            <p>{accommodation.description}</p>
          </Collapse>
          
          <Collapse title="Équipements">
            <ul>
              {accommodation.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          </Collapse>
        </div>
      </div>
    </main>
  );
};

export default Accommodation;

