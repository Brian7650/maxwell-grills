import React from "react";
import PropTypes from 'prop-types';
import './ServiceCard.css'

function ServiceCard({ icon, title, description, delay }) {
    return (
                        <div className={`col-lg-3 col-sm-6 animate__animated animate__fadeInUpBig`} style={{ animationDelay: delay }} >
                            <div className="service-card rounded pt-3">
                                <div className=" p-4">
                                <div className="icon fa-3x">{icon}</div>
                                <h5>{title}</h5>
                                <p>{description}</p>
                                </div>
                            </div>
                        </div>


    );
}


ServiceCard.propTypes = {
    icon: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    delay: PropTypes.string
};

ServiceCard.defaultProps = {
    delay: '0s'
};

export default ServiceCard;