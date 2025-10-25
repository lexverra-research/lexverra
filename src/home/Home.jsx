import React, { use, useContext, useEffect } from 'react';
import { Shield } from 'lucide-react';
import './Home.css';
import img from '../assets/b6.jpg'; // Ensure this path is correct
import { Context } from '../Counter/Counter';

const Home = ({setModal}) => {
  const{counts,startCount}=useContext(Context);

  useEffect(() => {
    startCount("clients", 500, 3000);
    startCount("success_rate", 98,3000);
    startCount("happy_client", 300, 3000);
  }, [startCount]);

  return (
    <section className="hero-section" id="hero">
      <img src={img} alt="hero-background" />
      <div className='containt'>
        <div className="hero-wrapper">
        {/* <div className="shield-badge">
          <p>Leaders in Intellectual Property Protection</p>
        </div> */}

        <div className="hero-content">
          <h1 className='hero-heading'>
          Welcome to Lexverra 
          </h1>
          <h3 className="hero-title">
          Driving Innovation, Protecting Ideas, Empowering Businesses
          </h3>
          <p className="hero-description">
          Lexverra is a global leader in Intellectual Property (IP) services. We provide end-to-end solutions, including patent research, filing, analytics, trademark and copyright protection, and legal support. Our experts help businesses, startups, and research organizations protect their innovations and make strategic IP decisions.
          </p>
          <button className="cta-button" onClick={setModal}>
            Book a Consultant
          </button>
        </div>

        <div className="stats-grid">
          <div className="stat-item text-left">
            <p className="stat-value">{counts.clients||0}+</p>
            <p className="stat-label">Patents Filed</p>
          </div>
          <div className="stat-item text-center">
            <p className="stat-value">{counts.success_rate||0}%</p>
            <p className="stat-label">Success Rate</p>
          </div>
          <div className="stat-item text-right">
            <p className="stat-value">{counts.happy_client||0}+</p>
            <p className="stat-label">Happy Clients</p>
          </div>
        </div>
        {/* <div className="fill">
          <h1>
            IP Solutions
          </h1>
          <p>
            Offering end-to-end services tailored to protect and maximize the value of your intellectual property assets.
          </p>
        </div> */}
      </div>
      </div>
    </section>
  );
};

export default Home;
