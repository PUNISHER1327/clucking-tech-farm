
import React, { useEffect } from 'react';
import { ArrowRight, Thermometer, Droplet, Cloud, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SensorCard from './SensorCard';

const Offerings = () => {
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

  const sensorData = [
    {
      title: "Temperature",
      icon: <Thermometer className="h-6 w-6" />,
      currentValue: 23.5,
      unit: "°C",
      minValue: 18,
      maxValue: 32,
      idealRange: [21, 26] as [number, number], // Explicitly cast as tuple
      color: "#f97316"
    },
    {
      title: "Humidity",
      icon: <Droplet className="h-6 w-6" />,
      currentValue: 65.2,
      unit: "%",
      minValue: 40,
      maxValue: 80,
      idealRange: [60, 70] as [number, number], // Explicitly cast as tuple
      color: "#0ea5e9"
    },
    {
      title: "CO₂ Levels",
      icon: <Cloud className="h-6 w-6" />,
      currentValue: 820,
      unit: "ppm",
      minValue: 400,
      maxValue: 1500,
      idealRange: [500, 900] as [number, number], // Explicitly cast as tuple
      color: "#8b5cf6"
    },
    {
      title: "Ammonia",
      icon: <AlertTriangle className="h-6 w-6" />,
      currentValue: 15.8,
      unit: "ppm",
      minValue: 0,
      maxValue: 50,
      idealRange: [0, 20] as [number, number], // Explicitly cast as tuple
      color: "#ef4444"
    }
  ];

  return (
    <section id="offerings" className="py-28 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-highlight font-medium mb-4 reveal-on-scroll">OUR SOLUTIONS</h3>
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-8 reveal-on-scroll stagger-1">What We Offer</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto reveal-on-scroll stagger-2">
            Our complete solution combines precision hardware with intelligent software
            to give you unprecedented control over your poultry farm environment.
          </p>
        </div>
        
        {/* Sensors Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-space font-bold mb-8 reveal-on-scroll">
            <span className="text-gradient">Smart Sensors</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sensorData.map((sensor, index) => (
              <div key={index} className="reveal-on-scroll" style={{ transitionDelay: `${index * 100}ms` }}>
                <SensorCard {...sensor} />
              </div>
            ))}
          </div>
        </div>
        
        {/* Software Section */}
        <div>
          <h3 className="text-2xl font-space font-bold mb-8 reveal-on-scroll">
            <span className="text-gradient">Intelligent Software</span>
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
            <div className="lg:col-span-2 reveal-on-scroll">
              <h4 className="text-xl font-bold mb-4">Smart Poultry Dashboard</h4>
              <ul className="space-y-4">
                {[
                  "Real-time monitoring from any device, anywhere",
                  "Intelligent alerts for critical conditions",
                  "Multi-language support (EN, HI, KN)",
                  "Automated environmental controls",
                  "Historical data analysis and reporting"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-highlight mr-2">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="mt-6 bg-highlight text-black hover:bg-highlight-muted group">
                Launch Dashboard
                <span className="inline-block ml-2 group-hover:rotate-45 transition-transform duration-300">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Button>
            </div>
            
            <div className="lg:col-span-3 reveal-on-scroll stagger-2">
              <div className="glass-morphism rounded-lg border border-highlight/30 p-2 shadow-[0_0_15px_rgba(250,204,21,0.15)]">
                <div className="bg-black/60 rounded-lg overflow-hidden">
                  {/* Mock Dashboard UI */}
                  <div className="bg-gray-900 p-3 flex justify-between items-center border-b border-gray-800">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-red-500 rounded-full mx-1"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full mx-1"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full mx-1"></div>
                    </div>
                    <div className="text-sm text-gray-400">Smart Poultry Dashboard</div>
                    <div className="text-sm text-gray-400">Connected</div>
                  </div>
                  
                  <div className="grid grid-cols-4 gap-2 p-4">
                    <div className="col-span-4 md:col-span-2 p-3 bg-gray-800/80 rounded-lg text-left">
                      <h5 className="text-sm text-gray-400 mb-1">Farm Overview</h5>
                      <div className="flex items-end">
                        <span className="text-3xl font-medium">87%</span>
                        <span className="text-xs text-green-400 ml-2">+2.4%</span>
                      </div>
                      <p className="text-xs text-gray-500">Optimal conditions score</p>
                    </div>
                    
                    <div className="col-span-2 md:col-span-1 p-3 bg-gray-800/80 rounded-lg text-left">
                      <h5 className="text-xs text-gray-400">Temperature</h5>
                      <p className="text-xl">23.5°C</p>
                    </div>
                    
                    <div className="col-span-2 md:col-span-1 p-3 bg-gray-800/80 rounded-lg text-left">
                      <h5 className="text-xs text-gray-400">Humidity</h5>
                      <p className="text-xl">65.2%</p>
                    </div>
                    
                    {/* Chart area */}
                    <div className="col-span-4 h-48 bg-gray-800/80 rounded-lg p-3">
                      <h5 className="text-sm text-gray-400 mb-2 text-left">24-Hour Trends</h5>
                      <div className="h-32 flex items-end justify-between">
                        {[35, 45, 65, 55, 60, 75, 62, 45, 50, 65, 70, 60].map((value, i) => (
                          <div key={i} className="w-full">
                            <div 
                              className="bg-highlight/70 w-2/3 mx-auto rounded-t"
                              style={{ height: `${value}%` }}
                            ></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background accent */}
      <div className="absolute top-1/3 left-0 w-64 h-64 bg-highlight/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-1/3 right-0 w-64 h-64 bg-highlight/10 rounded-full blur-[100px]"></div>
    </section>
  );
};

export default Offerings;
