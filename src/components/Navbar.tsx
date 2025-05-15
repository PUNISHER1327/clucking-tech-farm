
import React, { useState, useEffect } from 'react';
import { Egg } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-morphism py-3' : 'py-6'}`}>
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
        <div className="flex items-center">
          <Egg className="h-8 w-8 text-highlight animate-pulse-glow mr-2" />
          <span className="font-space font-bold text-xl">Smart Poultry</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#mission" className="text-sm font-medium hover-glow">Mission</a>
          <a href="#offerings" className="text-sm font-medium hover-glow">Offerings</a>
          <a href="#about" className="text-sm font-medium hover-glow">About</a>
          <a href="#contact" className="text-sm font-medium hover-glow">Contact</a>
        </nav>
        
        <div className="flex items-center gap-4">
          <Button variant="outline" className="hidden sm:flex border-highlight text-highlight hover:bg-highlight/10">
            Login
          </Button>
          <Button className="bg-highlight text-black hover:bg-highlight-muted font-medium">Get Started</Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
