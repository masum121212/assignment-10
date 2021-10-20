import React from 'react';
import Banner from '../Banner/Banner';
import HomeDoctors from '../HomeDoctors/HomeDoctors';
import HomeService from '../HomeService/HomeService';

const Home = () => {
    return (
        <div>
            <h1>this is home</h1>
            <h2>bannr</h2>
            <Banner></Banner>
            <h2>home Service</h2>
            <HomeService></HomeService>
            <h2>home doctors</h2>
            <HomeDoctors></HomeDoctors>
            
        </div>
    );
};

export default Home;