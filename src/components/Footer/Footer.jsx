import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone ,faEnvelope, faAngleRight, faArrowUp} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faYoutube, faLinkedinIn  } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'

const Footer = () => {
    return (
        <div className="container-xxl bg-white p-0 animate__animated animate__fadeIn">
        <div className="container-fluid text-light footer pt-5" >
            <div className="container py-5">
                <div className="row g-5">
                    
                    <div className="col-lg-3 col-md-6">
                        <h4 className="section-title text-start fw-normal mb-4 cursive-text">Company</h4>
                        <a className="btn btn-link" href="#"><FontAwesomeIcon className='footer-icon' icon={faAngleRight} size="sm" />About Us</a>
                        <a className="btn btn-link" href="#"><FontAwesomeIcon className='footer-icon' icon={faAngleRight} size="sm" />Contact Us</a>
                        <a className="btn btn-link" href="#"><FontAwesomeIcon className='footer-icon' icon={faAngleRight} size="sm" />Reservation</a>
                        <a className="btn btn-link" href="#"><FontAwesomeIcon className='footer-icon' icon={faAngleRight} size="sm" />Privacy Policy</a>
                        <a className="btn btn-link" href="#"><FontAwesomeIcon className='footer-icon' icon={faAngleRight} size="sm" />Terms & Condition</a>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <h4 className="section-title text-start fw-normal mb-4 cursive-text">Contact</h4>
                        <p className="mb-2"> <FontAwesomeIcon className="fa fa-map-marker-alt me-3"  icon={faLocationDot} />123 Street, Toronto, Canada</p>
                        <p className="mb-2"> <FontAwesomeIcon className="fa fa-map-marker-alt me-3"  icon={faPhone} />+416 345 67890</p>
                        <p className="mb-2"> <FontAwesomeIcon className="fa fa-map-marker-alt me-3"  icon={faEnvelope}/>info@example.com</p>

                        <div className="d-flex pt-2">
                            <a className="btn btn-outline-light btn-social" href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                            <a className="btn btn-outline-light btn-social" href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                            <a className="btn btn-outline-light btn-social" href="#"><FontAwesomeIcon icon={faYoutube} /></a>
                            <a className="btn btn-outline-light btn-social" href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                        </div> 
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <h4 className="section-title text-start fw-normal mb-4 cursive-text">Opening</h4>
                        <h5 className="text-light fw-normal">Monday - Saturday</h5>
                        <p>09AM - 09PM</p>
                        <h5 className="text-light fw-normal">Sunday</h5>
                        <p>11AM - 06PM</p>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <h4 className="section-title text-start fw-normal mb-4 cursive-text">Newsletter</h4>
                        <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                        <div className="position-relative mx-auto" style={{ maxWidth: '400px' }}>
                            <input className="form-control  w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                            <button type="button" className="btn py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className="container">
                <div className="copyright">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy; <a className="border-bottom" href="#">Maxwell Grills</a>, All Right Reserved.
                            Designed By <a className="border-bottom" href="https://brian-portfolio-3-0.onrender.com/">Brian Bartley</a><br /><br />
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <div className="footer-menu">
                                <a href="#">Home</a>
                                <a href="#">Cookies</a>
                                <a href="#">Help</a>
                                <a href="#">FQAs</a>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <a href="#" class="btn btn-lg back-to-top"><FontAwesomeIcon icon={faArrowUp} /></a>
            </div>
        
    );
};

export default Footer;

