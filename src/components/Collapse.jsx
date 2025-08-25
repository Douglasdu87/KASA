import { useState } from 'react';
import { ChevronUp } from 'lucide-react';
import './Collapse.scss';

const Collapse = ({ title, children, className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`collapse ${className}`}>
      <button 
        className="collapse-header" 
        onClick={toggleCollapse}
        aria-expanded={isOpen}
      >
        <span className="collapse-title">{title}</span>
        <ChevronUp 
          className={`collapse-icon ${isOpen ? 'open' : ''}`}
          size={24}
        />
      </button>
      <div className={`collapse-content ${isOpen ? 'open' : ''}`}>
        <div className="collapse-body">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Collapse;

