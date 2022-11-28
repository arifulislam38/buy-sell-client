import React from 'react';
import Advertise from './Advertise';
import Banner from './Banner';
import Category from './Categories';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Advertise></Advertise>
            <Services></Services>
        </div>
    );
};

export default Home;