import React from 'react';
import testimonial1 from '../../assets/img/testimonial-1.jpg'
import testimonial2 from '../../assets/img/testimonial-2.jpg'
import testimonial3 from '../../assets/img/testimonial-3.jpg'
import testimonial4 from '../../assets/img/testimonial-4.jpg'
import OwlCarousel from 'react-owl-carousel';
import TestimonialCard from '../TestimonialCard/TestimonialCard';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Testimonial.css'

const Testimonial = () => {
  const testimonials = [
    {
      text: 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam',
      imgSrc: testimonial1 ,
      clientName: 'Client Name',
      profession: 'Profession',
    },
    {
      text: 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam',
      imgSrc: testimonial2 ,
      clientName: 'Client Name',
      profession: 'Profession',
    },
    {
      text: 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam',
      imgSrc: testimonial3,
      clientName: 'Client Name',
      profession: 'Profession',
    },
    {
      text: 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam',
      imgSrc: testimonial4 ,
      clientName: 'Client Name',
      profession: 'Profession',
    },
  ];

  return (
    <div class="container-xxl bg-white p-0 ">
    <div className="container-xxl py-5 animate__animated animate__fadeInUp">
      <div className="container">
        <div className="text-center">
          <h5 className="section-title text-center fw-normal cursive-text">Testimonial</h5>
          <h1 className="mb-5">Our Clients Say!!!</h1>
        </div>
        
        <OwlCarousel className="owl-carousel testimonial-carousel" 
         loop 
         margin={10}
         dots ={true}
         dotsEach={4}
         items={3} 
         autoplay={true}
         autoplayTimeout={3000}
         smartSpeed={1000}
         center={true}
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              text={testimonial.text}
              imgSrc={testimonial.imgSrc}
              clientName={testimonial.clientName}
              profession={testimonial.profession}
            />
          ))}
        </OwlCarousel>
      </div>
    </div>
    </div>
  );
};

export default Testimonial;