import React, { useState } from 'react';
import image1 from "../../assets/img/menu-1-1.webp"
import image2 from "../../assets/img/menu-2.webp"
import image3 from "../../assets/img/menu-3.webp"
import image4 from "../../assets/img/menu-4.webp"
import image5 from "../../assets/img/menu-5.webp"
import image6 from "../../assets/img/menu-6.jpg"
import image7 from "../../assets/img/menu-7.jpg"
import image8 from "../../assets/img/menu-8.webp"
import image9 from "../../assets/img/menu-9.webp"
import image10 from "../../assets/img/menu-10.webp"
import image11 from "../../assets/img/menu-11.webp"
import image12 from "../../assets/img/menu-12.webp"
import image13 from "../../assets/img/menu-13.webp"
import image14 from "../../assets/img/menu-14.webp"
import image15 from "../../assets/img/menu-15.webp"
import image16 from "../../assets/img/menu-16.webp"
import image17 from "../../assets/img/menu-17.webp"
import image18 from "../../assets/img/menu-18.webp"
import image19 from "../../assets/img/menu-19.webp"
import image20 from "../../assets/img/menu-20.webp"
import image21 from "../../assets/img/menu-21.webp"
import image22 from "../../assets/img/menu-22.webp"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBurger, faMugSaucer, faIceCream, faBacon } from '@fortawesome/free-solid-svg-icons';
import './Menu.css';
const items = [
    { id: 1, name: 'Beef Salad', price: '$15', image: image1 },
    { id: 2, name: 'Chicken & Veggies', price: '$25', image: image2 },
    { id: 3, name: 'Hamburger Meal', price: '$15', image: image3 },
    { id: 4, name: 'Steak Meal', price: '$25', image: image4 },
    { id: 5, name: 'Chicken Burger Meal', price: '$15', image: image5 },
    { id: 6, name: 'Salmon Meal', price: '$25', image: image6 },
    { id: 7, name: 'Pizza', price: '$25', image: image7 },
    { id: 8, name: 'Fish & Chips', price: '$15', image: image8 },
    { id: 9, name: 'Egg Sandwich', price: '$6', image: image9 },
    { id: 10, name: 'Hotdog & Eggs', price: '$10', image: image10 },
    { id: 11, name: 'Muffins', price: '$5', image: image11 },
    { id: 12, name: 'Pancakes', price: '$10', image: image12 },
    { id: 13, name: 'Cheesecake', price: '$5', image: image13 },
    { id: 14, name: 'Chocolate Cake', price: '$10', image: image14 },
    { id: 15, name: 'Ice Cream', price: '$5', image: image15 },
    { id: 16, name: 'Fruit Salad', price: '$10', image: image16 },
    { id: 17, name: 'Coffee', price: '$3', image: image17 },
    { id: 18, name: 'Water', price: '$2', image: image18 },
    { id: 19, name: 'Tea', price: '$3', image: image19 },
    { id: 20, name: 'Soda', price: '$2', image: image20 },
    { id: 21, name: 'Juice', price: '$4', image: image21 },
    { id: 22, name: 'Hot Chocolate', price: '$3', image: image22 },
  ];
  
  const Menu = () => {
  const [activeTab, setActiveTab] = useState('breakfast');

  const filteredItems = {
    breakfast: items.slice(8, 12),
    meals: items.slice(0, 8),
    dessert: items.slice(12, 16),
    beverages: items.slice(16, 22),
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
              <li className="nav-item mx-3">  {/* Added mx-3 for consistent spacing */}
                <button 
                  className={`d-flex align-items-center text-start px-4 py-3 ${activeTab === 'breakfast' ? 'active' : ''}`}
                  onClick={() => setActiveTab('breakfast')}
                >
                  <FontAwesomeIcon className='fa-2x me-3' icon={faBacon} />  {/* Added me-3 for icon spacing */}
                  <div className="ps-0 menu-text">  {/* Removed ps-3 since we have me-3 on icon */}
                    <small className="tab-text">Popular</small>
                    <h6 className="mt-n1 mb-0 tab-text">Breakfast</h6>
                  </div>
                </button>
              </li>
              
              <li className="nav-item mx-3">
                <button 
                  className={`d-flex align-items-center text-start px-4 py-3 ${activeTab === 'meals' ? 'active' : ''}`}
                  onClick={() => setActiveTab('meals')}
                >
                  <FontAwesomeIcon className='fa-2x me-3' icon={faBurger} />
                  <div className="ps-0">
                    <small className="tab-text">Special</small>
                    <h6 className="mt-n1 mb-0 tab-text">Meals</h6>
                  </div>
                </button>
              </li>
              
              <li className="nav-item mx-3">
                <button 
                  className={`d-flex align-items-center text-start px-4 py-3 ${activeTab === 'dessert' ? 'active' : ''}`}
                  onClick={() => setActiveTab('dessert')}
                >
                  <FontAwesomeIcon className='fa-2x me-3' icon={faIceCream} />
                  <div className="ps-0">
                    <small className="tab-text">Lovely</small>
                    <h6 className="mt-n1 mb-0 tab-text">Dessert</h6>
                  </div>
                </button>
              </li>

              <li className="nav-item mx-3">
                <button 
                  className={`d-flex align-items-center text-start px-4 py-3 ${activeTab === 'beverages' ? 'active' : ''}`}
                  onClick={() => setActiveTab('beverages')}
                >
                  <FontAwesomeIcon className='fa-2x me-3' icon={faMugSaucer} />
                  <div className="ps-0 menu-text">
                    <small className="tab-text">Popular</small>
                    <h6 className="mt-n1 mb-0 tab-text">Beverages</h6>
                  </div>
                </button>
              </li>
            </ul>
          </div>

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
  );
};

export default Menu;