import React, { useContext, useEffect, useRef, useState } from 'react';
import { Shield } from 'lucide-react';
import './Home.css';
import '../Counter/animation.css'
import img from '../assets/b6.jpg';
import { Context } from '../Counter/Counter';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { SplitText } from 'gsap/SplitText';
import Service from '../Components/Service';
import Modal from '../Modal/Modal';

gsap.registerPlugin(TextPlugin,SplitText);

const Home = () => {
  //Get all requirement from context
  const { counts, startCount, resetCount ,handleMouseLeave,btnRef,handleMouseEnter} = 
  useContext(Context);

  const ref = useRef(null);
  const hasAnimated = useRef(false);
  //hero-heading animation
  let split, animation;
  const line=()=>{
    animation && animation.revert();
  animation = gsap.from(split.lines, {
    rotationX: -100,
    transformOrigin: "50% 50% -160px",
    opacity: 0,
    duration: 0.8, 
    ease: "power3",
    stagger: 0.25
  })
  }
  function animateHeading() {
    const heading = ref.current.querySelector('.hero-heading');
    split = new SplitText(heading, { type: "lines" });
    line();
  }

  useEffect(() => {
    const section = ref.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const titleEl = section.querySelector('.hero-title');
          if (entry.isIntersecting && !hasAnimated.current) {
            startCount("clients", 500, 3000);
            startCount("success_rate", 98, 3000);
            startCount("happy_client", 300, 3000);

            gsap.to(titleEl, {
              duration: 2,
              text: "Driving Innovation, Protecting Ideas, Empowering Businesses",
              ease: "none",
              delay: 0.5
             
            }
            
          );
          animateHeading();
            hasAnimated.current = true;
          } else if (!entry.isIntersecting && hasAnimated.current) {
            resetCount("clients");
            resetCount("success_rate");
            resetCount("happy_client");
            // Reset the text content so it can re-animate
          if (titleEl) {
            titleEl.textContent = "D...";
          }

            hasAnimated.current = false;
          }
        });
      },
      { threshold: 0.1 }
    );

    if (section) observer.observe(section);
    return () => {
      if (section) observer.unobserve(section);
    };
  }, [startCount, resetCount]);

  // Add modal close functionality
  const[isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <video autoPlay loop muted playsInline className='back-video'>
          <source src='../assets/background-video.mp4' type='video/mp4'/>
        </video>
      <section className="hero-section" id="hero" ref={ref}>
        
      <div className="containt">
        <div className="hero-wrapper">
          <div className="hero-content">
            <h1 className="hero-heading">Welcome to Lexverra</h1>
            <h3 className="hero-title">
              D...
            </h3>
            <p className="hero-description">
            Lexverra is a global leader in Intellectual Property (IP) services. We provide end-to-end solutions, including patent research, filing, analytics, trademark and copyright protection, and legal support. Our experts help businesses, startups, and research organizations protect their innovations and make strategic IP decisions.
            </p>
            <button className="cta-button" onClick={showModal} ref={btnRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              Book a Consultant
            </button>
          </div>

          <div className="stats-grid">
            <div className="stat-item text-left">
              <p className="stat-value">{counts.clients || 0}+</p>
              <p className="stat-label">Patents Filed</p>
            </div>
            <div className="stat-item text-center">
              <p className="stat-value">{counts.success_rate || 0}%</p>
              <p className="stat-label">Success Rate</p>
            </div>
            <div className="stat-item text-right">
              <p className="stat-value">{counts.happy_client || 0}+</p>
              <p className="stat-label">Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {isModalOpen && <Modal setModal={showModal} />}
    <Service/>
    </div>
  );
};

export default Home;