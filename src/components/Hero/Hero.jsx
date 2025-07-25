import React from "react";
import hero from "../../assets/img/hb-hero.png"
import './Hero.css'



function Hero() {
    return(

        <div class="container-xxl p-0">

        <div class="container-xxl py-5 hero_section">
                <div class="container my-5 py-5">
                    <div class="row align-items-center g-5">
                        
                        <div class="col-lg-6 text-center text-lg-start">
                            <h1 class="display-3 animate__animated animate__fadeInLeft">Enjoy Our<br/>Delicious Meal</h1>
                            <p class="mb-4 pb-2 animate__animated animate__fadeInLeft">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                            <a href="" class="btn py-sm-3 px-sm-5 me-3 animate__animated animate__fadeInLeft">Book A Table</a>
                        </div>
                        
                        <div class="col-lg-6 text-center overflow-hidden">
                            <img class="img-fluid animate__animated animate__pulse" src={hero} alt="Delicious Meal" />
                        </div>
                    </div>
                </div>
            </div>
    </div>
    );
}
 
export default Hero;