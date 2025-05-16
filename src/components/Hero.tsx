
import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import EggAnimation from './EggAnimation';

const Hero = () => {
  const { user } = useAuth();
  
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
    // Trigger once to reveal elements that are already visible
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 grid-bg opacity-20"></div>
      <div className="absolute top-1/3 -left-28 w-64 h-64 bg-orange-500/20 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-1/4 -right-28 w-80 h-80 bg-green-500/20 rounded-full blur-[100px]"></div>
      
      {/* Egg Animation */}
      <EggAnimation />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full border border-green-500/30 bg-green-500/5">
            <span className="text-xs font-medium text-green-400">Next-Generation Poultry Technology</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-space font-bold mb-6 tracking-tight reveal-on-scroll">
            <span className="bg-gradient-to-r from-orange-500 to-green-500 bg-clip-text text-transparent">Smarter Poultry Farms.</span><br />
            Healthier Chickens.<br />
            Better Yields.
          </h1>
          
          <p className="text-lg text-gray-300 max-w-3xl mb-10 reveal-on-scroll stagger-1">
            Monitor temperature, ammonia, humidity, and CO₂ — in real-time. 
            Automate feed & airflow with our smart dashboard.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center reveal-on-scroll stagger-2">
            <Button asChild className="bg-orange-500 text-black hover:bg-orange-600 text-lg px-8 py-6">
              <Link to="/dashboard">
                View Dashboard Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-green-500/50 text-green-400 hover:bg-green-500/10 text-lg px-8 py-6">
              <Link to="#offerings">
                Explore Our Sensors
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="relative mx-auto mt-24 mb-8 reveal-on-scroll stagger-3">
        <div className="flex flex-col items-center">
          <span className="text-sm text-gray-400 mb-2">Scroll to explore</span>
          <div className="w-5 h-8 border-2 border-gray-400 rounded-full flex justify-center p-1">
            <div className="w-1 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
