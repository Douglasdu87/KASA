import './Banner.scss';

const Banner = ({ image, text, className = '' }) => {
  return (
    <div className={`banner ${className}`}>
      <img src={image} alt="" className="banner-image" />
      {text && (
        <div className="banner-overlay">
          <h1 className="banner-text">{text}</h1>
        </div>
      )}
    </div>
  );
};

export default Banner;

