
import React, { useEffect } from 'react';
import { Globe } from './ui/globe';

const AboutUs = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.reveal-on-scroll');
      
      elements.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          el.classList.add('revealed');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const timelineItems = [
    {
      year: "2018",
      title: "Company Founded",
      description: "Started with a mission to revolutionize poultry farming through technology"
    },
    {
      year: "2019",
      title: "First Sensor Line",
      description: "Launched our first generation of smart poultry environment sensors"
    },
    {
      year: "2021",
      title: "Software Platform",
      description: "Released our integrated dashboard for comprehensive farm monitoring"
    },
    {
      year: "2023",
      title: "Global Expansion",
      description: "Expanded operations to multiple countries across Asia and Africa"
    }
  ];

  return (
    <section id="about" className="py-28 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-orange-500 font-medium mb-4 reveal-on-scroll">ABOUT US</h3>
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-8 reveal-on-scroll stagger-1">Our Journey</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto reveal-on-scroll stagger-2">
            From a small team of agricultural engineers and software developers to a global
            leader in poultry technology solutions, our mission remains the same: healthier
            birds and better yields through smart technology.
          </p>
        </div>
        
        {/* Timeline */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-px bg-orange-500/30"></div>
            
            {/* Timeline items */}
            {timelineItems.map((item, index) => (
              <div key={index} className="relative mb-12 reveal-on-scroll" style={{ transitionDelay: `${index * 100}ms` }}>
                <div className={`md:flex items-center ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}>
                  {/* Year bubble */}
                  <div className="md:w-1/2 flex items-center mb-4 md:mb-0">
                    <div className={`md:w-full flex ${index % 2 === 0 ? 'md:justify-end md:pr-8' : 'md:justify-start md:pl-8'}`}>
                      <div className="w-16 h-16 rounded-full bg-orange-500/10 border border-orange-500/30 flex items-center justify-center">
                        <span className="text-orange-500 font-bold">{item.year}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="md:w-1/2 md:pl-8">
                    <div className={`glass-morphism rounded-lg p-6 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                      <h4 className="text-xl font-space font-bold mb-2">{item.title}</h4>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </div>
                </div>
                
                {/* Center dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-orange-500"></div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Global Map */}
        <div className="text-center mb-8 reveal-on-scroll">
          <h3 className="text-2xl font-space font-bold mb-8">
            <span className="text-gradient">Global Reach</span>
          </h3>
        </div>
        
        <div className="max-w-4xl mx-auto relative reveal-on-scroll stagger-1">
          {/* Globe */}
          <div className="w-full aspect-[2/1] glass-morphism rounded-xl p-6 relative flex items-center justify-center">
            <Globe className="top-0" />
            
            <div className="absolute bottom-8 left-0 w-full text-center z-10">
              <p className="text-lg font-medium">
                Trusted by poultry farmers in India, Africa, and Southeast Asia
              </p>
            </div>
          </div>
          
          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="glass-morphism rounded-lg p-6 text-center reveal-on-scroll stagger-2">
              <div className="text-3xl font-space font-bold text-orange-500 mb-2">12+</div>
              <p className="text-gray-300">Countries Served</p>
            </div>
            <div className="glass-morphism rounded-lg p-6 text-center reveal-on-scroll stagger-3">
              <div className="text-3xl font-space font-bold text-orange-500 mb-2">500+</div>
              <p className="text-gray-300">Farm Installations</p>
            </div>
            <div className="glass-morphism rounded-lg p-6 text-center reveal-on-scroll stagger-4">
              <div className="text-3xl font-space font-bold text-orange-500 mb-2">24/7</div>
              <p className="text-gray-300">Monitoring & Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
