
import React, { useState, useEffect } from 'react';
import { Egg, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { user } = useAuth();
  
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
          <Egg className="h-8 w-8 text-orange-500 animate-pulse-glow mr-2" />
          <span className="font-space font-bold text-xl">Smart Poultry</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#mission" className="text-sm font-medium hover-glow">Mission</a>
          <a href="#offerings" className="text-sm font-medium hover-glow">Offerings</a>
          <a href="#about" className="text-sm font-medium hover-glow">About</a>
          <a href="#contact" className="text-sm font-medium hover-glow">Contact</a>
        </nav>
        
        <div className="flex items-center gap-4">
          {user ? (
            <Button as={Link} to="/dashboard" className="bg-orange-500 text-black hover:bg-orange-600 font-medium">
              Dashboard
            </Button>
          ) : (
            <>
              <Button as={Link} to="/auth" variant="outline" className="hidden sm:flex border-orange-500/50 text-orange-500 hover:bg-orange-500/10">
                <LogIn className="h-4 w-4 mr-2" /> Login
              </Button>
              <Button as={Link} to="/auth" className="bg-orange-500 text-black hover:bg-orange-600 font-medium">
                Get Started
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
