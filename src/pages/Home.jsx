import { useState, useEffect } from 'react';
import Banner from '../components/Banner';
import Card from '../components/Card';
import accommodationsData from '../../logements.json';
import './Home.scss';

const Home = () => {
  const [accommodations, setAccommodations] = useState([]);

  useEffect(() => {
    setAccommodations(accommodationsData);
  }, []);

  return (
    <main className="home">
      <div className="home-container">
        <Banner 
          image="/src/assets/banner-home.png"
          text="Chez vous, partout et ailleurs"
        />
        
        <section className="accommodations-grid">
          {accommodations.map(accommodation => (
            <Card 
              key={accommodation.id} 
              accommodation={accommodation} 
            />
          ))}
        </section>
      </div>
    </main>
  );
};

export default Home;

