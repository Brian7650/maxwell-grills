import React, { useState } from 'react';
import image1 from "../../assets/img/menu-1-1.webp"
import image2 from "../../assets/img/menu-2.webp"
import image3 from "../../assets/img/menu-3.webp"
import image4 from "../../assets/img/menu-4.webp"
import image5 from "../../assets/img/menu-5.webp"
import image6 from "../../assets/img/menu-6.jpg"
import image7 from "../../assets/img/menu-7.jpg"
import image8 from "../../assets/img/menu-8.jpg"
import image9 from "../../assets/img/menu-9.webp"
import image10 from "../../assets/img/menu-10.webp"
import image11 from "../../assets/img/menu-11.webp"
import image12 from "../../assets/img/menu-12.webp"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBurger, faMugSaucer ,faUtensils} from '@fortawesome/free-solid-svg-icons';
import './Menu.css';


const items = [
    { id: 1, name: 'Beef Salad', price: '$15', image: image1 },
    { id: 2, name: 'Chicken & Veggies', price: '$25', image: image2 },
    { id: 3, name: 'Hamburger Meal', price: '$15', image: image3 },
    { id: 4, name: 'Steak Meal', price: '$25', image: image4 },
    { id: 5, name: 'Chicken Burger Meal', price: '$15', image: image5 },
    { id: 6, name: 'Salmon Meal', price: '$25', image: image6 },
    { id: 7, name: 'Pizza', price: '$25', image: image7 },
    { id: 8, name: 'Chicken Burger', price: '$115', image: image8 },
    { id: 9, name: 'Egg Sandwich', price: '$6', image: image9 },
    { id: 10, name: 'Hotdog & Eggs', price: '$10', image: image10 },
    { id: 11, name: 'Muffins', price: '$5', image: image11 },
    { id: 12, name: 'Pancakes', price: '$10', image: image12 },
    // { id: 5, name: 'Chicken Burger Meal', price: '$15', image: image5 },
    // { id: 6, name: 'Salmon Meal', price: '$25', image: image6 },
    // { id: 7, name: 'Pizza', price: '$25', image: image7 },
    // { id: 8, name: 'Chicken Burger', price: '$115', image: image8 }
  ];
  
  const Menu = () => {
  const [activeTab, setActiveTab] = useState('breakfast');

  const filteredItems = {
    breakfast: items.slice(8, 12),
    lunch: items.slice(0, 6),
    dinner: items.slice(6, 7),
  };

  return (
    <div className="container-xxl p-0 menu-section">
      <div className="container">
        <div className="tab-container">
          <div className="text-center animate__animated animate__fadeInUpBig" style={{ animationDelay: '0.1s' }}>
            <h5 className="section-title text-center fw-normal cursive-text">Food Menu</h5>
            <h1 className="mb-5">Most Popular Items</h1>
          </div>

          <div className="tab-class text-center animate__animated animate__fadeInUpBig" style={{ animationDelay: '0.2s' }}>
            <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
              <li className="nav-item">
                <button 
                  className={`d-flex align-items-center text-start mx-3 ms-0 pb-3 ${activeTab === 'breakfast' ? 'active' : ''}`}
                  onClick={() => setActiveTab('breakfast')}
                >
                  <FontAwesomeIcon className='fa-2x tab-icon' icon={faMugSaucer} />
                  <div className="ps-3 menu-text">
                    <small className="tab-text">Popular</small>
                    <h6 className="mt-n1 mb-0 tab-text">Breakfast</h6>
                  </div>
                </button>
              </li>
              <li className="nav-item">
                <button 
                  className={`d-flex align-items-center text-start mx-3 me-0 pb-3 ${activeTab === 'lunch' ? 'active' : ''}`}
                  onClick={() => setActiveTab('lunch')}
                >
                  <FontAwesomeIcon className='fa-2x tab-icon' icon={faBurger} />
                  <div className="ps-3">
                    <small className="tab-text">Special</small>
                    <h6 className="mt-n1 mb-0 tab-text">Lunch</h6>
                  </div>
                </button>
              </li>
              <li className="nav-item">
                <button 
                  className={`d-flex align-items-center text-start mx-3 me-0 pb-3 ${activeTab === 'dinner' ? 'active' : ''}`}
                  onClick={() => setActiveTab('dinner')}
                >
                  <FontAwesomeIcon className='fa-2x tab-icon' icon={faUtensils} />
                  <div className="ps-3">
                    <small className="tab-text">Lovely</small>
                    <h6 className="mt-n1 mb-0 tab-text">Dinner</h6>
                  </div>
                </button>
              </li>
            </ul>

            <div className="menu-grid">
              {filteredItems[activeTab].map((item) => (
                <div className="col-lg-6" key={item.id}>
                  <div className="menu-item d-flex align-items-center">
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