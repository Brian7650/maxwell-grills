import React from "react";
import Banner from "../components/Banner/Banner";
import Testimonial from "../components/Testimonial/Testimonial";
import Footer from "../components/Footer/Footer";

function TestimonialPage() {

  return (
    <div>
      <Banner title="Testimonial" pageName="Testimonial" />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default TestimonialPage;