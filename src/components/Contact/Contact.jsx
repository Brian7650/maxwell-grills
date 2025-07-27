import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import './Contact.css'; 

const Contact = () => {
  return (
    <div className="container-xxl bg-white  py-5">
      <div className="container py-4 contact-section">
        <div className="text-center">
          <h5 className="section-title ff-secondary text-center fw-normal cursive-text">Contact Us</h5>
          <h1 className="mb-5">Contact For Any Query</h1>
        </div>
        <div className="row g-4">
          <div className="col-12">
            <div className="row gy-4">
              <div className="col-md-4">
                <h5 className="section-title ff-secondary fw-normal text-start cursive-text">Booking</h5>
                <p><FontAwesomeIcon className="contact-icon me-2" icon={faEnvelopeOpen} />book@example.com</p>
              </div>
              <div className="col-md-4">
                <h5 className="section-title ff-secondary fw-normal text-start cursive-text">General</h5>
                <p> <FontAwesomeIcon className="contact-icon me-2" icon={faEnvelopeOpen} />info@example.com</p>
              </div>
              <div className="col-md-4">
                <h5 className="section-title ff-secondary fw-normal text-start cursive-text ">Technical</h5>
                <p><FontAwesomeIcon className="contact-icon me-2" icon={faEnvelopeOpen} />tech@example.com</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <iframe
              className="position-relative rounded w-100 h-100"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23093.914069857008!2d-79.40214145077309!3d43.6535929089872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb34d27310bd%3A0xba15d20622070393!2sDowntown%20Toronto%2C%20Toronto%2C%20ON!5e0!3m2!1sen!2sca!4v1753562440347!5m2!1sen!2sca"
              frameBorder="0"
              style={{ minHeight: '350px', border: 0 }}
              allowFullScreen
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
          <div className="col-md-6">
            <div className="contact-form" >
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="name" placeholder="Your Name" />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input type="email" className="form-control" id="email" placeholder="Your Email" />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="subject" placeholder="Subject" />
                      <label htmlFor="subject">Subject</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea className="form-control" placeholder="Leave a message here" id="message" style={{ height: '150px' }}></textarea>
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn w-100 py-3" type="submit">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;