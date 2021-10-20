import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import banner_1 from '../../../Images/Banner/banner-1.jpg'
import banner_2 from '../../../Images/Banner/banner-2.jpg'
import banner_3 from '../../../Images/Banner/banner-3.jpg'

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={banner_1}
                    alt="First slide"
                />
                <Carousel.Caption>
                <Link to="/services"><h4 className="btn btn-outline-info ">Booking Online</h4></Link>
                    <p>What is an operational definition example? An operational definition is designed to model or represent a concept or theoretical definition, also known as a construct.</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={banner_2}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <Link to="/services"><h4 className="btn btn-outline-info ">Booking Online</h4></Link>
                    
                    <p>An establishment or hospital department where outpatients are given medical treatment or advice, especially of a specialist nature.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={banner_3}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <Link to="/services"><h4 className="btn btn-outline-info ">Booking Online</h4></Link>
                    <p>Physiotherapy is treatment to restore, maintain, and make the most of a patient's mobility, function, and well-being. Physiotherapy helps through physical rehabilitation, injury prevention, and health and fitness. </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;