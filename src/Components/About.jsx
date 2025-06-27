import React from 'react'
import './About.css'; // Assuming you have a CSS file for styling
import { CheckCircle, BookOpen, Clock, Users } from 'lucide-react';
const About = () => {
    const values = [
        {
          icon: <BookOpen className="h-5 w-5" />,
          title: "Expertise",
          description: "Our team comprises IP specialists with deep domain knowledge across various industries."
        },
        {
          icon: <Clock className="h-5 w-5" />,
          title: "Efficiency",
          description: "We deliver timely solutions without compromising on quality or thoroughness."
        },
        {
          icon: <CheckCircle className="h-5 w-5" />,
          title: "Excellence",
          description: "We maintain the highest standards in all our intellectual property services."
        },
        {
          icon: <Users className="h-5 w-5" />,
          title: "Client-Focused",
          description: "We prioritize understanding your unique business needs to provide tailored IP strategies."
        }
      ];
  return (
    <section id='about'>
        <div className='ediv1'>
            <div className='ediv11'>
                
                <div className='ediv111'>
                    <h2>
                    Protecting Your Ideas with Strategic Expertise
                    </h2>
                    <p>
                    Founded on principles of excellence and innovation, our firm has been at the forefront of intellectual property law for over two decades. We combine legal expertise with business acumen to deliver results-oriented IP strategies.
                    </p>
                    <p>
                    Our approach integrates deep technical knowledge with commercial insight, ensuring your intellectual assets are not just protected but leveraged for maximum business advantage.
                    </p>
                    <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
                        {values.map((value, index) =>(
                            <div key={index} className='flex  '>
                                <div  className='aicon  w-[3vw]'>{value.icon}</div>
                                <div className=''>
                                    <h3>{value.title}</h3>
                                    <p>{value.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='ediv12'>
                <div className='ediv121'>
                    
                    <div className='flex flex-col gap-5 '>
                    <h1 className=' text-2xl '>Our IP Strategy Approach</h1>
                        <div className=" flex m-5">
                        <div className='h-[4vh] w-[4vh] rounded-full  text-center bg-blue-100'>1</div>
                        <div>
                            <h2>Comprehensive Audit</h2>
                            <p>Thorough assessment of existing and potential IP assets</p>
                        </div>
                        </div>
                        <div className=" flex m-5">
                        <div className='h-[4vh] w-[4vh] rounded-full  text-center bg-blue-100'>2</div>
                        <div>
                            <h2>Strategic Planning</h2>
                            <p>Developing a tailored IP roadmap aligned with business goals</p>
                        </div>
                        </div>
                        <div className=" flex m-5">
                        <div className='h-[4vh] w-[4vh] rounded-full  text-center bg-blue-100'>3</div>
                        <div>
                            <h2>Protection Implementation</h2>
                            <p>Filing and securing appropriate IP rights</p>
                        </div>
                        </div>
                        <div className=" flex m-5">
                        <div className='h-[4vh] w-[4vh] rounded-full  text-center bg-blue-100'>4</div>
                        <div>
                            <h2>Ongoing Management</h2>
                            <p>Continuous monitoring and strategic portfolio management</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About