import React from "react";
import Banner from "../components/Banner/Banner";
import Booking from "../components/Booking/Booking";
import Footer from "../components/Footer/Footer";

function BookingPage() {


  return (
    <div>
      <Banner title="Booking" pageName="Booking" />
      <Booking />
      <Footer />
    </div>
  );
}

export default BookingPage;