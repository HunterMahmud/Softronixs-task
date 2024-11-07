import React from 'react';
import AboutUs from '../components/AboutUs';
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import Services from '../components/Services';

const Home = () => {
    return (
        <div className='max-w-[1600px] mx-auto'>
            <Navbar />
            <div className='h-[1px] bg-[#1716164d] w-full'>
            </div>
            <Banner/>
            <Services/>
            <AboutUs/>
        </div>
    );
};

export default Home;