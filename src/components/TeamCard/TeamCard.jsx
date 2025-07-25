import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './TeamCard.css';

const TeamCard = ({ name, designation, imageUrl, socialLinks, delay }) => {
  return (


<div className={`col-lg-3 col-md-6 animate__animated animate__fadeInUpBig`} style={{ animationDelay: delay }}>
<div className="team-item text-center rounded overflow-hidden">
<div className="rounded-circle overflow-hidden m-4">
      <img className='img-fluid' src={imageUrl} alt={`${name}`}  />
      </div>
      <h5 className="mb-0">{name}</h5>
      <small className='team-text'>{designation}</small>
     
      <div className="d-flex justify-content-center mt-3">
        {socialLinks.map((link, index) => (
         <a key={index} href={link.url} className="btn btn-square mx-1">
         <FontAwesomeIcon icon={link.icon} />
       </a>
        ))}
      </div>
    </div>
    </div>
  );
};

export default TeamCard;