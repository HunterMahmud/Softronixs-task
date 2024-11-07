import React from 'react';
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';

const Home = () => {
    return (
        <div className='max-w-[1600px] mx-auto'>
            <Navbar />
            <div className='h-[1px] bg-[#1716164d] w-full'>
            </div>
            <Banner/>
        </div>
    );
};

export default Home;