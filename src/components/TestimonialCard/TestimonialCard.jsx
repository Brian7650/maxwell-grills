import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft} from '@fortawesome/free-solid-svg-icons';
import './TestimonialCard.css'

const TestimonialCard = ({ text, imgSrc, clientName, profession }) => {
  return (
    <div className="testimonial-item border rounded p-4 " >

      <FontAwesomeIcon className=" fa-3x mb-3" icon={faQuoteLeft} />
      <p className='test-text'>{text}</p>
      <div className="d-flex align-items-center">
        <img
          className="img-fluid flex-shrink-0 rounded-circle"
          src={imgSrc}
          style={{ width: '50px', height: '50px' }}
          alt="Client"
        />
        <div className="ps-3">
          <h5 className="mb-1">{clientName}</h5>
          <small className='test-text' >{profession}</small>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;