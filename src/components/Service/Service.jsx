import React from 'react';
import './Service.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie, faUtensils, faCartPlus, faHeadset } from '@fortawesome/free-solid-svg-icons';
import ServiceCard from '../ServiceCard/ServiceCard';

function Service({ numberOfCards }) {
    const services = [
        {
            icon: <FontAwesomeIcon icon={faUserTie} />,
            title: "Master Chefs",
            description: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
        },
        {
            icon: <FontAwesomeIcon icon={faUtensils} />,
            title: "Quality Food",
            description: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
        },
        {
            icon: <FontAwesomeIcon icon={faCartPlus} />,
            title: "Online Order",
            description: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
        },
        {
            icon: <FontAwesomeIcon icon={faHeadset} />,
            title: "24/7 Service",
            description: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
        },
        {
            icon: <FontAwesomeIcon icon={faUserTie} />,
            title: "Master Chefs",
            description: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
        },
        {
            icon: <FontAwesomeIcon icon={faUtensils} />,
            title: "Quality Food",
            description: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
        },
        {
            icon: <FontAwesomeIcon icon={faCartPlus} />,
            title: "Online Order",
            description: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
        },
        {
            icon: <FontAwesomeIcon icon={faHeadset} />,
            title: "24/7 Service",
            description: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
        },
    ];

    const delays = ['0.1s', '0.3s', '0.5s', '0.7s', '0.1s', '0.3s', '0.5s', '0.7s'];

    return (
        <div className="container-xxl py-5 service-section">
            <div className="container">
                <div className="row g-4">
                {services.slice(0, numberOfCards).map((service, index) => (
                        <ServiceCard
                            key={index}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                            delay={delays[index]} 
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Service;
