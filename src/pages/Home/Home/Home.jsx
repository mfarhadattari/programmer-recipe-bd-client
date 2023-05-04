import React from 'react';
import Banner from '../Banner/Banner';
import Chefs from '../../chefs/Chefs/Chefs';
import About from '../About/About';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Chefs></Chefs>
            <About></About>
        </div>
    );
};

export default Home;