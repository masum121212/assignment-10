import React from 'react';
import About from '../../About/About';
import Contact from '../../Contact/Contact';
import Banner from '../Banner/Banner';
import HomeDoctors from '../HomeDoctors/HomeDoctors';
import HomeService from '../HomeService/HomeService';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeService></HomeService>
            <HomeDoctors></HomeDoctors>
            <Contact></Contact>
            <About></About>
            
        </div>
    );
};

export default Home;