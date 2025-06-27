
import { Copyright, ListOrdered as TrademarkRegistered, LightbulbIcon, Scale, FileSearch, GraduationCap } from 'lucide-react';
import ServiceCard from '../Card/ServiceCard';
import './Service.css'; // Assuming you have a CSS file for styling
const Service = () => {
  
    const services = [
        {
          icon: <Copyright className="h-6 w-6" />,
          title: "Copyright Protection",
          description: "Secure your creative works including literary, artistic, musical, and other intellectual creations."
        },
        {
          icon: <TrademarkRegistered className="h-6 w-6" />,
          title: "Trademark Registration",
          description: "Protect your brand identity with robust trademark strategies and enforcement."
        },
        {
          icon: <LightbulbIcon className="h-6 w-6" />,
          title: "Patent Filing",
          description: "Secure exclusive rights to your inventions with comprehensive patent applications and management."
        },
        {
          icon: <Scale className="h-6 w-6" />,
          title: "IP Litigation",
          description: "Vigorous representation in disputes involving infringement of intellectual property rights."
        },
        {
          icon: <FileSearch className="h-6 w-6" />,
          title: "IP Research & Analysis",
          description: "Thorough investigation and strategic analysis of intellectual property landscapes and opportunities."
        },
        {
          icon: <GraduationCap className="h-6 w-6" />,
          title: "Innovation Strategy",
          description: "Develop comprehensive R&D roadmaps aligned with business objectives and market opportunities."
        }
      ];
  return (
    <section id='service' >
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='sdiv2'>
            <h2 className="">Our Comprehensive IP Services</h2>
            <p className="text-gray-600">We provide end-to-end intellectual property services to protect your innovations and creative assets.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {services.map((service, index) => (
                    <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description}/>
                ))}
                </div>
                <button className='sbutton'>Explore All Services</button>.
        </div>
    </section>
  )
}

export default Service