import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBurger } from '@fortawesome/free-solid-svg-icons';
import './navbar.css';

function Navigation() {
  const location = useLocation();
  const isPagesActive = ['/booking', '/team', '/testimonial'].includes(location.pathname);

  return (
    <div className="container-xxl position-relative p-0">
      <nav className="navbar navbar-expand-lg px-4 px-lg-5 py-3 py-lg-0">
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand py-0 pe-4">
            <h1>
              <FontAwesomeIcon icon={faBurger} /> Maxwell Grills
            </h1>
          </NavLink>
          
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto py-0 pe-4">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) => isActive ? 'nav-link active-link' : 'nav-link'}
                >
                  HOME
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  className={({ isActive }) => isActive ? 'nav-link active-link' : 'nav-link'}
                >
                  ABOUT
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/service"
                  className={({ isActive }) => isActive ? 'nav-link active-link' : 'nav-link'}
                >
                  SERVICE
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/menu"
                  className={({ isActive }) => isActive ? 'nav-link active-link' : 'nav-link'}
                >
                  MENU
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  to="#"
                  className={`nav-link dropdown-toggle ${isPagesActive ? 'active-link' : ''}`}
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  PAGES
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <NavLink
                      to="/booking"
                      className={({ isActive }) => isActive ? 'dropdown-item active-link' : 'dropdown-item'}
                    >
                      Booking
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/team"
                      className={({ isActive }) => isActive ? 'dropdown-item active-link' : 'dropdown-item'}
                    >
                      Team
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/testimonial"
                      className={({ isActive }) => isActive ? 'dropdown-item active-link' : 'dropdown-item'}
                    >
                      Testimonial
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className={({ isActive }) => isActive ? 'nav-link active-link' : 'nav-link'}
                >
                  CONTACT
                </NavLink>
              </li>
            </ul>
            <NavLink to="/booking" className="btn py-2 px-4">
              Book A Table
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;