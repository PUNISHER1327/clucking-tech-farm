
import React from 'react';
import { Egg } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <Egg className="h-6 w-6 text-highlight mr-2" />
              <span className="font-space font-bold text-lg">Smart Poultry</span>
            </div>
            <p className="text-gray-400 text-sm">
              Advanced monitoring solutions for modern poultry farms.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover-glow">Temperature Sensors</a></li>
              <li><a href="#" className="hover-glow">Humidity Monitors</a></li>
              <li><a href="#" className="hover-glow">Air Quality Control</a></li>
              <li><a href="#" className="hover-glow">Dashboard Software</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#about" className="hover-glow">About Us</a></li>
              <li><a href="#" className="hover-glow">Careers</a></li>
              <li><a href="#" className="hover-glow">Partners</a></li>
              <li><a href="#contact" className="hover-glow">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover-glow">Documentation</a></li>
              <li><a href="#" className="hover-glow">Support</a></li>
              <li><a href="#" className="hover-glow">Blog</a></li>
              <li><a href="#" className="hover-glow">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Smart Poultry Technologies. All rights reserved.
          </p>
          
          <div className="flex items-center">
            <div className="flex space-x-4 mr-6">
              <a href="#" className="text-gray-400 hover:text-highlight transition-colors duration-200">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-highlight transition-colors duration-200">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
            
            <div className="flex items-center space-x-2">
              <button className="text-xs text-gray-400 hover:text-white transition-colors duration-200">🇬🇧 EN</button>
              <button className="text-xs text-gray-400 hover:text-white transition-colors duration-200">🇮🇳 HI</button>
              <button className="text-xs text-gray-400 hover:text-white transition-colors duration-200">ಕನ್ನಡ</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
