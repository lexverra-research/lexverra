import React from 'react'
import { MonitorSmartphone, Workflow, Beaker, BookOpen, Scale, Briefcase } from 'lucide-react';
import './Experties.css'; // Assuming you have a CSS file for styling
const Experties = () => {
    const industries = [
        {
          icon: <MonitorSmartphone className="h-6 w-6" />,
          title: "Technology & Software",
          description: "Protecting innovations in software, hardware, AI, and emerging technologies."
        },
        {
          icon: <Workflow className="h-6 w-6" />,
          title: "Entertainment & Media",
          description: "Safeguarding creative content, publishing rights, and digital media assets."
        },
        {
          icon: <Beaker className="h-6 w-6" />,
          title: "Life Sciences & Healthcare",
          description: "Securing patents for pharmaceuticals, medical devices, and biotechnology innovations."
        },
        {
          icon: <BookOpen className="h-6 w-6" />,
          title: "Education & Research",
          description: "Protecting academic innovations, research outputs, and educational content."
        },
        {
          icon: <Scale className="h-6 w-6" />,
          title: "Manufacturing & Engineering",
          description: "Comprehensive IP protection for industrial processes, designs, and mechanical innovations."
        },
        {
          icon: <Briefcase className="h-6 w-6" />,
          title: "Consumer Goods & Retail",
          description: "Trademark and design protection for consumer products and retail innovations."
        }
      ];
  return (
    <section id='expertise'>
        <div>
            <div className='etop'>
                <h1>Industry Expertise</h1>
                <p>Our specialized knowledge spans across diverse industries, ensuring tailored IP solutions for your specific sector.</p>
            </div>
            <div className='ecard'>
                {
                    industries.map((industry,index)=>(
                        <div key={index}>
                            <div>{industry.icon}</div>
                            <h2>{industry.title}</h2>
                            <p>{industry.description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Experties