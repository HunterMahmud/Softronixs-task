import React from 'react';
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar />
            <div>
                <span className='h-3 w-full bg-red-500'></span>
            </div>
            <Banner/>
        </div>
    );
};

export default Home;