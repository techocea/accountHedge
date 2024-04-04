import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';
import heroImg from '../images/web-dev.svg';
import Typewriter from 'typewriter-effect';
import accImg from '../images/hero img1.jpg';
import Slider from './Slider';
const HeroV2 = () => {
    return (
        <>
            <div className="hero" id='hero'>
                              
                <div className="m-auto overflow-hidden lg:mt-24 p-2 md:p-12 h-4/5 hero2" data-aos="zoom-in">
                   
                   

                    <div className="lg:w-1/2 flex flex-col justify-center" data-aos="zoom-in" data-aos-delay="200">
                            <h1 className="mb-5 md:text-5xl text-4xl font-bold text-white">
                            <Typewriter  options={{
                                strings: ['Manage Your Own Business with', 'AccountEdge Pro Cloud Hosting!'],
                                autoStart: true,
                                loop: true,  }}
                            />  

                            </h1>
                            <h2 className="mb-5 md:text-3xl text-2xl font-bold text-blue-900 hidden"> &nbsp; Budget-Friendly Financial Management: </h2>
                            <h2 className="mb-5 md:text-3xl text-xl font-bold text-white"> &nbsp; Unleashing the Power of Affordable Accounting Software.</h2>
                            <div className="text-3xl font-semibold tracking-tight mb-5 text-white">&nbsp; Cloud desktop accounting&nbsp;... &nbsp;Access &nbsp;from &nbsp;anywhere &nbsp;anytime &nbsp;&nbsp;any device.</div>
                         
                        </div>
                    
                </div>
            </div>
        </>
    )
}

export default HeroV2;