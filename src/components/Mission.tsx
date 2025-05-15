
import React, { useEffect } from 'react';
import { Thermometer, Droplet, Cloud, AlertTriangle } from 'lucide-react';

const Mission = () => {
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

  const icons = [
    {
      icon: <Thermometer className="w-12 h-12 text-highlight" />,
      title: "Optimal Temperature",
      description: "Maintaining ideal temperature ranges increases hatch rates by 18%"
    },
    {
      icon: <Droplet className="w-12 h-12 text-highlight" />,
      title: "Humidity Control",
      description: "Perfect humidity levels reduce respiratory issues by 24%"
    },
    {
      icon: <Cloud className="w-12 h-12 text-highlight" />,
      title: "CO₂ Monitoring",
      description: "Automated ventilation improves air quality and growth rates"
    },
    {
      icon: <AlertTriangle className="w-12 h-12 text-highlight" />,
      title: "Ammonia Detection",
      description: "Early warnings prevent dangerous ammonia buildup situations"
    }
  ];

  return (
    <section id="mission" className="py-28 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-highlight font-medium mb-4 reveal-on-scroll">OUR MISSION</h3>
            <h2 className="text-4xl md:text-5xl font-space font-bold mb-8 reveal-on-scroll stagger-1">
              Reimagining Poultry Farming with Tech
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto reveal-on-scroll stagger-2">
              We're bridging the gap between traditional farming and cutting-edge technology. 
              Our sensors and software work together to create optimal environments for poultry, 
              resulting in healthier animals and increased production efficiency.
            </p>
          </div>
          
          {/* Connecting line */}
          <div className="relative my-16">
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-highlight/50 to-transparent"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-highlight rounded-full"></div>
            <div className="flex justify-between">
              <div className="bg-background px-4 py-2 relative z-10 text-gray-300">Rural Farm</div>
              <div className="bg-background px-4 py-2 relative z-10 text-gray-300">Smart Dashboard</div>
            </div>
          </div>
          
          {/* Key benefits grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {icons.map((item, index) => (
              <div 
                key={index}
                className="flex flex-col items-center text-center glass-morphism p-6 rounded-lg 
                  hover:border-highlight/50 transition-all duration-300 group reveal-on-scroll"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 transform transition-transform duration-300 group-hover:scale-110">
                  {item.icon}
                </div>
                <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Background accent */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-highlight/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/10 rounded-full blur-[100px]"></div>
    </section>
  );
};

export default Mission;
