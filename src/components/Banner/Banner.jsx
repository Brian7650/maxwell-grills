import React from "react";
import './Banner.css'



function Banner({title, pageName}) {
    return(

        <div className="container-xxl p-0">

        <div className="container-xxl py-5 hero_section">
                <div className="container my-5">
                <div className="container text-center my-5 pt-5 pb-4">
                    <h1 className="display-3 mb-3">{title}</h1>
                    <nav>
                        <ol className="breadcrumb justify-content-center text-uppercase">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item"><a href="#">Pages</a></li>
                            <li className="breadcrumb-item text-white active" aria-current="page">{pageName}</li>
                        </ol>
                    </nav>
                </div>
                </div>
            </div>
    </div>
    );
}
 
export default Banner;