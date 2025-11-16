import React from 'react';
import './About.css';
import { CheckCircle, BookOpen, Clock, Users } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <BookOpen className="icon" />,
      title: 'Expertise',
      description:
        'Our team comprises IP specialists with deep domain knowledge across various industries.',
    },
    {
      icon: <Clock className="icon" />,
      title: 'Efficiency',
      description:
        'We deliver timely solutions without compromising on quality or thoroughness.',
    },
    {
      icon: <CheckCircle className="icon" />,
      title: 'Excellence',
      description:
        'We maintain the highest standards in all our intellectual property services.',
    },
    {
      icon: <Users className="icon" />,
      title: 'Client-Focused',
      description:
        'We prioritize understanding your unique business needs to provide tailored IP strategies.',
    },
  ];

  const steps = [
    {
      number: '1',
      title: 'Comprehensive Audit',
      description: 'Thorough assessment of existing and potential IP assets',
    },
    {
      number: '2',
      title: 'Strategic Planning',
      description: 'Developing a tailored IP roadmap aligned with business goals',
    },
    {
      number: '3',
      title: 'Protection Implementation',
      description: 'Filing and securing appropriate IP rights',
    },
    {
      number: '4',
      title: 'Ongoing Management',
      description: 'Continuous monitoring and strategic portfolio management',
    },
  ];

  return (
    <section id="about">
      <div className="about-container" >
        <div className="about">
          <h1>About Lexverra</h1>
        </div>
        <div className="about-left">
          <div className="about-content">
            <h2>Driving Innovation, Protecting Ideas, Empowering Businesses</h2>
            <p>
            At Lexverra, we are at the forefront of global Intellectual Property (IP) services, offering innovative solutions that empower businesses, startups, and research organizations to navigate the complex landscape of IP protection and strategic management. As a trusted partner in the digital and technological age, we provide end-to-end services that cover everything from patent research, filing, and analytics to trademark and copyright protection, along with comprehensive legal support.
            </p>
            <p>
            We specialize in helping organizations protect their innovations, optimize their intellectual property portfolios, and make informed, strategic IP decisions that drive business growth. Whether you are a technology startup, a multinational corporation, or a cutting-edge research institution, Lexverra provides the insights, expertise, and tools necessary to safeguard your intellectual assets in today’s competitive market.
            </p>
            <p>
            Our team of experts brings a wealth of experience in managing the complexities of IP law and technology commercialization, helping clients secure and maximize the value of their intellectual property across industries. With a focus on innovation, technology advancement, and business strategy, we ensure that your intellectual property is not just protected, but is leveraged as a powerful asset for future growth.
            </p>
            <div className="value-grid">
              {values.map((value, index) => (
                <div key={index} className="value-item">
                  <div className="icon-wrapper">{value.icon}</div>
                  <div>
                    <h3>{value.title}</h3>
                    <p>{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="about-right">
          <div className="strategy-box">
            <h1>Our IP Strategy Approach</h1>
            {steps.map((step, index) => (
              <div key={index} className="step-row">
                <div className="step-circle"><p>{step.number}</p></div>
                <div className="step-details">
                  <h2>{step.title}</h2>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
