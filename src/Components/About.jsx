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
        <div className="about-left">
          <div className="about-content">
            <h2>Protecting Your Ideas with Strategic Expertise</h2>
            <p>
              Founded on principles of excellence and innovation, our firm has been at the forefront of intellectual property law for over two decades. We combine legal expertise with business acumen to deliver results-oriented IP strategies.
            </p>
            <p>
              Our approach integrates deep technical knowledge with commercial insight, ensuring your intellectual assets are not just protected but leveraged for maximum business advantage.
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
