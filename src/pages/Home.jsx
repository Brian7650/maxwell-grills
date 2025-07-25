import Hero from "../components/Hero/Hero";
import Service from "../components/Service/Service";
import About from "../components/About/About";
import Menu from "../components/Menu/Menu";
import Booking from "../components/Booking/Booking";
import Team from "../components/Team/Team";
import Testimonials from "../components/Testimonial/Testimonial";
import Footer from "../components/Footer/Footer";


function Home() {
    return (
        <>
        <Hero />
        <Service numberOfCards={4}/>
        <About />
        <Menu />
        <Booking />
        <Team numberOfCards={4}/>
        <Testimonials />
        <Footer />
        </>
    );
}

export default Home;