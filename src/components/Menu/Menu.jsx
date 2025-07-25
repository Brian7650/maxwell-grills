import React, { useState } from 'react';
import image1 from "../../assets/img/menu-1.jpg"
import image2 from "../../assets/img/menu-2.jpg"
import image3 from "../../assets/img/menu-3.jpg"
import image4 from "../../assets/img/menu-4.jpg"
import image5 from "../../assets/img/menu-5.jpg"
import image6 from "../../assets/img/menu-6.jpg"
import image7 from "../../assets/img/menu-7.jpg"
import image8 from "../../assets/img/menu-8.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBurger, faMugSaucer ,faUtensils} from '@fortawesome/free-solid-svg-icons';
import './Menu.css';


const items = [
    { id: 1, name: 'Chicken Burger', price: '$115', image: image1 },
    { id: 2, name: 'Chicken Burger', price: '$115', image: image2 },
    { id: 3, name: 'Chicken Burger', price: '$115', image: image3 },
    { id: 4, name: 'Chicken Burger', price: '$115', image: image4 },
    { id: 5, name: 'Chicken Burger', price: '$115', image: image5 },
    { id: 6, name: 'Chicken Burger', price: '$115', image: image6 },
    { id: 7, name: 'Chicken Burger', price: '$115', image: image7 },
    { id: 8, name: 'Chicken Burger', price: '$115', image: image8 }
  ];
  
  const Menu = () => {
    const [activeTab, setActiveTab] = useState('breakfast');
  
    return (
      
      <div className="container-xxl p-0 menu-section">
      <div className="container ">
          <div className="tab-container ">
              <div className="text-center animate__animated animate__fadeInUpBig " style={{ animationDelay: '0.1s' }}>
                  <h5 className="section-title text-center fw-normal cursive-text">Food Menu</h5>
                  <h1 className="mb-5">Most Popular Items</h1>
              </div>
  
              <div className="tab-class text-center  animate__animated animate__fadeInUpBig " style={{ animationDelay: '0.2s' }}>
                  <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
                      <li className="nav-item">
                          <a className="d-flex align-items-center text-start mx-3 ms-0 pb-3 active menu-text" data-bs-toggle="pill" href="#tab-1">
                              <FontAwesomeIcon className='fa-2x tab-icon' icon={faMugSaucer} />
                              <div className="ps-3 menu-text">
                                  <small className="tab-text">Popular</small>
                                  <h6 className="mt-n1 mb-0 tab-text">Breakfast</h6>
                              </div>
                          </a>
                      </li>
  
                      <li className="nav-item">
                          <a className="d-flex align-items-center text-start mx-3 me-0 pb-3" data-bs-toggle="pill" href="#tab-2">
                              <FontAwesomeIcon className='fa-2x tab-icon' icon={faBurger} />
                              <div className="ps-3">
                                  <small className="tab-text">Special</small>
                                  <h6 className="mt-n1 mb-0 tab-text">Launch</h6>
                              </div>
                          </a>
                      </li>
  
                      <li className="nav-item">
                          <a className="d-flex align-items-center text-start mx-3 me-0 pb-3" data-bs-toggle="pill" href="#tab-3">
                              <FontAwesomeIcon className='fa-2x tab-icon' icon={faUtensils} />
                              <div className="ps-3">
                                  <small className="tab-text">Lovely</small>
                                  <h6 className="mt-n1 mb-0 tab-text">Dinner</h6>
                              </div>
                          </a>
                      </li>
                  </ul>
              


        <div className="menu-grid">
          {items.map((item) => (
            <div className="col-lg-6">
            <div className="menu-item d-flex align-items-center"  key={item.id}>
              <img className="flex-shrink-0 img-fluid rounded" src={item.image} alt={item.name} />
              
              <div className="w-100 d-flex flex-column text-start ps-4">
              <h5 className="d-flex justify-content-between border-bottom pb-2">
                <span>{item.name}</span>
                <span className='menu-price'>{item.price}</span>
                </h5>
                 <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
              </div>

            </div>
            </div>
          ))}
        </div>
        </div>
        </div>
        </div>
      </div>
    );
  };
  
  export default Menu;