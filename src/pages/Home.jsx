import React from 'react';
import AboutUs from '../components/AboutUs';
import Banner from '../components/Banner';
import Blog from '../components/Blog';
import ConnectWithUs from '../components/ConnectWithUs';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Project from '../components/Project';
import Services from '../components/Services';
import Team from '../components/Team';
import Testimonials from '../components/Testimonials';
import WorkPolicy from '../components/WorkPolicy';

const Home = () => {
    return (
        <div className='mx-auto font-Grotesk'>
             <Navbar />
            <div className='h-[1px] bg-[#1716164d] w-full'>
            </div>
             <Banner/> 
           <Services/>
            {/* <AboutUs/>
            <WorkPolicy/>
            <Project/>
            <Team/>
            <Testimonials/>
            <ConnectWithUs/>
            <Blog/>
            <Footer/> */}
        </div>
    );
};

export default Home;