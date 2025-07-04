import React from 'react';
import { Shield } from 'lucide-react';
import './Home.css';
import img from '../assets/b6.jpg'; // Ensure this path is correct

const Home = ({setModal}) => {
  return (
    <section className="hero-section" id="hero">
      <img src={img} alt="hero-background" />
      <div className='containt'>
        <div className="hero-wrapper">
        <div className="shield-badge">
          <Shield className="icon" />
          <span>Leaders in Intellectual Property Protection</span>
        </div>

        <div className="hero-content">
          <h3 className="hero-title">
            Protecting Your Intellectual Assets with Precision and Strategy
          </h3>
          <p className="hero-description">
            We specialize in copyright, trademark, patent, and innovation strategy to secure your intellectual property and drive business growth.
          </p>
          <button className="cta-button" onClick={setModal}>
            Book a Consultant
          </button>
        </div>

        <div className="stats-grid">
          <div className="stat-item text-left">
            <p className="stat-value">500+</p>
            <p className="stat-label">Patents Filed</p>
          </div>
          <div className="stat-item text-center">
            <p className="stat-value">98%</p>
            <p className="stat-label">Success Rate</p>
          </div>
          <div className="stat-item text-right">
            <p className="stat-value">300+</p>
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
