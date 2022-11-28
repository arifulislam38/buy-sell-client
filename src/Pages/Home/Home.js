import React from 'react';
import Advertise from './Advertise';
import Banner from './Banner';
import Category from './Categories';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Advertise></Advertise>
        </div>
    );
};

export default Home;