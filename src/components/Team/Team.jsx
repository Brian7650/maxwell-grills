import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import image1 from '../../assets/img/team-1.jpg'
import image2 from '../../assets/img/team-2.jpg'
import image3 from '../../assets/img/team-3.jpg'
import image4 from '../../assets/img/team-4.jpg'
import TeamCard from '../TeamCard/TeamCard';
import './Team.css';

const Team = ({ numberOfCards }) => {
  const teamMembers = [
    {
      name: 'Full Name 1',
      designation: 'Designation',
      imageUrl: image1,
      socialLinks: [
        { name: 'Facebook', url: 'http://facebook.com', icon: faFacebookF },
        { name: 'Twitter', url: 'http://twitter.com', icon: faTwitter },
        { name: 'Instagram', url: 'http://instagram.com', icon: faInstagram },
      ],
    },
    {
      name: 'Full Name 2',
      designation: 'Designation',
      imageUrl: image2,
      socialLinks: [
        { name: 'Facebook', url: 'http://facebook.com', icon: faFacebookF },
        { name: 'Twitter', url: 'http://twitter.com', icon: faTwitter },
        { name: 'Instagram', url: 'http://instagram.com', icon: faInstagram },
      ],
    },
    {
      name: 'Full Name 3',
      designation: 'Designation',
      imageUrl: image3,
      socialLinks: [
        { name: 'Facebook', url: 'http://facebook.com', icon: faFacebookF },
        { name: 'Twitter', url: 'http://twitter.com', icon: faTwitter },
        { name: 'Instagram', url: 'http://instagram.com', icon: faInstagram },
      ],
    },
    {
      name: 'Full Name 4',
      designation: 'Designation',
      imageUrl: image4,
      socialLinks: [
        { name: 'Facebook', url: 'http://facebook.com', icon: faFacebookF },
        { name: 'Twitter', url: 'http://twitter.com', icon: faTwitter },
        { name: 'Instagram', url: 'http://instagram.com', icon: faInstagram },
      ],
    },
    {
      name: 'Full Name 1',
      designation: 'Designation',
      imageUrl: image1,
      socialLinks: [
        { name: 'Facebook', url: 'http://facebook.com', icon: faFacebookF },
        { name: 'Twitter', url: 'http://twitter.com', icon: faTwitter },
        { name: 'Instagram', url: 'http://instagram.com', icon: faInstagram },
      ],
    },
    {
      name: 'Full Name 2',
      designation: 'Designation',
      imageUrl: image2,
      socialLinks: [
        { name: 'Facebook', url: 'http://facebook.com', icon: faFacebookF },
        { name: 'Twitter', url: 'http://twitter.com', icon: faTwitter },
        { name: 'Instagram', url: 'http://instagram.com', icon: faInstagram },
      ],
    },
    {
      name: 'Full Name 3',
      designation: 'Designation',
      imageUrl: image3,
      socialLinks: [
        { name: 'Facebook', url: 'http://facebook.com', icon: faFacebookF },
        { name: 'Twitter', url: 'http://twitter.com', icon: faTwitter },
        { name: 'Instagram', url: 'http://instagram.com', icon: faInstagram },
      ],
    },
    {
      name: 'Full Name 4',
      designation: 'Designation',
      imageUrl: image4,
      socialLinks: [
        { name: 'Facebook', url: 'http://facebook.com', icon: faFacebookF },
        { name: 'Twitter', url: 'http://twitter.com', icon: faTwitter },
        { name: 'Instagram', url: 'http://instagram.com', icon: faInstagram },
      ],
    },

    
    
  ];

  const delays = ['0.1s', '0.3s', '0.5s', '0.7s','0.1s', '0.3s', '0.5s', '0.7s'];

  return (

    <div class="container-xxl bg-white pt-5 pb-3">
            <div class="container py-4">
                <div class="text-center">
                    <h5 class="section-title text-center fw-normal cursive-text">Team Members</h5>
                    <h1 class="mb-5">Our Master Chefs</h1>
                </div>
                <div class="row g-4">
                {teamMembers.slice(0, numberOfCards).map((member, index) => (
            <TeamCard
              key={index}
              name={member.name}
              designation={member.designation}
              imageUrl={member.imageUrl}
              socialLinks={member.socialLinks}
              delay={delays[index]}
            />
        ))}
      </div>

      </div>
      </div>
  
  );
};

export default Team;