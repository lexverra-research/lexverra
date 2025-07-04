import {
  Copyright,
  ListOrdered as TrademarkRegistered,
  LightbulbIcon,
  Scale,
  FileSearch,
  GraduationCap,
} from 'lucide-react';
import ServiceCard from '../Card/ServiceCard';
import './Service.css';

const Service = () => {
  const services = [
    {
      icon: <LightbulbIcon className="icon" />,
      title: 'Patent Filing',
      description:
        'Secure exclusive rights to your inventions with comprehensive patent applications and management.',
    },
    {
      icon: <Copyright className="icon" />,
      title: 'Copyright Protection',
      description:
        'Secure your creative works including literary, artistic, musical, and other intellectual creations.',
    },
    {
      icon: <TrademarkRegistered className="icon" />,
      title: 'Trademark Registration',
      description:
        'Protect your brand identity with robust trademark strategies and enforcement.',
    },
    {
      icon: <Scale className="icon" />,
      title: 'IP Litigation',
      description:
        'Vigorous representation in disputes involving infringement of intellectual property rights.',
    },
    {
      icon: <FileSearch className="icon" />,
      title: 'IP Research & Analysis',
      description:
        'Thorough investigation and strategic analysis of intellectual property landscapes and opportunities.',
    },
    {
      icon: <GraduationCap className="icon" />,
      title: 'Innovation Strategy',
      description:
        'Develop comprehensive R&D roadmaps aligned with business objectives and market opportunities.',
    },
  ];

  return (
    <section id="service">
      <div className="container">
        <div className="sdiv2">
          <h2 className="sheading">Our Comprehensive IP Services</h2>
          <p className="sdesc">
            We provide end-to-end intellectual property services to protect your innovations and creative assets.
          </p>
        </div>
        <div className="service-grid">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
        <button className="sbutton">Explore All Services</button>
      </div>
    </section>
  );
};

export default Service;
