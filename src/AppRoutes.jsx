import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Menu from "./pages/Menu";
import Booking from "./pages/Booking";
import Team from "./pages/Team";
import Testimonial from "./pages/Testimonial";
import Contact from "./pages/Contact";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/service" element={<Service />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/team" element={<Team />} />
      <Route path="/testimonial" element={<Testimonial />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default AppRoutes;
