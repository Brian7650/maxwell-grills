import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './Booking.css';

const Booking = () => {
  const [show, setShow] = React.useState(false);
  const [videoSrc, setVideoSrc] = React.useState('');

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div className="container-xxl py-5 px-0 bg-white " >
      <div className="row g-0 animate__animated animate__fadeInUpBig">
        <div className="col-md-6">
          <div className="video">
            <Button className="btn-play" onClick={() => {
              setVideoSrc('https://www.youtube.com/embed/BS38nAR43eg');
              handleShow();
            }}>
              <span></span>
            </Button>
          </div>
        </div>
        <div className="col-md-6 d-flex align-items-center video-section">
          <div className="p-5 wow fadeInUp" data-wow-delay="0.2s">
            <h5 className="section-title  text-start fw-normal cursive-text">Reservation</h5>
            <h1 className="text-white mb-4">Book A Table Online</h1>
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
                <div className="col-md-6">
                  <div className="form-floating date" id="date3" data-target-input="nearest">
                    <input type="text" className="form-control " id="datetime" placeholder="Date & Time" data-target="#date3" />
                    <label htmlFor="datetime">Date & Time</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <select className="form-select form-control" id="select1">
                      <option value="1">People 1</option>
                      <option value="2">People 2</option>
                      <option value="3">People 3</option>
                    </select>
                    <label htmlFor="select1">No Of People</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <textarea className="form-control" placeholder="Special Request" id="message" style={{ height: '100px' }}></textarea>
                    <label htmlFor="message">Special Request</label>
                  </div>
                </div>
                <div className="col-12">
                  <button className="btn w-100 py-3" type="submit">Book Now</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} id="videoModal" aria-labelledby="exampleModalLabel" aria-hidden="true" centered>
        <Modal.Header closeButton>
          <Modal.Title id="exampleModalLabel">Youtube Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="ratio ratio-16x9">
            <iframe className="embed-responsive-item" src={videoSrc} id="video" allowFullScreen allowscriptaccess="always" allow="autoplay"></iframe>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Booking;