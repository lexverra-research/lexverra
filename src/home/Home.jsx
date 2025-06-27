import React from 'react'

import { Shield, ChevronRight } from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden hgh " id='hero'>
      <div className=' h-[100%] flex flex-col gap-7'>
      <div className="flex items-center sheild">
            <Shield className="h-4 w-4 mr-2" />
            <span>Leaders in Intellectual Property Protection</span>
          </div>
      <div className='flex flex-col h-[65%]  w-[70%]'>
        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-blue-950 mb-6 leading-tight max-w-4xl animate-fadeSlideUp'>
        Protecting Your Intellectual Assets with Precision and Strategy 
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-10 animate-fadeSlideUp animation-delay-100 para">
            We specialize in copyright, trademark, patent, and innovation strategy to secure your intellectual property and drive business growth.
          </p>
          <button className='hbutton'>
            <a href="#contact">Book a Consultant</a>
          </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3  border-t border-gray-200 animate-fadeIn animation-delay-300 w-[65%] " style={{paddingTop:"6vh"}}>
          <div className="text-left">
            <p className="text-3xl font-bold text-primary-700">500+</p>
            <p className="text-gray-600">Patents Filed</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-primary-700">98%</p>
            <p className="text-gray-600">Success Rate</p>
          </div>
          <div className="text-right">
            <p className="text-3xl font-bold text-primary-700">300+</p>
            <p className="text-gray-600">Happy Clients</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home