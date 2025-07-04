import { useEffect, useState } from "react";
import Service from "./Components/Service"
import Header from "./header/Header"
import Home from "./home/Home"
import About from "./Components/About";
import Experties from "./Components/Experties";
import Contact from "./Components/Contact";
import Modal from "./Modal/Modal";
import ConsultantForm from "./Form/ConsultantForm";


function App() {
  useEffect(() => {
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href')?.substring(1);
        if (!targetId) return;
        
        const targetElement = document.getElementById(targetId);
        if (!targetElement) return;
        
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Adjust for navbar height
          behavior: 'smooth'
        });
      });
    });
  }, []);

  // Add modal close functionality
  const[isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="pt-20">
      <Header setModal={showModal} />
      <Home setModal={showModal}/>
      {isModalOpen && <Modal setModal={showModal} />}
      <Service />
      <About />
      <Experties/>
      <Contact />
      <ConsultantForm />
    </div>
  )
}

export default App
