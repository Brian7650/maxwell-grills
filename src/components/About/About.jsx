import React, { useState, useEffect } from "react";
import aboutOne from '../../assets/img/about-1-1.webp'
import aboutTwo from "../../assets/img/about-2-2.webp"
import aboutThree from "../../assets/img/about-3-1.webp"
import aboutFour from "../../assets/img/about-4-1.webp"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';
import './About.css'


function About() {

    const [years, setYears] = useState(0);
    const [popular, setPopular] = useState(0);

    useEffect(() => {
        const countYears = () => {
            let start = 0;
            const end = 20;
            const duration = 3000; 
            const stepTime = Math.abs(Math.floor(duration / end));

            const timer = setInterval(() => {
                start++;
                setYears(start);
                if (start === end) {
                    clearInterval(timer);
                }
            }, stepTime);
        };

        
        const countPopular = () => {
            let start = 0;
            const end = 35;
            const duration = 3000; 
            const stepTime = Math.abs(Math.floor(duration / end));

            const timer = setInterval(() => {
                start++;
                setPopular(start);
                if (start === end) {
                    clearInterval(timer);
                }
            }, stepTime);
        };

       
        countYears();
        countPopular();

        return () => {
            clearInterval(countYears);
            clearInterval(countPopular);
        };
    }, []
);

    return (
        <div className="container-xxl bg-white p-0 about-section">
            <div className="container-xxl py-5">
                <div className="container ">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6">
                            <div className="row g-3">
                                <div className="col-6 text-start about-img-1">
                                    <img 
                                        className="img-fluid rounded w-100 animate__animated animate__zoomIn" 
                                        src={aboutOne} 
                                        alt="About One"
                                        style={{ animationDelay: '0.1s' }} 
                                    />
                                </div>
                                <div className="col-6 text-start">
                                    <img 
                                        className="img-fluid rounded w-100 animate__animated animate__zoomIn" 
                                        src={aboutTwo} 
                                        alt="About Two"
                                        style={{ animationDelay: '0.3s' }} 
                                    />
                                </div>
                                <div className="col-6 text-end">
                                    <img 
                                        className="img-fluid rounded w-100 animate__animated animate__zoomIn" 
                                        src={aboutThree} 
                                        alt="About Three"
                                        style={{ animationDelay: '0.5s' }} 
                                    />
                                </div>
                                <div className="col-6 text-end">
                                    <img 
                                        className="img-fluid rounded w-100 animate__animated animate__zoomIn" 
                                        src={aboutFour} 
                                        alt="About Four"
                                        style={{ animationDelay: '0.7s' }} 
                                    />
                                </div>
                        </div>
                    </div>


                    <div className="col-lg-6 about-text">
                            <h5 className="section-title text-start fw-normal cursive-text">About Us</h5>
                            <h1 className="mb-4">Welcome to <FontAwesomeIcon className="about-icon" icon={faHamburger} /> Maxwell Grills</h1>
                            <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.</p>
                            <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                        
                            <div className="row g-4 mb-4">
                                <div className="col-sm-6">
                                    <div className="d-flex align-items-center border-start border-5 px-3 about-border">
                                        <h1 className="flex-shrink-0 display-5 mb-0">{years}</h1>
                                        <div className="ps-4">
                                            <p className="mb-0">Years of</p>
                                            <h6 className="text-uppercase mb-0">Experience</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="d-flex align-items-center border-start border-5 px-3 about-border">
                                        <h1 className="flex-shrink-0 display-5 mb-0">{popular}</h1>
                                        <div className="ps-4">
                                            <p className="mb-0">Popular</p>
                                            <h6 className="text-uppercase mb-0">Master Chefs</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a className="btn py-3 px-5 mt-2" href="">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;