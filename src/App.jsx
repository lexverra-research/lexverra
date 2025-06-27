import { useEffect } from "react";
import Service from "./Components/Service"
import Header from "./header/Header"
import Home from "./home/Home"
import About from "./Components/About";
import Experties from "./Components/Experties";
import Contact from "./Components/Contact";


function App() {
  useEffect(() => {
    // Update page title
    document.title = "IntellectPro | IP Law & Innovation Strategy";
    
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

  return (
    <div className="pt-20">
      <Header />
      <Home />
      <Service />
      <About />
      <Experties/>
      <Contact />
    </div>
  )
}

export default App
